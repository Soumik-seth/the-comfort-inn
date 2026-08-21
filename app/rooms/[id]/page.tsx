import Link from "next/link";
import { notFound } from "next/navigation";
import { rooms } from "@/data/roomsData";

type RoomDetailsPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function RoomDetailsPage({
  params,
}: RoomDetailsPageProps) {
  const { id } = await params;

  const room = rooms.find(
    (room) => room.id === Number(id)
  );

  if (!room) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-black px-6 pb-24 pt-32">

      <div className="mx-auto max-w-6xl">

        {/* Room Header */}
        <div className="mb-10">

          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-red-500">
            The Comfort Inn
          </p>

          <h1 className="mt-3 text-4xl font-bold text-white md:text-5xl">
            {room.title}
          </h1>

          <span className="mt-4 inline-block rounded-md bg-red-600 px-4 py-2 text-sm font-semibold text-white">
            Standard Room
          </span>

        </div>

        {/* Main Image */}
        <div className="relative overflow-hidden rounded-2xl border border-zinc-800">

          <img
            src={room.image}
            alt={room.title}
            className="h-[400px] w-full object-cover md:h-[550px]"
          />

          {/* Availability */}
          <div className="absolute left-5 top-5 rounded-md bg-[#d4af37] px-5 py-2.5 font-bold text-black">
            {room.availability} Available
          </div>

        </div>

        {/* Full Description */}
        <section className="mt-12">

          <h2 className="text-2xl font-bold text-white">
            About This Room
          </h2>

          <div className="mt-3 h-1 w-14 bg-red-600" />

          <p className="mt-6 max-w-4xl text-base leading-8 text-gray-400">
            {room.description}
          </p>

        </section>

        {/* Specifications */}
        <section className="mt-12">

          <h2 className="text-2xl font-bold text-white">
            Room Specifications
          </h2>

          <div className="mt-3 h-1 w-14 bg-red-600" />

          <div className="mt-8 grid gap-5 md:grid-cols-3">

            {/* Bed */}
            <div className="rounded-xl border border-zinc-800 bg-zinc-950 p-6">
              <p className="text-sm text-gray-500">
                Bed Type
              </p>

              <p className="mt-2 text-lg font-semibold text-white">
                🛏️ {room.specifications.bedType}
              </p>
            </div>

            {/* Occupancy */}
            <div className="rounded-xl border border-zinc-800 bg-zinc-950 p-6">
              <p className="text-sm text-gray-500">
                Max Occupancy
              </p>

              <p className="mt-2 text-lg font-semibold text-white">
                👥 {room.specifications.maxOccupancy}
              </p>
            </div>

            {/* Room Size */}
            <div className="rounded-xl border border-zinc-800 bg-zinc-950 p-6">
              <p className="text-sm text-gray-500">
                Room Size
              </p>

              <p className="mt-2 text-lg font-semibold text-white">
                ⛶ {room.specifications.roomSize}
              </p>
            </div>

          </div>

        </section>

        {/* Features */}
        <section className="mt-12">

          <h2 className="text-2xl font-bold text-white">
            Room Features
          </h2>

          <div className="mt-3 h-1 w-14 bg-red-600" />

          <div className="mt-8 grid gap-10 md:grid-cols-2">

            {/* Essential */}
            <div>
              <h3 className="text-lg font-semibold text-[#d4af37]">
                Essential Amenities
              </h3>

              <ul className="mt-5 space-y-4">
                {room.roomFeatures.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-3 text-gray-300"
                  >
                    <span className="h-2 w-2 rounded-full bg-red-600" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Additional */}
            <div>
              <h3 className="text-lg font-semibold text-[#d4af37]">
                Additional Features
              </h3>

              <ul className="mt-5 space-y-4">
                {room.additionalFeatures.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-3 text-gray-300"
                  >
                    <span className="h-2 w-2 rounded-full bg-red-600" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

          </div>

        </section>

        {/* Pricing Button */}
        <div className="mt-14">

          <Link
            href="/prices"
            className="block w-full rounded-lg bg-red-600 px-6 py-4 text-center text-lg font-semibold text-white transition hover:bg-[#d4af37] hover:text-black"
          >
            View Pricing Details
          </Link>

        </div>

      </div>

    </main>
  );
}