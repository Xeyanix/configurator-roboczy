import React, { useState, useEffect, useMemo, useRef } from "react";
import styles from "../common/styles/ProductList.module.scss";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import {
  loadCartList,
  setProductsLoadingState,
  addToLastViewed,
  setConfigPart,
  clearAllConfig,
} from "../redux/appSlice";
import { v4 as uuidv4 } from "uuid";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const PAGE_SIZE = 30;

function ProductList({ filters }) {
  const loadingStatus = useSelector((state) => state.app.loadingStatus);
  const lastViewedProducts = useSelector((state) => state.app.lastViewed);
  const summaryConfig = useSelector((state) => state.app.summaryConfig);
  const dispatch = useDispatch();

  const [allProducts, setAllProducts] = useState([]);
  const [motherboards, setMotherboards] = useState([]);
  const [processors, setProcessors] = useState([]);
  const [rams, setRAMs] = useState([]);
  const [ssds, setSSDs] = useState([]);
  const [chargers, setChargers] = useState([]);
  const [gpus, setGpus] = useState([]);
  const [cases, setCases] = useState([]);

  // stan stron per-kategoria
  const [pages, setPages] = useState({
    motherboard: 1,
    processor: 1,
    ram: 1,
    ssd: 1,
    charger: 1,
    gpu: 1,
    case: 1,
  });

  const formatPrice = (v) => {
    if (v === null || v === undefined || v === "") return "—";
    const num = Number(String(v).replace(/[^\d,.-]/g, "").replace(",", "."));
    if (Number.isNaN(num)) return "—";
    return new Intl.NumberFormat("pl-PL", {
      style: "currency", currency: "PLN", maximumFractionDigits: 0
    }).format(num);
  };
  // refs do przewijania okien list (po zmianie strony)
  const listRefs = {
    motherboard: useRef(null),
    processor: useRef(null),
    ram: useRef(null),
    ssd: useRef(null),
    charger: useRef(null),
    gpu: useRef(null),
    case: useRef(null),
  };

  const apiUrl =
    process.env.REACT_APP_API_URL ||
    (window.location.hostname === "localhost"
      ? "http://localhost:10000"
      : "https://my-node-api-7rco.onrender.com");

  // --- HELPERY: normalizacja i detekcja ---
  const normRaw = (v) => (v ?? "").toString().toUpperCase().replace(/\s|-/g, "");

  const normSocket = (v) => {
    const t = normRaw(v).replace(/^SOCKET/, "");
    if (t.includes("LGA1700")) return "LGA1700";
    if (t.includes("LGA1200")) return "LGA1200";
    if (t.includes("AM5")) return "AM5";
    if (t.includes("AM4")) return "AM4";
    return t || "";
  };

  const detectSocket = (p) => {
    const candidates = [
      p?.specs?.socket,
      p?.specs?.cpu_socket,
      p?.specs?.socket_type,
      p?.specs?.socketType,
      p?.name,
    ];
    for (const c of candidates) {
      const s = normSocket(c);
      if (s) return s;
    }
    return "";
  };

  const detectDDR = (p) => {
    const text = [
      p?.specs?.memory_type,
      p?.specs?.ram_type,
      p?.specs?.type,
      p?.name,
    ]
      .map(normRaw)
      .join("|");
    if (text.includes("DDR5")) return "DDR5";
    if (text.includes("DDR4")) return "DDR4";
    return "";
  };

  const getBoardDDR = (board) => detectDDR(board);

  useEffect(() => {
    dispatch(setProductsLoadingState("Loading"));
    axios
      .get(`${apiUrl}/products`)
      .then((res) => {
        setAllProducts(res.data || []);
        dispatch(setProductsLoadingState("success"));
      })
      .catch(() => dispatch(setProductsLoadingState("error")));
  }, [apiUrl, dispatch]);

  // przy każdej zmianie list resetujemy stronę >1 jeśli przekracza nowe totalPages
  const clampPage = (key, total) => {
    setPages((prev) => {
      const next = { ...prev };
      if (prev[key] > Math.max(1, total)) next[key] = 1;
      return next;
    });
  };

  useEffect(() => {
    const norm = (v) => (v ?? "").toString().replace(/\s|-/g, "").toUpperCase();

    const socketFilterFromUi = [
      ...(filters?.cpu ?? []),
      ...(filters?.socket ?? []),
    ]
      .map(normSocket)
      .filter(Boolean);

    const formFactorFilter = (filters?.formFactor || []).map(norm);
    const memoryFilterFromUi = (filters?.memory || []).map(norm);
    const chipsetFilter = (filters?.chipset || []).map(norm);

    const selectedBoardSocket = summaryConfig?.motherboard
      ? detectSocket(summaryConfig.motherboard)
      : "";
    const selectedBoardDDR = summaryConfig?.motherboard
      ? getBoardDDR(summaryConfig.motherboard)
      : "";

    const effectiveSocketFilter = selectedBoardSocket
      ? [selectedBoardSocket]
      : socketFilterFromUi;
    const effectiveMemoryFilter = selectedBoardDDR
      ? [selectedBoardDDR]
      : memoryFilterFromUi;

    // Płyty
    const newMB = allProducts
      .filter((p) => p.type === "Płyta główna" || p.type === "Motherboard")
      .filter((p) => {
        const socket = detectSocket(p);
        const ff = norm(p.specs?.form_factor);
        const mem = norm(p.specs?.memory_type);
        const chipset = norm(p.specs?.chipset);

        const cpuMatch =
          socketFilterFromUi.length === 0 || socketFilterFromUi.includes(socket);
        const ffMatch =
          formFactorFilter.length === 0 || formFactorFilter.includes(ff);
        const memMatch =
          memoryFilterFromUi.length === 0 || memoryFilterFromUi.includes(mem);
        const chipsetMatch =
          chipsetFilter.length === 0 || chipsetFilter.includes(chipset);
        return cpuMatch && ffMatch && memMatch && chipsetMatch;
      });
    setMotherboards(newMB);
    clampPage("motherboard", Math.ceil(newMB.length / PAGE_SIZE));

    // CPU
    const newCPU = allProducts
      .filter(
        (p) => p.type === "Procesor" || p.type === "CPU" || p.type === "Processor"
      )
      .filter((p) => {
        const s = detectSocket(p);
        return effectiveSocketFilter.length === 0 || effectiveSocketFilter.includes(s);
      });
    setProcessors(newCPU);
    clampPage("processor", Math.ceil(newCPU.length / PAGE_SIZE));

    // RAM
    const newRAM = allProducts
      .filter((p) => ["RAM", "Pamięć RAM", "Memory"].includes(p.type))
      .filter((p) => {
        const ramDDR = detectDDR(p);
        if (selectedBoardDDR && ramDDR && selectedBoardDDR !== ramDDR) return false;
        if (effectiveMemoryFilter.length === 0) return true;
        return ramDDR && effectiveMemoryFilter.includes(ramDDR);
      });
    setRAMs(newRAM);
    clampPage("ram", Math.ceil(newRAM.length / PAGE_SIZE));

    // Reszta
    const newSSD = allProducts.filter((p) => p.type === "SSD");
    setSSDs(newSSD);
    clampPage("ssd", Math.ceil(newSSD.length / PAGE_SIZE));

    const newCharger = allProducts.filter((p) => p.type === "Charger");
    setChargers(newCharger);
    clampPage("charger", Math.ceil(newCharger.length / PAGE_SIZE));

    const newGPU = allProducts.filter((p) => p.type === "GPU");
    setGpus(newGPU);
    clampPage("gpu", Math.ceil(newGPU.length / PAGE_SIZE));

    const newCases = allProducts.filter(
      (p) => p.type === "Cases" || p.type === "Obudowa"
    );
    setCases(newCases);
    clampPage("case", Math.ceil(newCases.length / PAGE_SIZE));
  }, [allProducts, filters, summaryConfig]);

  // Funkcja wyboru części
  const handleItemClick = async (product) => {
    let type = "";
    switch (product.type || product.category || product.group) {
      case "Płyta główna":
      case "Motherboard":
        type = "motherboard";
        break;
      case "Procesor":
        type = "processor";
        break;
      case "RAM":
        type = "ram";
        break;
      case "SSD":
        type = "ssd";
        break;
      case "Charger":
        type = "charger";
        break;
      case "GPU":
        type = "gpu";
        break;
      case "Cases":
      case "Obudowa":
        type = "case";
        break;
      default:
        type = "";
        break;
    }
    if (!type) return;

    if (type === "processor" && summaryConfig?.motherboard) {
      const mbSocket = detectSocket(summaryConfig.motherboard);
      const cpuSocket = detectSocket(product);
      if (mbSocket && cpuSocket && mbSocket !== cpuSocket) {
        alert(`Ten procesor (${cpuSocket}) nie pasuje do wybranej płyty (${mbSocket}).`);
        return;
      }
    }

    if (type === "ram" && summaryConfig?.motherboard) {
      const mbDDR = getBoardDDR(summaryConfig.motherboard);
      const ramDDR = detectDDR(product);
      if (mbDDR && ramDDR && mbDDR !== ramDDR) {
        alert(`Ten RAM (${ramDDR}) nie pasuje do wybranej płyty (${mbDDR}).`);
        return;
      }
    }

    dispatch(setConfigPart({ type, part: product }));

    const newProduct = { ...product, id: uuidv4() };
    await axios.post(`${apiUrl}/products/shoppingList/new`, newProduct);
    const shoppingListResponse = await axios.get(`${apiUrl}/products/shoppingList`);
    dispatch(loadCartList(shoppingListResponse.data));

    if (!lastViewedProducts.find((p) => p.id === product.id)) {
      dispatch(addToLastViewed([...lastViewedProducts, product]));
    }
  };

  const handleRebuild = () => {
    dispatch(clearAllConfig());
  };

  const labels = {
    motherboard: "Wybrana płyta główna",
    processor: "Wybrany procesor",
    ram: "Wybrany RAM",
    ssd: "Wybrany SSD",
    charger: "Wybrany zasilacz",
    gpu: "Wybrany GPU",
    case: "Wybrana obudowa",
  };

  const allSelected =
    summaryConfig.motherboard &&
    summaryConfig.processor &&
    summaryConfig.ram &&
    summaryConfig.ssd &&
    summaryConfig.charger &&
    summaryConfig.gpu &&
    summaryConfig.case;

  function SelectedTile({ label, selected, onChange, className = "" }) {
    if (!selected) return null;

    return (
      <div className={`${styles.selectedCard} ${styles.selectedTile}`}>
        <h2 className={styles.selectedTileHeader}>
          <CheckCircleIcon style={{ color: "green", fontSize: 20 }} />
          {label}
        </h2>
        <p className={styles.selectedTileName}>{selected.name}</p>
        <p className={styles.selectedTilePrice}>
          Cena: {formatPrice ? formatPrice(selected.price) : `${selected.price} zł`}
        </p>
        <button
          className={`${styles.myButton} ${styles.selectedTileButton}`}
          onClick={onChange}
        >
          Zmień {label.split(" ")[1].toLowerCase()}
        </button>
      </div>
    );
  }



  // Sub-komponent paginacji (uniwersalny)
  function Pagination({ page, total, onChange, count }) {
    const from = (page - 1) * PAGE_SIZE + 1;
    const to = Math.min(count, page * PAGE_SIZE);

    // generujemy krótki zestaw numerów: 1 … p-1 p p+1 … last
    const pageNumbers = useMemo(() => {
      const totalPages = Math.max(1, Math.ceil(count / PAGE_SIZE));
      const set = new Set([1, totalPages, page - 1, page, page + 1]);
      return [...set].filter((n) => n >= 1 && n <= totalPages).sort((a, b) => a - b);
    }, [page, count]);

    const totalPages = Math.max(1, Math.ceil(count / PAGE_SIZE));

    return (
      <nav className={styles.paginationBar} aria-label="Paginacja produktów">
        <div className={styles.pageInfo}>
          {count} produktów • {from}–{to}
        </div>
        <div className={styles.pagerGroup} role="group" aria-label="Nawigacja stron">
          <button
            type="button"
            className={styles.pagerButton}
            onClick={() => onChange(1)}
            disabled={page === 1}
            aria-label="Pierwsza strona"
          >
            «
          </button>
          <button
            type="button"
            className={styles.pagerButton}
            onClick={() => onChange(page - 1)}
            disabled={page === 1}
            aria-label="Poprzednia strona"
          >
            ‹
          </button>

          {pageNumbers.map((n, i) => {
            const prev = pageNumbers[i - 1];
            const gap = prev && n - prev > 1;
            return (
              <React.Fragment key={n}>
                {gap && <span className={styles.pagerEllipsis}>…</span>}
                <button
                  type="button"
                  className={`${styles.pagerButton} ${n === page ? styles.pagerButtonActive : ""
                    }`}
                  aria-current={n === page ? "page" : undefined}
                  onClick={() => onChange(n)}
                >
                  {n}
                </button>
              </React.Fragment>
            );
          })}

          <button
            type="button"
            className={styles.pagerButton}
            onClick={() => onChange(page + 1)}
            disabled={page === totalPages}
            aria-label="Następna strona"
          >
            ›
          </button>
          <button
            type="button"
            className={styles.pagerButton}
            onClick={() => onChange(totalPages)}
            disabled={page === totalPages}
            aria-label="Ostatnia strona"
          >
            »
          </button>
        </div>
      </nav>
    );
  }

  // uniwersalny renderer kroku z paginacją + oknem scrolla
  function renderStep(stepKey, label, items, onSelect) {
    const page = pages[stepKey] ?? 1;
    const totalPages = Math.max(1, Math.ceil(items.length / PAGE_SIZE));
    const start = (page - 1) * PAGE_SIZE;
    const pageSlice = items.slice(start, start + PAGE_SIZE);

    const onChangePage = (p) => {
      const next = Math.min(Math.max(1, p), totalPages);
      if (next !== page) {
        setPages((prev) => ({ ...prev, [stepKey]: next }));
        // scroll do góry okna listy w obrębie sekcji
        listRefs[stepKey]?.current?.scrollTo({ top: 0, behavior: "smooth" });
      }
    };

    const scrollWindowStyle = {
      maxHeight: "60vh",
      overflowY: "auto",
      overscrollBehavior: "contain",
      WebkitOverflowScrolling: "touch",
      paddingRight: 6,
      borderRadius: 12,
      border: "1px solid rgba(148,163,184,0.12)",
      background: "rgba(17,24,39,0.6)",
      backdropFilter: "blur(4px)",
    };

    return (
      <>
        <div className={styles.choosen}>Wybierz {label}:</div>

        {items.length > 0 ? (
          <>
            {totalPages > 1 && (
              <Pagination
                page={page}
                total={totalPages}
                onChange={onChangePage}
                count={items.length}
              />
            )}

            <div ref={listRefs[stepKey]} style={scrollWindowStyle}>
              <div className={styles.productGrid}>
                {pageSlice.map((item) => (
                  <article
                    key={item.id ?? item.sku ?? item.name}
                    className={styles.productCard}
                  >
                    {item.image && (
                      <img
                        src={item.image}
                        alt={item.name}
                        className={styles.productImage}
                      />
                    )}

                    <div className={styles.productMeta}>
                      <div className="title">{item.name}</div>
                      {item.brand && <div className="subtitle">{item.brand}</div>}
                    </div>

                    <div className={styles.productFooter}>
                      <div className={styles.price}>{formatPrice(item.price)}</div>

                      <div className="actions">
                        <button
                          className={styles.myButton}
                          onClick={() => onSelect(item)}
                        >
                          Dodaj do koszyka
                        </button>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            {totalPages > 1 && (
              <Pagination
                page={page}
                total={totalPages}
                onChange={onChangePage}
                count={items.length}
              />
            )}
          </>
        ) : (
          <p>Ładowanie {label.toLowerCase()}...</p>
        )}
      </>
    );
  }

  return (
    <div className={styles.App}>
      <header className={styles.AppHeader}>
        {allSelected && (
          <button className={styles.myButton} onClick={handleRebuild}>
            Złóż komputer ponownie
          </button>
        )}

        <div className={styles.smallerFont}>
          {!summaryConfig.motherboard
            ? renderStep("motherboard", "płytę główną", motherboards, handleItemClick)
            : (
              <SelectedTile
                label={labels.motherboard}
                selected={summaryConfig.motherboard}
                onChange={() =>
                  dispatch(setConfigPart({ type: "motherboard", part: null }))
                }
              />
            )}

          {summaryConfig.motherboard && !summaryConfig.processor
            ? renderStep("processor", "procesor", processors, handleItemClick)
            : summaryConfig.processor && (
              <SelectedTile
                label={labels.processor}
                selected={summaryConfig.processor}
                onChange={() =>
                  dispatch(setConfigPart({ type: "processor", part: null }))
                }
              />
            )}

          {summaryConfig.processor && !summaryConfig.ram
            ? renderStep("ram", "pamięć RAM", rams, handleItemClick)
            : summaryConfig.ram && (
              <SelectedTile
                label={labels.ram}
                selected={summaryConfig.ram}
                onChange={() => dispatch(setConfigPart({ type: "ram", part: null }))}
              />
            )}

          {summaryConfig.ram && !summaryConfig.ssd
            ? renderStep("ssd", "dysk SSD", ssds, handleItemClick)
            : summaryConfig.ssd && (
              <SelectedTile
                label={labels.ssd}
                selected={summaryConfig.ssd}
                onChange={() => dispatch(setConfigPart({ type: "ssd", part: null }))}
              />
            )}

          {summaryConfig.ssd && !summaryConfig.charger
            ? renderStep("charger", "zasilacz", chargers, handleItemClick)
            : summaryConfig.charger && (
              <SelectedTile
                label={labels.charger}
                selected={summaryConfig.charger}
                onChange={() =>
                  dispatch(setConfigPart({ type: "charger", part: null }))
                }
              />
            )}

          {summaryConfig.charger && !summaryConfig.gpu
            ? renderStep("gpu", "GPU", gpus, handleItemClick)
            : summaryConfig.gpu && (
              <SelectedTile
                label={labels.gpu}
                selected={summaryConfig.gpu}
                onChange={() => dispatch(setConfigPart({ type: "gpu", part: null }))}
              />
            )}

          {summaryConfig.gpu && !summaryConfig.case
            ? renderStep("case", "obudowę", cases, handleItemClick)
            : summaryConfig.case && (
              <SelectedTile
                label={labels.case}
                selected={summaryConfig.case}
                onChange={() => dispatch(setConfigPart({ type: "case", part: null }))}
              />
            )}
        </div>
      </header>
    </div>
  );
}

export default ProductList;
