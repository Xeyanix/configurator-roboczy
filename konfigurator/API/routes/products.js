const express = require("express");
const router = express.Router();

// Parser JSON dla wszystkich tras w tym routerze
router.use(express.json());

let motherboardsSrc = require("../common/consts/motherboard.js");
let cpu = require("../common/consts/cpu");
let ram = require("../common/consts/ram");
let ssd = require("../common/consts/ssd.js");
let charger = require("../common/consts/charger");
let gpu = require("../common/consts/gpu");
let Case = require("../common/consts/Case.js");

// In-memory koszyk (lista zakupów)
let shoppingList = [];

// Kopie robocze
let motherboards = motherboardsSrc || [];
let cpus = cpu || [];
let rams = ram || [];
let ssds = ssd || [];
let chargers = charger || [];
let gpus = gpu || [];
let cases = Case || [];

/* ==========================  AUTOINFERENCJA SPECS  ========================== */

// Ujednolicenie labeli chipsetów
const normalizeChipsetLabel = (code) => {
  if (!code) return null;
  code = String(code).toUpperCase();

  // AMD
  if (code === "TRX50") return "AMD TRX50";
  if (code === "X870E") return "AMD X870E";
  if (code === "X870") return "AMD X870";
  if (code === "X670E") return "AMD X670E";
  if (code === "X670") return "AMD X670";
  if (code === "B850") return "AMD B850";
  if (code === "B650E") return "AMD B650E";
  if (code === "B650") return "AMD B650";
  if (code === "A620") return "AMD A620";
  if (code === "B550") return "AMD B550";
  if (code === "B450") return "AMD B450";
  if (code === "A520") return "AMD A520";

  // Intel
  if (code === "Z890") return "Intel Z890";
  if (code === "B860") return "Intel B860";
  if (code === "Z790") return "Intel Z790";
  if (code === "B760") return "Intel B760";
  if (code === "B660") return "Intel B660";
  if (code === "H670") return "Intel H670";
  if (code === "H610") return "Intel H610";
  if (code === "H510") return "Intel H510";
  if (code === "Q670") return "Intel Q670";

  return code;
};

// --- RAM: inferencja z nazwy i linku (TOP-LEVEL) ---
const inferRamSpecs = ({ name, link }) => {
  const text = `${name || ""} ${link || ""}`.toLowerCase().replace(/[-_]/g, " ");

  let memory_type = null;
  if (/\bddr5\b/.test(text)) memory_type = "DDR5";
  else if (/\bddr4\b/.test(text) || /\bd4\b/.test(text)) memory_type = "DDR4";
  else if (/\bddr3l?\b/.test(text)) memory_type = "DDR3";

  // SO-DIMM vs DIMM
  const module_type = /so ?-?dimm|sodimm/.test(text) ? "SO-DIMM" : "DIMM";

  // prędkość (np. 3600 MHz / 5600 MT/s / DDR5-6000)
  const m =
    text.match(/(\d{4,5})\s*(mhz|mt\/?s|mt-?s)/i) ||
    text.match(/ddr[345]\s*[- ]\s*(\d{4,5})/i);
  const speed_mhz = m ? Number(m[1]) : undefined;

  // ECC (opcjonalne)
  const ecc = /\becc\b/.test(text) || undefined;

  return { memory_type, module_type, speed_mhz, ecc };
};

