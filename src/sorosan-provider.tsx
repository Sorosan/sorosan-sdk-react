"use client"

import React, { createContext, useState } from "react";
import { DEFAULT_NETWORK, SorosanSDK } from "@sorosan-sdk/core";

/**
 * A provider component that wraps your application with the Soroban SDK.
 * It provides the Soroban SDK instance through context to be used by other components.
 *
 * @param {SorosanProviderProps} props - Props for the SorosanProvider component.
 * @returns {JSX.Element} The JSX element that represents the SorosanProvider component.
 */
export const SorosanProvider = ({ children }: SorosanProviderProps) => {
    const [sdk, _] = useState<SorosanSDK>(new SorosanSDK(DEFAULT_NETWORK));
    const [appName, setAppName] = useState<string>("Sorosan Dapp");

    return (
        <SorosanContext.Provider value={{ sdk, appName }}>
            {children}
        </SorosanContext.Provider>
    );
}

/**
 * @ignore
 * Interface for props that can be passed to the SorosanProvider component.
 */
interface SorosanProviderProps extends
    React.HTMLAttributes<HTMLDivElement> {
}

/**
 * @ignore
 * Context for storing the Soroban SDK instance.
 */
export const SorosanContext = createContext({
    appName: "Sorosan SDK",
    sdk: new SorosanSDK(DEFAULT_NETWORK),
});

