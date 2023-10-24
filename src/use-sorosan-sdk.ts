import { useContext } from "react";
import { SorosanContext } from "./sorosan-provider";

/**
 * @ignore
 * Hook for accessing the Soroban SDK instance from the context.
 * @returns {Object} An object containing the Soroban SDK instance.
 */
export const useSorosanSDK = () => useContext(SorosanContext);