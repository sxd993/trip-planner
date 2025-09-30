import { useQuery } from "@tanstack/react-query";
import { getTripsList, getFilteredTrips } from "../../../shared/api/tipsApi";
import type { UseTripsResult } from "../../../shared/types/types";
import { useFilterStore } from "../../../features/Trip/filter/store";

export const useTrips = (): UseTripsResult => {
    const { data, isLoading, error } = useQuery({
        queryKey: ["trips"],
        queryFn: getTripsList,
        staleTime: 60 * 1000 * 30, // 30 минут
    });

    return {
        trips: data ?? [],
        isLoading,
        error,
    };
};


export const useFilteredTrips = (): UseTripsResult => {
    const country = useFilterStore((state) => state.country);
    const { data, isLoading, error } = useQuery({
        queryKey: ["filtered-trips", country],
        queryFn: () => getFilteredTrips({ country }),
        staleTime: 30 * 60_000,
    });

    return {
        trips: data ?? [],
        isLoading,
        error,
    };
};
