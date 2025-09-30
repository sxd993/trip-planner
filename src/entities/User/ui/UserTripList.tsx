import { useUserTrips } from "../hooks/useUserTrips";
import { TripCard } from "../../../shared/ui/TripCard";
import { Loading } from "../../../shared/ui/states/Loading";

export const UserTripList = () => {
    const { trips, isLoading } = useUserTrips()
    if (isLoading) {
        return <Loading />
    }
    return (
        <section className="flex w-full flex-col">
            <header className="flex flex-col gap-2 border-slate-100 px-4 py-4">
                <span className="text-xs font-medium uppercase tracking-[0.35em] text-slate-400">Ваши посещенные места</span>
                <h1 className="text-3xl font-semibold text-slate-800">Посещенные места</h1>
            </header>

            <div className="grid w-full gap-6 p-2 sm:grid-cols-2 xl:grid-cols-3">
                {trips.map((trip) => (
                    <TripCard key={trip.id} trip={trip} />
                ))}
            </div>
        </section>

    )
}
