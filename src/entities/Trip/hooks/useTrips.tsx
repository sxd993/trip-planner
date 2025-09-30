import { useQuery } from "@tanstack/react-query";
import { getTripsList } from "../../../shared/api/tipsApi";
import type { UseTripsResult } from "../../../shared/types/types";

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