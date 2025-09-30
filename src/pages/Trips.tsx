import { useTrips } from "../shared/hooks/useTrips"
import { TripsList } from "../entities/Trip/ui/TripsList"

export const Trips = () => {
    const { trips } = useTrips()
    return (
        <TripsList trips={trips} />
    )
}