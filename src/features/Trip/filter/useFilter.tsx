import { useCallback, useMemo } from "react";

import { useFilterStore } from "./store";
import { useTrips } from "../../../entities/Trip/hooks/useTrips";
import { getCountryOptions } from "./lib/getCountryOptions";
import { useQueryClient } from "@tanstack/react-query";


export const useFilter = () => {

    //  Хуки
    const client = useQueryClient();
    const { trips } = useTrips();

    // Магазин состояний
    const country = useFilterStore((state) => state.country);
    const isVisited = useFilterStore((state) => state.isVisited);
    const setCountry = useFilterStore((state) => state.setCountry);
    const setIsVisited = useFilterStore((state) => state.setIsVisited);
    const reset = useFilterStore((state) => state.reset);


    // Уникальные значения options для select country
    const countryOptions = useMemo(() => getCountryOptions(trips), [trips]);

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
        countryOptions,
    };
};
