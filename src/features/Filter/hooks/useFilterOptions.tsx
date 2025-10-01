import { useQuery } from "@tanstack/react-query";
import { getFilterOptions } from "../api/FilterApi";

interface UseFilterOptionsResult {
    options: string[],
    isLoading: boolean;
    error: unknown;
}

export const useFilterOptions = (): UseFilterOptionsResult => {
    const { data, isLoading, error } = useQuery({
        queryKey: ["filters"],
        queryFn: getFilterOptions,
        staleTime: 60 * 1000 * 30, // 30 минут
    });

    return {
        options: data ?? [],
        isLoading,
        error,
    };
};