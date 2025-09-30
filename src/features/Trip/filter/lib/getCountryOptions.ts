import type { Trip } from "../../../../entities/Trip/types";

export const getCountryOptions = (trips?: Trip[] | null): string[] => {
    if (!trips?.length) {
        return [];
    }

    const uniqueCountries = new Set<string>();

    trips.forEach(({ country }) => {
        if (country) {
            uniqueCountries.add(country);
        }
    });

    return Array.from(uniqueCountries);
};