// --- Płyty główne: socket/chipset/memory/form_factor z nazwy+linku ---
const inferSpecsFromName = ({ name, link }) => {
  const n = (name || "").toUpperCase();
  const text = `${name || ""} ${link || ""}`.toLowerCase().replace(/[-_]/g, " ");

  // CHIPSET
  const chipsetCode =
    (n.match(/TRX50|X870E|X870|X670E|X670|B850|B650E|B650|A620|B550|B450|A520|Z890|B860|Z790|B760|B660|H670|H610|H510|Q670/) || [null])[0];
  const chipset = normalizeChipsetLabel(chipsetCode);

  // SOCKET
  let socket = null;
  if (/TRX50|STR5/.test(n)) socket = "STR5";
  else if (/X870E|X870|X670E|X670|B850|B650E|B650|A620|\bAM5\b/.test(n)) socket = "AM5";
  else if (/B550|B450|A520|\bAM4\b/.test(n)) socket = "AM4";
  else if (/Z890|B860|\b1851\b/.test(n)) socket = "LGA1851";
  else if (/Z790|B760|B660|H670|H610|\b1700\b/.test(n)) socket = "LGA1700";
  else if (/H510|\b1200\b/.test(n)) socket = "LGA1200";

  // MEMORY TYPE (najpierw bezpośrednio z nazwy/linku)
  let memory_type = null;
  if (/\bddr5\b/.test(text)) memory_type = "DDR5";
  else if (/\bddr4\b/.test(text) || /\bd4\b/.test(text)) memory_type = "DDR4";
  else if (/\bddr3l?\b/.test(text)) memory_type = "DDR3";
  // Jeśli nie znaleziono w tekście — użyj heurystyk po sockecie/chipsecie
  if (!memory_type) {
    // DDR5 tylko
    if (socket === "AM5" || socket === "STR5" || socket === "LGA1851") {
      memory_type = "DDR5";
    } else if (socket === "AM4" || socket === "LGA1200") {
      memory_type = "DDR4";
    } else if (
      chipset &&
      /AMD (X870E|X870|X670E|X670|B850|B650E|B650|A620)/i.test(chipset)
    ) {
      memory_type = "DDR5";
    } else if (chipset && /AMD (B550|B450|A520)/i.test(chipset)) {
      memory_type = "DDR4";
    }
    // LGA1700 (Z790/B760/B660/H670/H610) może być DDR4 *lub* DDR5 — zostaw null jeśli nie ma w nazwie/linku.
  }

  // FORM FACTOR
  let form_factor = "ATX";
  if (/\bITX\b/.test(n) || /(X|Z|B|H|A)\d{3}I\b/.test(n)) form_factor = "ITX";
  else if (/(X|Z|B|H|A)\d{3}M\b/.test(n) || /-M\b/.test(n)) form_factor = "mATX";
  else if (/\bE-?ATX\b/.test(n) || /\bEE?ATX\b/.test(n)) form_factor = "E-ATX";

  return { socket, chipset, memory_type, form_factor };
};

// Pomocnicze porównanie id jako string
const byId = (arr, id) =>
  (Array.isArray(arr) ? arr.find((x) => String(x.id) === String(id)) : undefined);

/* ============================  ENDPOINTY  ============================ */

// Wszystkie produkty
router.get("/", (_req, res) => {
  // Wzbogacamy płyty o specs NA ŻYWO (pozwala widzieć też świeżo dodane przez /new)
  const motherboardsEnriched = motherboards.map((mb) => ({
    ...mb,
    specs: {
      ...(mb.specs || {}),
      ...inferSpecsFromName({ name: mb.name, link: mb.link }),
    },
  }));

  const allComponents = [
    ...motherboardsEnriched.map((motherboard) => ({
      id: motherboard.id,
      name: motherboard.name,
      price: motherboard.price,
      type: "Płyta główna",
      specs: {
        socket: motherboard.specs?.socket ?? null,
        chipset: motherboard.specs?.chipset ?? null,
        memory_type: motherboard.specs?.memory_type ?? null,
        form_factor: motherboard.specs?.form_factor ?? null,
      },
      image: motherboard.image,
      link: motherboard.link,
    })),

    ...cpus.map((c) => ({
      id: c.id,
      name: c.name,
      price: c.price,
      type: "Procesor",
      specs: { socket: c.specs?.socket ?? null },
      image: c.image,
      link: c.link,
    })),

    ...rams.map((r) => {
      const inferred = inferRamSpecs(r);
      return {
        id: r.id,
        name: r.name,
        price: r.price,
        type: "RAM",
        image: r.image,
        link: r.link,
        specs: {
          ...(r.specs || {}),
          memory_type: r.specs?.memory_type ?? inferred.memory_type ?? null,
          module_type: r.specs?.module_type ?? inferred.module_type ?? null,
          speed_mhz: r.specs?.speed_mhz ?? inferred.speed_mhz ?? null,
          ecc: r.specs?.ecc ?? inferred.ecc ?? null,
        },
      };
    }),

    ...ssds.map((s) => ({
      id: s.id,
      name: s.name,
      price: s.price,
      type: "SSD",
      specs: s.specs || {},
      image: s.image,
      link: s.link,
    })),

    ...chargers.map((ch) => ({
      id: ch.id,
      name: ch.name,
      price: ch.price,
      type: "Charger",
      specs: ch.specs || {},
      image: ch.image,
      link: ch.link,
    })),

    ...gpus.map((g) => ({
      id: g.id,
      name: g.name,
      price: g.price,
      type: "GPU",
      specs: g.specs || {},
      image: g.image,
      link: g.link,
    })),

    ...cases.map((c) => ({
      id: c.id,
      name: c.name,
      price: c.price,
      type: "Cases",
      specs: c.specs || {},
      image: c.image,
      link: c.link,
    })),
  ];

  res.status(200).json(allComponents);
});

