import { useFilteredTrips } from "../entities/Trip/hooks/useTrips"
import { TripsList } from "../entities/Trip/ui/TripsList"
import { Filter } from "../entities/Trip/ui/Filter"

export const Trips = () => {
    const { trips, isLoading } = useFilteredTrips()

    return (
        <>
            <Filter />
            <TripsList trips={trips} isLoading={isLoading} />
        </>

    )
}