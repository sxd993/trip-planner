import type { CSSProperties } from "react";
import type { Trip } from "../../entities/Trip/types";
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
      <div className="flex h-65 w-full flex-col justify-between gap-6 p-6 text-white" style={coverStyle}>
        <div className="flex items-center justify-end text-xs font-semibold uppercase tracking-wide">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1">
            <MapPin className="h-4 w-4" />
            {trip.country}
          </span>
        </div>

        <div className="flex flex-col gap-2">
          <h2 className="text-2xl font-semibold leading-tight drop-shadow-md">
            {trip.place_name}
          </h2>
        </div>
      </div>

      <div className="flex flex-col items-end justify-between gap-5 px-6 py-6">
        {trip.description && (
          <p className="text-sm leading-relaxed text-slate-600">
            {trip.description}
          </p>
        )}
        {trip.isVisited ? (
          <span className="flex items-center gap-2 rounded-full bg-emerald-500 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white shadow-md ring-1 ring-emerald-400/50">
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white/20">
              <Check className="h-3.5 w-3.5" />
            </span>
            Посещено
          </span>
        ) : (
          <button className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-slate-500 transition-colors duration-200 group-hover:border-slate-300 group-hover:text-slate-700">
            Не посещено {''}
          </button>
        )}
      </div>
    </article>
  );
};
