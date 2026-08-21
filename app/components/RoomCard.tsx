import Link from "next/link";
import type { Room } from "../data/roomsData";

type RoomCardProps = {
  room: Room;
};

export default function RoomCard({ room }: RoomCardProps) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950 shadow-xl transition duration-300 hover:-translate-y-2 hover:border-red-600">

      {/* Image */}
      <div className="relative h-72 overflow-hidden">

        <img
          src={room.image}
          alt={room.title}
          className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-black/20" />

        {/* Availability Badge */}
        <div className="absolute left-5 top-5 rounded-md bg-[#d4af37] px-4 py-2 text-sm font-bold text-black shadow-lg">
          {room.availability} Available
        </div>

      </div>

      {/* Content */}
      <div className="p-6">

        {/* Title */}
        <h2 className="text-2xl font-bold text-white">
          {room.title}
        </h2>

        {/* Short Description */}
        <p className="mt-3 line-clamp-2 text-sm leading-7 text-gray-400">
          {room.description}
        </p>

        {/* Quick Features */}
        <div className="mt-6 flex flex-wrap gap-3">

          <span className="rounded-md border border-zinc-700 bg-zinc-900 px-4 py-2 text-sm text-gray-300">
            📶 WiFi
          </span>

          <span className="rounded-md border border-zinc-700 bg-zinc-900 px-4 py-2 text-sm text-gray-300">
            🚗 Parking
          </span>

          <span className="rounded-md border border-zinc-700 bg-zinc-900 px-4 py-2 text-sm text-gray-300">
            🛁 Attached Bathroom
          </span>

        </div>

        {/* Button */}
        <div className="mt-7">
          <Link
            href={`/rooms/${room.id}`}
            className="block w-full rounded-md bg-[#d4af37] px-6 py-3 text-center font-semibold text-black transition duration-300 hover:bg-red-600 hover:text-white"
          >
            View Details
          </Link>
        </div>

      </div>
    </article>
  );
}