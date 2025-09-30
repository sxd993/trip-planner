import { create } from "zustand";

type VisitedFilter = "all" | "visited" | "notVisited";

interface Filter {
    country: string;
    isVisited: VisitedFilter;
    setCountry: (country: string) => void;
    setIsVisited: (value: VisitedFilter) => void;
    reset: () => void;
}

export const useFilterStore = create<Filter>((set) => ({
    country: "",
    isVisited: "all",
    setCountry: (country) => set({ country }),
    setIsVisited: (value) => set({ isVisited: value }),
    reset: () => set({ country: "", isVisited: "all" })
}))