import React, { createContext, useContext, useState } from "react";

const ConfigContext = createContext();

export function useConfig() {
    return useContext(ConfigContext);
}

export function ConfigProvider({ children }) {
    const [selectedMotherboard, setSelectedMotherboard] = useState(null);
    const [selectedProcessor, setSelectedProcessor] = useState(null);
    const [selectedRAM, setSelectedRAM] = useState(null);
    const [selectedSSD, setSelectedSSD] = useState(null);
    const [selectedCharger, setSelectedCharger] = useState(null);
    const [selectedGPU, setSelectedGPU] = useState(null);
    const [selectedCase, setSelectedCase] = useState(null);

    const handleRebuild = () => {
        setSelectedMotherboard(null);
        setSelectedProcessor(null);
        setSelectedRAM(null);
        setSelectedSSD(null);
        setSelectedCharger(null);
        setSelectedGPU(null);
        setSelectedCase(null);
    };

    const clearSelectedPart = (product) => {
        if (!product) return;
        switch (product.type) {
            case "Płyta główna":
                if (selectedMotherboard && selectedMotherboard.name === product.name && selectedMotherboard.type === product.type)
                    setSelectedMotherboard(null);
                break;
            case "Procesor":
                if (selectedProcessor && selectedProcessor.name === product.name && selectedProcessor.type === product.type)
                    setSelectedProcessor(null);
                break;
            case "RAM":
                if (selectedRAM && selectedRAM.name === product.name && selectedRAM.type === product.type)
                    setSelectedRAM(null);
                break;
            case "SSD":
                if (selectedSSD && selectedSSD.name === product.name && selectedSSD.type === product.type)
                    setSelectedSSD(null);
                break;
            case "Charger":
                if (selectedCharger && selectedCharger.name === product.name && selectedCharger.type === product.type)
                    setSelectedCharger(null);
                break;
            case "GPU":
                if (selectedGPU && selectedGPU.name === product.name && selectedGPU.type === product.type)
                    setSelectedGPU(null);
                break;
            case "Cases":
                if (selectedCase && selectedCase.name === product.name && selectedCase.type === product.type)
                    setSelectedCase(null);
                break;
            default:
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
