import React, { createContext, useContext } from "react";

const ConfigContext = createContext();

export const useConfig = () => useContext(ConfigContext);


export function ConfigProvider({ children }) {
    return (
        <ConfigContext.Provider value={{}}>
            {children}
        </ConfigContext.Provider>
    );
}