// Shopping list (get)
router.get("/shoppingList", (_req, res) => {
  const plainList = shoppingList.filter(
    (value) => value && typeof value === "object" && Object.keys(value).length !== 0
  );
  setTimeout(() => {
    res
      .status(200)
      .json(
        plainList.map((product) => ({
          id: product.id,
          name: product.name,
          price: product.price,
          type: product.type,
        }))
      );
  }, 1000);
});

// Shopping list (add)
router.post("/shoppingList/new", (req, res) => {
  const { id, name, price, type } = req.body || {};
  if (id == null || !name || price == null || !type) {
    return res
      .status(400)
      .json({ error: "Invalid payload. Required: id, name, price, type." });
  }
  shoppingList.push({ id, name, price, type });
  setTimeout(() => {
    res.status(201).json({ id, name, price, type });
  }, 1000);
});

// Shopping list (delete by id)
router.delete("/shoppingList/:shoppingListId", (req, res) => {
  const id = req.params.shoppingListId;
  const idx = shoppingList.findIndex(
    (product) => String(product.id) === String(id)
  );

  if (idx !== -1) {
    const removed = shoppingList.splice(idx, 1)[0];
    setTimeout(() => {
      res.status(200).json(removed);
    }, 1000);
  } else {
    setTimeout(() => {
      res.status(404).json({ error: "Product not found in shoppingList" });
    }, 1000);
  }
});

// Shopping list (clear all)
router.delete("/shoppingList", (_req, res) => {
  shoppingList = [];
  setTimeout(() => {
    res.status(200).json({ message: "All products removed from shopping list" });
  }, 1000);
});

// Dodanie nowej płyty (bezpośrednio do tablicy)
router.post("/new", (req, res) => {
  const payload = req.body || {};
  if (!payload.id || !payload.name) {
    return res.status(400).json({
      error: "Invalid payload. Required: id, name. Optional: price, image, link, specs.",
    });
  }
  // Uzupełnij brakujące specs automatycznie, ale nie nadpisuj podanych
  const inferred = inferSpecsFromName({ name: payload.name, link: payload.link });
  const toInsert = {
    ...payload,
    specs: { ...(payload.specs || {}), ...inferred },
  };
  motherboards.push(toInsert);
  res.status(201).json(toInsert);
});

/* ---------------------------  GET by ID (reszta) --------------------------- */

router.get("/cpus/:id", (req, res) => {
  const selectedCpu = byId(cpus, req.params.id);
  if (!selectedCpu) return res.status(404).json({ error: "CPU not found" });
  res.status(200).json(selectedCpu);
});

router.get("/rams/:id", (req, res) => {
  const selectedRam = byId(rams, req.params.id);
  if (!selectedRam) return res.status(404).json({ error: "RAM not found" });

  const inferred = inferRamSpecs(selectedRam);
  const enriched = {
    ...selectedRam,
    specs: {
      ...(selectedRam.specs || {}),
      memory_type: selectedRam.specs?.memory_type ?? inferred.memory_type ?? null,
      module_type: selectedRam.specs?.module_type ?? inferred.module_type ?? null,
      speed_mhz: selectedRam.specs?.speed_mhz ?? inferred.speed_mhz ?? null,
      ecc: selectedRam.specs?.ecc ?? inferred.ecc ?? null,
    },
  };

  res.status(200).json(enriched);
});

router.get("/ssds/:id", (req, res) => {
  const selectedSSD = byId(ssds, req.params.id);
  if (!selectedSSD) return res.status(404).json({ error: "SSD not found" });
  res.status(200).json(selectedSSD);
});

router.get("/chargers/:id", (req, res) => {
  const selectedCharger = byId(chargers, req.params.id);
  if (!selectedCharger) return res.status(404).json({ error: "Charger not found" });
  res.status(200).json(selectedCharger);
});

router.get("/gpus/:id", (req, res) => {
  const selectedGPU = byId(gpus, req.params.id);
  if (!selectedGPU) return res.status(404).json({ error: "GPU not found" });
  res.status(200).json(selectedGPU);
});

router.get("/cases/:id", (req, res) => {
  const selectedCase = byId(cases, req.params.id);
  if (!selectedCase) return res.status(404).json({ error: "Case not found" });
  res.status(200).json(selectedCase);
});

// Płyta główna po ID (z uzupełnionym specs)
router.get("/:id", (req, res) => {
  const selectedMotherboard = byId(motherboards, req.params.id);
  if (!selectedMotherboard) {
    return res.status(404).json({ error: "Motherboard not found" });
  }
  const enriched = {
    ...selectedMotherboard,
    specs: {
      ...(selectedMotherboard.specs || {}),
      ...inferSpecsFromName({ name: selectedMotherboard.name, link: selectedMotherboard.link }),
    },
  };
  res.status(200).json(enriched);
});

module.exports = router;
