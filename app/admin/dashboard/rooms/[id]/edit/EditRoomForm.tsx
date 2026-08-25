"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, type FormEvent } from "react";

type Room = {
  id: number;
  title: string;
  description: string;
  image: string;
  availability: number;

  bedType: string;
  maxOccupancy: string;
  roomSize: string;

  roomFeatures: string[];
  additionalFeatures: string[];
  photos: string[];
};

type EditRoomFormProps = {
  room: Room;
};

export default function EditRoomForm({
  room,
}: EditRoomFormProps) {
  const router = useRouter();

  const [title, setTitle] = useState(room.title);
  const [description, setDescription] = useState(room.description);
  const [image, setImage] = useState(room.image);
  const [availability, setAvailability] = useState(
    String(room.availability)
  );

  const [bedType, setBedType] = useState(room.bedType);
  const [maxOccupancy, setMaxOccupancy] = useState(
    room.maxOccupancy
  );
  const [roomSize, setRoomSize] = useState(room.roomSize);

  const [roomFeatures, setRoomFeatures] = useState(
    room.roomFeatures.join(", ")
  );

  const [additionalFeatures, setAdditionalFeatures] =
    useState(room.additionalFeatures.join(", "));

  const [photos, setPhotos] = useState(
    room.photos.join(", ")
  );

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(
    event: FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    setError("");
    setLoading(true);

    try {
      const response = await fetch(
        `/api/admin/rooms/${room.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            title,
            description,
            image,
            availability: Number(availability),

            bedType,
            maxOccupancy,
            roomSize,

            roomFeatures: roomFeatures
              .split(",")
              .map((item) => item.trim())
              .filter(Boolean),

            additionalFeatures: additionalFeatures
              .split(",")
              .map((item) => item.trim())
              .filter(Boolean),

            photos: photos
              .split(",")
              .map((item) => item.trim())
              .filter(Boolean),
          }),
        }
      );

      const text = await response.text();

      let data: {
        success?: boolean;
        message?: string;
      } = {};

      if (text) {
        try {
          data = JSON.parse(text);
        } catch {
          setError("Invalid response from server.");
          return;
        }
      }

      if (!response.ok) {
        setError(
          data.message || "Failed to update room."
        );
        return;
      }

      router.push("/admin/dashboard/rooms");
      router.refresh();

    } catch (error) {
      console.error("Update room error:", error);
      setError(
        "Something went wrong. Please try again."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6 shadow-2xl md:p-8"
    >

      {/* Basic Information */}
      <section>

        <h2 className="text-xl font-bold text-white">
          Basic Information
        </h2>

        <div className="mt-2 h-1 w-10 bg-red-600" />

        <div className="mt-7 grid gap-6 md:grid-cols-2">

          {/* Title */}
          <div className="md:col-span-2">

            <label
              htmlFor="title"
              className="mb-2 block text-sm font-medium text-gray-300"
            >
              Room Title
            </label>

            <input
              id="title"
              type="text"
              value={title}
              onChange={(event) =>
                setTitle(event.target.value)
              }
              required
              className="w-full rounded-lg border border-zinc-700 bg-black px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-gray-600 focus:border-red-600 focus:ring-1 focus:ring-red-600"
            />

          </div>

          {/* Description */}
          <div className="md:col-span-2">

            <label
              htmlFor="description"
              className="mb-2 block text-sm font-medium text-gray-300"
            >
              Description
            </label>

            <textarea
              id="description"
              rows={5}
              value={description}
              onChange={(event) =>
                setDescription(event.target.value)
              }
              required
              className="w-full resize-none rounded-lg border border-zinc-700 bg-black px-4 py-3.5 text-sm text-white outline-none transition focus:border-red-600 focus:ring-1 focus:ring-red-600"
            />

          </div>

          {/* Image */}
          <div className="md:col-span-2">

            <label
              htmlFor="image"
              className="mb-2 block text-sm font-medium text-gray-300"
            >
              Main Image URL
            </label>

            <input
              id="image"
              type="url"
              value={image}
              onChange={(event) =>
                setImage(event.target.value)
              }
              required
              className="w-full rounded-lg border border-zinc-700 bg-black px-4 py-3.5 text-sm text-white outline-none transition focus:border-red-600 focus:ring-1 focus:ring-red-600"
            />

          </div>

          {/* Availability */}
          <div>

            <label
              htmlFor="availability"
              className="mb-2 block text-sm font-medium text-gray-300"
            >
              Available Rooms
            </label>

            <input
              id="availability"
              type="number"
              min="0"
              value={availability}
              onChange={(event) =>
                setAvailability(event.target.value)
              }
              required
              className="w-full rounded-lg border border-zinc-700 bg-black px-4 py-3.5 text-sm text-white outline-none transition focus:border-red-600 focus:ring-1 focus:ring-red-600"
            />

          </div>

        </div>

      </section>

      {/* Specifications */}
      <section className="mt-12 border-t border-zinc-800 pt-10">

        <h2 className="text-xl font-bold text-white">
          Room Specifications
        </h2>

        <div className="mt-2 h-1 w-10 bg-red-600" />

        <div className="mt-7 grid gap-6 md:grid-cols-3">

          {/* Bed */}
          <div>

            <label
              htmlFor="bedType"
              className="mb-2 block text-sm font-medium text-gray-300"
            >
              Bed Type
            </label>

            <input
              id="bedType"
              type="text"
              value={bedType}
              onChange={(event) =>
                setBedType(event.target.value)
              }
              required
              className="w-full rounded-lg border border-zinc-700 bg-black px-4 py-3.5 text-sm text-white outline-none transition focus:border-red-600 focus:ring-1 focus:ring-red-600"
            />

          </div>

          {/* Occupancy */}
          <div>

            <label
              htmlFor="maxOccupancy"
              className="mb-2 block text-sm font-medium text-gray-300"
            >
              Max Occupancy
            </label>

            <input
              id="maxOccupancy"
              type="text"
              value={maxOccupancy}
              onChange={(event) =>
                setMaxOccupancy(event.target.value)
              }
              required
              className="w-full rounded-lg border border-zinc-700 bg-black px-4 py-3.5 text-sm text-white outline-none transition focus:border-red-600 focus:ring-1 focus:ring-red-600"
            />

          </div>

          {/* Room Size */}
          <div>

            <label
              htmlFor="roomSize"
              className="mb-2 block text-sm font-medium text-gray-300"
            >
              Room Size
            </label>

            <input
              id="roomSize"
              type="text"
              value={roomSize}
              onChange={(event) =>
                setRoomSize(event.target.value)
              }
              required
              className="w-full rounded-lg border border-zinc-700 bg-black px-4 py-3.5 text-sm text-white outline-none transition focus:border-red-600 focus:ring-1 focus:ring-red-600"
            />

          </div>

        </div>

      </section>

      {/* Features */}
      <section className="mt-12 border-t border-zinc-800 pt-10">

        <h2 className="text-xl font-bold text-white">
          Room Features
        </h2>

        <div className="mt-2 h-1 w-10 bg-red-600" />

        <p className="mt-4 text-sm text-gray-500">
          Separate multiple features with commas.
        </p>

        <div className="mt-7 space-y-6">

          {/* Room Features */}
          <div>

            <label
              htmlFor="roomFeatures"
              className="mb-2 block text-sm font-medium text-gray-300"
            >
              Essential Features
            </label>

            <input
              id="roomFeatures"
              type="text"
              value={roomFeatures}
              onChange={(event) =>
                setRoomFeatures(event.target.value)
              }
              className="w-full rounded-lg border border-zinc-700 bg-black px-4 py-3.5 text-sm text-white outline-none transition focus:border-red-600 focus:ring-1 focus:ring-red-600"
            />

          </div>

          {/* Additional */}
          <div>

            <label
              htmlFor="additionalFeatures"
              className="mb-2 block text-sm font-medium text-gray-300"
            >
              Additional Features
            </label>

            <input
              id="additionalFeatures"
              type="text"
              value={additionalFeatures}
              onChange={(event) =>
                setAdditionalFeatures(event.target.value)
              }
              className="w-full rounded-lg border border-zinc-700 bg-black px-4 py-3.5 text-sm text-white outline-none transition focus:border-red-600 focus:ring-1 focus:ring-red-600"
            />

          </div>

          {/* Photos */}
          <div>

            <label
              htmlFor="photos"
              className="mb-2 block text-sm font-medium text-gray-300"
            >
              Additional Photo URLs
            </label>

            <input
              id="photos"
              type="text"
              value={photos}
              onChange={(event) =>
                setPhotos(event.target.value)
              }
              className="w-full rounded-lg border border-zinc-700 bg-black px-4 py-3.5 text-sm text-white outline-none transition focus:border-red-600 focus:ring-1 focus:ring-red-600"
            />

          </div>

        </div>

      </section>

      {/* Error */}
      {error && (
        <div className="mt-8 rounded-lg border border-red-900 bg-red-950/40 px-4 py-3 text-sm text-red-400">
          {error}
        </div>
      )}

      {/* Buttons */}
      <div className="mt-10 flex flex-col-reverse gap-4 border-t border-zinc-800 pt-8 sm:flex-row sm:justify-end">

        <Link
          href="/admin/dashboard/rooms"
          className="rounded-lg border border-zinc-700 px-7 py-3.5 text-center text-sm font-semibold text-gray-300 transition hover:border-red-600 hover:text-white"
        >
          Cancel
        </Link>

        <button
          type="submit"
          disabled={loading}
          className="rounded-lg bg-red-600 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-[#d4af37] hover:text-black disabled:cursor-not-allowed disabled:opacity-60"
        >
          {loading ? "Saving Changes..." : "Save Changes"}
        </button>

      </div>

    </form>
  );
} 