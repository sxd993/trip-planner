import { useQuery } from "@tanstack/react-query";
import { getTripsList, getUserList } from "../api/tipsApi";
import type { Trip } from "../../entities/Trip/model/types";

interface UseTripsResult {
    trips: Trip[];
    isLoading: boolean;
    error: unknown;
}

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


export const useUserTrips = (): UseTripsResult => {
    const { data, isLoading, error } = useQuery({
        queryKey: ["user-trips", "visited"],
        queryFn: getUserList,
        staleTime: 60 * 1000 * 30,
    });

    return {
        trips: data ?? [],
        isLoading,
        error,
    };
};
