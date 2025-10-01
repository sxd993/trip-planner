import type { Trip } from "../../entities/Trip/types";

export interface UseTripsResult {
    trips: Trip[];
    isLoading: boolean;
    error: unknown;
}


export type VisitedFilter = "all" | "visited" | "notVisited";