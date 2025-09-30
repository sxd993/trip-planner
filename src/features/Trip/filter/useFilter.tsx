import { useCallback } from "react";
import { useQueryClient } from "@tanstack/react-query";

import { getFilteredTrips } from "../../../shared/api/tipsApi";
import { useFilterStore } from "./store";

export const useFilter = () => {
    const queryClient = useQueryClient();

    const country = useFilterStore((state) => state.country);
    const isVisited = useFilterStore((state) => state.isVisited);
    const setCountry = useFilterStore((state) => state.setCountry);
    const setIsVisited = useFilterStore((state) => state.setIsVisited);
    const reset = useFilterStore((state) => state.reset);

    const handleSearch = useCallback(async () => {
        try {
            const data = await getFilteredTrips(country, isVisited);
            queryClient.setQueryData(["trips"], data);
        } catch (error) {
            queryClient.setQueryData(["trips"], []);
            console.error("Failed to filter trips", error);
        }
    }, [country, isVisited, queryClient]);

    return {
        country,
        isVisited,
        setCountry,
        setIsVisited,
        reset,
        handleSearch,
    };
};
