import React, { createContext, useContext, useState, useEffect } from "react";

const ConfigContext = createContext();

export const useConfig = () => useContext(ConfigContext);

 const TYPE_MAP = {
        "Płyta główna": "Płyta główna",
        "Procesor": "Procesor",
        "RAM": "RAM",
        "SSD": "SSD",
        "Charger": "Charger",
        "GPU": "GPU",
        "Cases": "Cases"
    };


export function ConfigProvider({ children }) {
    // 1. Inicjalizacja z localStorage (lub null)
    const [selectedMotherboard, setSelectedMotherboard] = useState(() =>
        JSON.parse(localStorage.getItem("selectedMotherboard")) || null
    );
    const [selectedProcessor, setSelectedProcessor] = useState(() =>
        JSON.parse(localStorage.getItem("selectedProcessor")) || null
    );
    const [selectedRAM, setSelectedRAM] = useState(() =>
        JSON.parse(localStorage.getItem("selectedRAM")) || null
    );
    const [selectedSSD, setSelectedSSD] = useState(() =>
        JSON.parse(localStorage.getItem("selectedSSD")) || null
    );
    const [selectedCharger, setSelectedCharger] = useState(() =>
        JSON.parse(localStorage.getItem("selectedCharger")) || null
    );
    const [selectedGPU, setSelectedGPU] = useState(() =>
        JSON.parse(localStorage.getItem("selectedGPU")) || null
    );
    const [selectedCase, setSelectedCase] = useState(() =>
        JSON.parse(localStorage.getItem("selectedCase")) || null
    );

    // 2. Synchronizacja z localStorage po każdej zmianie
    useEffect(() => {
        localStorage.setItem("selectedMotherboard", JSON.stringify(selectedMotherboard));
    }, [selectedMotherboard]);

    useEffect(() => {
        localStorage.setItem("selectedProcessor", JSON.stringify(selectedProcessor));
    }, [selectedProcessor]);

    useEffect(() => {
        localStorage.setItem("selectedRAM", JSON.stringify(selectedRAM));
    }, [selectedRAM]);

    useEffect(() => {
        localStorage.setItem("selectedSSD", JSON.stringify(selectedSSD));
    }, [selectedSSD]);

    useEffect(() => {
        localStorage.setItem("selectedCharger", JSON.stringify(selectedCharger));
    }, [selectedCharger]);

    useEffect(() => {
        localStorage.setItem("selectedGPU", JSON.stringify(selectedGPU));
    }, [selectedGPU]);

    useEffect(() => {
        localStorage.setItem("selectedCase", JSON.stringify(selectedCase));
    }, [selectedCase]);

    const handleRebuild = () => {
        setSelectedMotherboard(null);
        setSelectedProcessor(null);
        setSelectedRAM(null);
        setSelectedSSD(null);
        setSelectedCharger(null);
        setSelectedGPU(null);
        setSelectedCase(null);

        // Po wyczyszczeniu wyczyść także localStorage
        localStorage.removeItem("selectedMotherboard");
        localStorage.removeItem("selectedProcessor");
        localStorage.removeItem("selectedRAM");
        localStorage.removeItem("selectedSSD");
        localStorage.removeItem("selectedCharger");
        localStorage.removeItem("selectedGPU");
        localStorage.removeItem("selectedCase");
    };

   
    const clearSelectedPart = (product) => {
       console.log("Wywołano clearSelectedPart:", product); // <-- DODAJ TO
        if (!product) return;
        const mappedType = TYPE_MAP[product.type] || product.type;
      
        switch (mappedType) {
            case "Płyta główna":
                console.log("-> Próbuję czyścić Płyta główna");
                if (selectedMotherboard && selectedMotherboard.name === product.name) {
                    setSelectedMotherboard(null);
                  
                }
                break;
            case "Procesor":
                console.log("-> Próbuję czyścić Procesor");
                if (selectedProcessor && selectedProcessor.name === product.name) {
                    setSelectedProcessor(null);
                
                }
                break;
            case "RAM":
                console.log("-> Próbuję czyścić RAM");
                if (selectedRAM && selectedRAM.name === product.name) {
                    setSelectedRAM(null);
                 
                }
                break;
            case "SSD":
                console.log("-> Próbuję czyścić SSD");
                if (selectedSSD && selectedSSD.name === product.name) {
                    setSelectedSSD(null);
                  
                }
                break;
            case "Charger":
                console.log("-> Próbuję czyścić Zasilacz/Charger");
                if (selectedCharger && selectedCharger.name === product.name) {
                    setSelectedCharger(null);
                  
                }
                break;
            case "GPU":
                console.log("-> Próbuję czyścić GPU");
                if (selectedGPU && selectedGPU.name === product.name) {
                    setSelectedGPU(null);
                  
                }
                break;
            case "Cases":
                console.log("-> Próbuję czyścić Obudowę/Cases");
                if (selectedCase && selectedCase.name === product.name) {
                    setSelectedCase(null);
                   
                }
                break;
            default:
                console.log("Nie rozpoznano typu:", mappedType);
                break;
        }
 };

        return (
            <ConfigContext.Provider value={{
                selectedMotherboard, setSelectedMotherboard,
                selectedProcessor, setSelectedProcessor,
                selectedRAM, setSelectedRAM,
                selectedSSD, setSelectedSSD,
                selectedCharger, setSelectedCharger,
                selectedGPU, setSelectedGPU,
                selectedCase, setSelectedCase,
                handleRebuild,
                clearSelectedPart
            }}>
                {children}
            </ConfigContext.Provider>
        );
    }