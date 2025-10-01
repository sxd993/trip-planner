import { trips } from "../../../shared/mock/trips";
import { shuffle } from "../../../shared/utils/shuffle";

export const getFilterOptions = (): Promise<string[]> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const shuffledTrips = shuffle(
                trips.filter(({ isVisited }) => isVisited === false),
            );

            const countries = Array.from(
                new Set(
                    shuffledTrips
                        .map(({ country }) => country)
                        .filter((country): country is string => Boolean(country)),
                ),
            );

            resolve(countries);
        }, 200);
    });
};
