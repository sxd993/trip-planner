export interface Trip {
    id: number,
    photo: string,
    country: string,
    place_name: string,
    isVisited?: boolean,
    description?: string,
}