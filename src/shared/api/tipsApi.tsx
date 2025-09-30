import type { Trip } from "../../entities/Trip/types";
import { trips } from "../mock/trips";
import { shuffle } from "../utils/shuffle";

type VisitedFilter = "all" | "visited" | "notVisited";

export const getTripsList = (): Promise<Trip[]> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(shuffle(trips.filter((trip) => trip.isVisited !== true)).map((trip) => ({ ...trip })));
        }, 200);
    });
};

export const getUserTripList = (): Promise<Trip[]> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(shuffle(trips.filter((trip) => trip.isVisited === true)).map((trip) => ({ ...trip })));
        }, 200);
    });
};

export const getFilteredTrips = (
    country = "",
    isVisited: VisitedFilter = "all",
): Promise<Trip[]> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const normalizedCountry = country.trim().toLowerCase();

            const filteredTrips = trips.filter((trip) => {
                const matchCountry =
                    normalizedCountry.length === 0 ||
                    trip.country.toLowerCase().includes(normalizedCountry);

                const visitedState = Boolean(trip.isVisited);
                const matchVisited =
                    isVisited === "all" ||
                    (isVisited === "visited" && visitedState) ||
                    (isVisited === "notVisited" && !visitedState);

                return matchCountry && matchVisited;
            });

            resolve(shuffle(filteredTrips).map((trip) => ({ ...trip })));
        }, 200);
    });
};

