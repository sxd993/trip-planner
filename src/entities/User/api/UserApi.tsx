import type { Trip } from "../../Trip/types";
import { shuffle } from "../../../shared/utils/shuffle";
import { trips } from "../../../shared/mock/trips";

export const getUserTripList = (): Promise<Trip[]> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(shuffle(trips.filter((trip) => trip.isVisited === true)).map((trip) => ({ ...trip })));
        }, 200);
    });
};
