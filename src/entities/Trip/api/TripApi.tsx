import type { Trip } from "../types";
import type { VisitedFilter } from "../../../shared/types/types";

import { trips } from "../../../shared/mock/trips";
import { shuffle } from "../../../shared/utils/shuffle";

export const getFilteredTrips = ({ country }: { country?: string; isVisited?: VisitedFilter }) =>
    new Promise<Trip[]>((resolve) => {
        setTimeout(() => {
            let result = trips.slice();

            if (country && country !== "Все страны") {
                result = result.filter((trip) => trip.country === country);
            } else {
                result = result.filter((trip) => trip.isVisited === false)
            }



            resolve(shuffle(result));
        }, 200);
    });