import type { Trip } from "../types";
import { TripCard } from "../../../shared/ui/TripCard";
import { Loading } from "../../../shared/ui/states/Loading";

interface TripsListProps {
    trips: Trip[],
    isLoading: boolean;
}

export const TripsList = ({ trips, isLoading }: TripsListProps) => {
    if (isLoading) {
        return <Loading />
    }
    return (
        <section className="flex w-full flex-col">
            <header className="flex flex-col gap-2 px-4 py-2">
                <span className="text-xs font-medium uppercase tracking-[0.35em] text-slate-400">Интересные места</span>
                <h1 className="text-3xl font-semibold text-slate-800">Места, которые вы не посетили </h1>
            </header>

            <div className="grid w-full gap-6 p-2 sm:grid-cols-2 xl:grid-cols-3">
                {trips.map((trip) => (
                    <TripCard key={trip.id} trip={trip} />
                ))}
            </div>
        </section>
    );
};
