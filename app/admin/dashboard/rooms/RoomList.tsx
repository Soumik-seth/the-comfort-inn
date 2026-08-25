"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

type Room = {
  id: number;
  title: string;
  description: string;
  image: string;
  availability: number;
  bedType: string;
  maxOccupancy: string;
  roomSize: string;
};

type RoomListProps = {
  rooms: Room[];
};

export default function RoomList({ rooms }: RoomListProps) {
  const router = useRouter();

  const [deletingId, setDeletingId] = useState<number | null>(
    null
  );

  async function handleDelete(roomId: number, roomTitle: string) {
    const confirmed = window.confirm(
      `Are you sure you want to delete "${roomTitle}"?`
    );

    if (!confirmed) {
      return;
    }

    setDeletingId(roomId);

    try {
      const response = await fetch(
        `/api/admin/rooms/${roomId}`,
        {
          method: "DELETE",
        }
      );

      const data = await response.json();

      if (!response.ok) {
        alert(data.message || "Failed to delete room.");
        return;
      }

      router.refresh();

    } catch (error) {
      console.error("Delete room error:", error);

      alert("Something went wrong. Please try again.");

    } finally {
      setDeletingId(null);
    }
  }

  return (
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

              {/* Edit */}
              <Link
                href={`/admin/dashboard/rooms/${room.id}/edit`}
                className="rounded-md border border-zinc-700 px-5 py-2.5 text-sm font-semibold text-white transition hover:border-red-600 hover:bg-red-600"
              >
                Edit
              </Link>

              {/* Delete */}
              <button
                type="button"
                disabled={deletingId === room.id}
                onClick={() =>
                  handleDelete(room.id, room.title)
                }
                className="rounded-md border border-red-900 px-5 py-2.5 text-sm font-semibold text-red-500 transition hover:bg-red-600 hover:text-white disabled:cursor-not-allowed disabled:opacity-50"
              >
                {deletingId === room.id
                  ? "Deleting..."
                  : "Delete"}
              </button>

            </div>

          </div>

        ))

      )}

    </div>
  );
}