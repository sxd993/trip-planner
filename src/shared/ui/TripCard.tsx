import type { CSSProperties } from "react";
import type { Trip } from "../../entities/Trip/model/types";
import { Check, MapPin } from "lucide-react";

interface TripCardProps {
  trip: Trip;
}

export const TripCard = ({ trip }: TripCardProps) => {
  const coverStyle: CSSProperties = {
    backgroundImage: `linear-gradient(135deg, rgba(15, 23, 42, 0.78), rgba(15, 23, 42, 0.25)), url(${trip.photo})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <article className="group flex w-full flex-col overflow-hidden rounded-2xl bg-white shadow-md ring-1 ring-slate-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="flex h-60 w-full flex-col justify-between gap-6 p-6 text-white" style={coverStyle}>
        <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-wide">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1">
            <MapPin className="h-4 w-4" />
            {trip.country}
          </span>
          {trip.isVisited && (
            <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/90 px-3 py-1 text-white shadow">
              <Check className="h-4 w-4" /> Посещено
            </span>
          )}
        </div>

        <div className="flex flex-col gap-2">
          <h2 className="text-2xl font-semibold leading-tight drop-shadow-md">
            {trip.place_name}
          </h2>
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-white/80">
            {trip.isVisited ? "Посещено" : ""}
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-5 px-6 py-6">
        {trip.description && (
          <p className="text-sm leading-relaxed text-slate-600">
            {trip.description}
          </p>
        )}
      </div>
    </article>
  );
};
