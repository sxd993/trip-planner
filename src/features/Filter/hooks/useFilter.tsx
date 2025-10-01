import { useCallback } from "react";

import { useFilterStore } from "../store/store";
import { useQueryClient } from "@tanstack/react-query";

export const useFilter = () => {

    //  Хуки
    const client = useQueryClient();

    // Магазин состояний
    const country = useFilterStore((state) => state.country);
    const isVisited = useFilterStore((state) => state.isVisited);
    const setCountry = useFilterStore((state) => state.setCountry);
    const setIsVisited = useFilterStore((state) => state.setIsVisited);
    const reset = useFilterStore((state) => state.reset);

    // Функция применения поиска
    const handleSearch = useCallback(async () => {
        client.invalidateQueries({ queryKey: ['trips'] })
    }, [])

    return {
        country,
        isVisited,
        setCountry,
        setIsVisited,
        reset,
        handleSearch,

    };
};
