import Link from "next/link";
import prisma from "@/lib/prisma";
import EditRoomForm from "./EditRoomForm";

type EditRoomPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function EditRoomPage({
  params,
}: EditRoomPageProps) {
  const { id } = await params;

  const roomId = Number(id);

  if (!Number.isInteger(roomId)) {
    return (
      <main className="min-h-screen bg-black px-6 py-32">
        <div className="mx-auto max-w-5xl">
          <h1 className="text-3xl font-bold text-white">
            Invalid Room ID
          </h1>

          <Link
            href="/admin/dashboard/rooms"
            className="mt-6 inline-block text-sm text-gray-400 hover:text-red-500"
          >
            ← Back to Rooms
          </Link>
        </div>
      </main>
    );
  }

  const room = await prisma.room.findUnique({
    where: {
      id: roomId,
    },
  });

  if (!room) {
    return (
      <main className="min-h-screen bg-black px-6 py-32">
        <div className="mx-auto max-w-5xl">

          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-red-500">
            Administrator
          </p>

          <h1 className="mt-3 text-4xl font-bold text-white">
            Room Not Found
          </h1>

          <p className="mt-4 text-gray-400">
            The room you are trying to edit does not exist.
          </p>

          <Link
            href="/admin/dashboard/rooms"
            className="mt-8 inline-block rounded-lg bg-red-600 px-6 py-3 font-semibold text-white transition hover:bg-[#d4af37] hover:text-black"
          >
            ← Back to Rooms
          </Link>

        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-black px-6 py-32">

      <div className="mx-auto max-w-5xl">

        {/* Header */}
        <div className="mb-10">

          <Link
            href="/admin/dashboard/rooms"
            className="text-sm font-medium text-gray-400 transition hover:text-red-500"
          >
            ← Back to Rooms
          </Link>

          <p className="mt-8 text-sm font-semibold uppercase tracking-[0.3em] text-red-500">
            Administrator
          </p>

          <h1 className="mt-3 text-4xl font-bold text-white md:text-5xl">
            Edit Room
          </h1>

          <div className="mt-5 h-1 w-16 bg-red-600" />

          <p className="mt-5 text-gray-400">
            Update the information for {room.title}.
          </p>

        </div>

        {/* Form */}
        <EditRoomForm room={room} />

      </div>

    </main>
  );
}