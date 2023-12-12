"use client"

import React, { createContext, useEffect, useState } from "react";
import {
    DEFAULT_NETWORK,
    TESTNET_DETAILS,
    MAINNET_DETAILS,
    SorosanSDK
} from "@sorosan-sdk/core";

/**
 * Represents the type of network, which can be one of the following values:
 * - "mainnet"
 * - "testnet"
 */
export type networkType = "mainnet" | "testnet";

/**
 * A provider component that wraps your application with the Soroban SDK.
 * It provides the Soroban SDK instance through context to be used by other components.
 *
 * @param {SorosanProviderProps} props - Props for the SorosanProvider component.
 * @returns {JSX.Element} The JSX element that represents the SorosanProvider component.
 */
export const SorosanProvider = ({ children, network, name }: SorosanProviderProps) => {
    const [sdk, setSDK] = useState<SorosanSDK>(new SorosanSDK(DEFAULT_NETWORK));
    const [selectedNetwork, setSelectedNetework] = useState<any>(DEFAULT_NETWORK);
    const [appName, setAppName] = useState<string>(name || "");

    useEffect(() => {
        // IMPORTANT: Currently only the testnet is supported.
        console.log("@sorosan-sdk/react: changing network to ", network);
        switch (network) {
            case "testnet":
                setSelectedNetework(TESTNET_DETAILS);
                setSDK(new SorosanSDK(TESTNET_DETAILS));
                break;
            case "mainnet":
            default:
                setSelectedNetework(TESTNET_DETAILS);
                setSDK(new SorosanSDK(TESTNET_DETAILS));
                break;
        }
    }, [selectedNetwork]);

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
    network?: networkType;
    name?: string;
}

/**
 * @ignore
 * Context for storing the Soroban SDK instance.
 */
export const SorosanContext = createContext({
    appName: "Sorosan SDK",
    sdk: new SorosanSDK(DEFAULT_NETWORK),
});

