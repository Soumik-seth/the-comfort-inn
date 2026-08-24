import Link from "next/link";
import prisma from "@/lib/prisma";

export default async function AdminRoomsPage() {
  const rooms = await prisma.room.findMany({
    orderBy: {
      id: "asc",
    },
  });

  return (
    <main className="min-h-screen bg-black px-6 py-32">

      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">

          <div>

            <Link
              href="/admin/dashboard"
              className="text-sm font-medium text-gray-400 transition hover:text-red-500"
            >
              ← Back to Dashboard
            </Link>

            <p className="mt-8 text-sm font-semibold uppercase tracking-[0.3em] text-red-500">
              Administrator
            </p>

            <h1 className="mt-3 text-4xl font-bold text-white md:text-5xl">
              Manage Rooms
            </h1>

            <div className="mt-5 h-1 w-16 bg-red-600" />

            <p className="mt-5 text-gray-400">
              Manage all hotel rooms from your dashboard.
            </p>

          </div>

          {/* Add Room */}
          <Link
            href="/admin/dashboard/rooms/add"
            className="rounded-lg bg-red-600 px-6 py-3.5 text-center font-semibold text-white transition hover:bg-[#d4af37] hover:text-black"
          >
            + Add New Room
          </Link>

        </div>

        {/* Rooms */}
        <section className="mt-12">

          <div className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950">

            {/* Section Header */}
            <div className="border-b border-zinc-800 px-6 py-5">

              <h2 className="text-xl font-bold text-white">
                All Rooms
              </h2>

              <p className="mt-1 text-sm text-gray-500">
                {rooms.length} rooms found
              </p>

            </div>

            {/* Room List */}
            <div className="divide-y divide-zinc-800">

              {rooms.length === 0 ? (

                <div className="px-6 py-16 text-center">

                  <p className="text-lg font-semibold text-white">
                    No rooms found
                  </p>

                  <p className="mt-2 text-sm text-gray-500">
                    Add your first room to get started.
                  </p>

                  <Link
                    href="/admin/dashboard/rooms/add"
                    className="mt-6 inline-block rounded-lg bg-red-600 px-6 py-3 font-semibold text-white transition hover:bg-[#d4af37] hover:text-black"
                  >
                    + Add Room
                  </Link>

                </div>

              ) : (

                rooms.map((room) => (

                  <div
                    key={room.id}
                    className="flex flex-col gap-6 p-6 transition hover:bg-zinc-900/50 md:flex-row md:items-center md:justify-between"
                  >

                    {/* Room Information */}
                    <div className="flex items-start gap-5">

                      <img
                        src={room.image}
                        alt={room.title}
                        className="h-24 w-32 shrink-0 rounded-lg object-cover"
                      />

                      <div>

                        <h3 className="text-lg font-bold text-white">
                          {room.title}
                        </h3>

                        <p className="mt-2 max-w-xl text-sm leading-6 text-gray-400">
                          {room.description}
                        </p>

                        <div className="mt-3 flex flex-wrap gap-2">

                          <span className="rounded-md bg-zinc-900 px-3 py-1 text-xs text-gray-400">
                            {room.bedType}
                          </span>

                          <span className="rounded-md bg-zinc-900 px-3 py-1 text-xs text-gray-400">
                            {room.maxOccupancy}
                          </span>

                          <span className="rounded-md bg-zinc-900 px-3 py-1 text-xs text-gray-400">
                            {room.roomSize}
                          </span>

                          <span className="rounded-md bg-red-600/10 px-3 py-1 text-xs font-semibold text-red-500">
                            {room.availability} Available
                          </span>

                        </div>

                      </div>

                    </div>

                    {/* Actions */}
                    <div className="flex shrink-0 gap-3">

                      <Link
                        href={`/admin/dashboard/rooms/${room.id}/edit`}
                        className="rounded-md border border-zinc-700 px-5 py-2.5 text-sm font-semibold text-white transition hover:border-red-600 hover:bg-red-600"
                      >
                        Edit
                      </Link>

                      <button
                        type="button"
                        className="rounded-md border border-red-900 px-5 py-2.5 text-sm font-semibold text-red-500 transition hover:bg-red-600 hover:text-white"
                      >
                        Delete
                      </button>

                    </div>

                  </div>

                ))

              )}

            </div>

          </div>

        </section>

      </div>

    </main>
  );
}