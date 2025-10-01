import { useQuery } from "@tanstack/react-query";
import { getFilteredTrips } from "../api/TripApi";
import type { UseTripsResult } from "../../../shared/types/types";
import { useFilterStore } from "../../../features/Filter/store/store";


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
