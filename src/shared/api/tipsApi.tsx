import type { Trip } from "../../entities/Trip/types";
import { trips } from "../mock/trips";
import { shuffle } from "../utils/shuffle";

export type VisitedFilter = "all" | "visited" | "notVisited";

export const getUserTripList = (): Promise<Trip[]> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(shuffle(trips.filter((trip) => trip.isVisited === true)).map((trip) => ({ ...trip })));
        }, 200);
    });
};


export const getTripsList = (): Promise<Trip[]> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(shuffle(trips.filter((trip) => trip.isVisited === false)));
        }, 200);
    })
}

export const getFilteredTrips = ({ country, isVisited }: { country?: string; isVisited?: VisitedFilter }) =>
    new Promise<Trip[]>((resolve) => {
        setTimeout(() => {
            let result = trips.slice();

            if (country && country !== "Все страны") {
                result = result.filter((trip) => trip.country === country);
            }

            if (isVisited === "visited") {
                result = result.filter((trip) => trip.isVisited);
            } else if (isVisited === "notVisited") {
                result = result.filter((trip) => !trip.isVisited);
            }

            resolve(shuffle(result));
        }, 200);
    });