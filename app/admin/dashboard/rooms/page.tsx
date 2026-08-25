import Link from "next/link";
import prisma from "@/lib/prisma";
import RoomList from "./RoomList";

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

            <div className="border-b border-zinc-800 px-6 py-5">

              <h2 className="text-xl font-bold text-white">
                All Rooms
              </h2>

              <p className="mt-1 text-sm text-gray-500">
                {rooms.length} rooms found
              </p>

            </div>

            <RoomList rooms={rooms} />

          </div>

        </section>

      </div>

    </main>
  );
}