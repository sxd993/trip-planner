import { useQuery } from "@tanstack/react-query";
import { getUserTripList } from "../../../shared/api/tipsApi";
import type { UseTripsResult } from "../../../shared/types/types";

export const useUserTrips = (): UseTripsResult => {
    const { data, isLoading, error } = useQuery({
        queryKey: ["user-trips", "visited"],
        queryFn: getUserTripList,
        staleTime: 60 * 1000 * 30,
    });

    return {
        trips: data ?? [],
        isLoading,
        error,
    };
};
