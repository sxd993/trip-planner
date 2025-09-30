import { useTrips } from "../entities/Trip/hooks/useTrips"
import { TripsList } from "../entities/Trip/ui/TripsList"

export const Trips = () => {
    const { trips, isLoading } = useTrips()
    return (
        <TripsList trips={trips} isLoading={isLoading} />
    )
}