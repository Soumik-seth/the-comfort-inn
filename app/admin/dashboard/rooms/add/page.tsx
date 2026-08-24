"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, type FormEvent } from "react";

export default function AddRoomPage() {
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [availability, setAvailability] = useState("");

  const [bedType, setBedType] = useState("");
  const [maxOccupancy, setMaxOccupancy] = useState("");
  const [roomSize, setRoomSize] = useState("");

  const [roomFeatures, setRoomFeatures] = useState("");
  const [additionalFeatures, setAdditionalFeatures] = useState("");
  const [photos, setPhotos] = useState("");

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setError("");
    setLoading(true);

    try {
      const response = await fetch("/api/admin/rooms", {
        method: "POST",
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
      });

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
        setError(data.message || "Failed to create room.");
        return;
      }

      router.push("/admin/dashboard/rooms");
      router.refresh();

    } catch (error) {
      console.error("Add room error:", error);
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
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
            Add New Room
          </h1>

          <div className="mt-5 h-1 w-16 bg-red-600" />

          <p className="mt-5 text-gray-400">
            Add a new room to The Comfort Inn.
          </p>

        </div>

        {/* Form */}
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
                  onChange={(event) => setTitle(event.target.value)}
                  placeholder="e.g. Deluxe Double Room"
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
                  value={description}
                  onChange={(event) => setDescription(event.target.value)}
                  placeholder="Describe the room..."
                  rows={5}
                  required
                  className="w-full resize-none rounded-lg border border-zinc-700 bg-black px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-gray-600 focus:border-red-600 focus:ring-1 focus:ring-red-600"
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
                  onChange={(event) => setImage(event.target.value)}
                  placeholder="https://..."
                  required
                  className="w-full rounded-lg border border-zinc-700 bg-black px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-gray-600 focus:border-red-600 focus:ring-1 focus:ring-red-600"
                />

                <p className="mt-2 text-xs text-gray-500">
                  Cloudinary upload will be connected later.
                </p>

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
                  onChange={(event) => setAvailability(event.target.value)}
                  placeholder="10"
                  required
                  className="w-full rounded-lg border border-zinc-700 bg-black px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-gray-600 focus:border-red-600 focus:ring-1 focus:ring-red-600"
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
                  onChange={(event) => setBedType(event.target.value)}
                  placeholder="Double Bed"
                  required
                  className="w-full rounded-lg border border-zinc-700 bg-black px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-gray-600 focus:border-red-600 focus:ring-1 focus:ring-red-600"
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
                  onChange={(event) => setMaxOccupancy(event.target.value)}
                  placeholder="2 Guests"
                  required
                  className="w-full rounded-lg border border-zinc-700 bg-black px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-gray-600 focus:border-red-600 focus:ring-1 focus:ring-red-600"
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
                  onChange={(event) => setRoomSize(event.target.value)}
                  placeholder="350 sq ft"
                  required
                  className="w-full rounded-lg border border-zinc-700 bg-black px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-gray-600 focus:border-red-600 focus:ring-1 focus:ring-red-600"
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
                  onChange={(event) => setRoomFeatures(event.target.value)}
                  placeholder="Free WiFi, 24/7 Reception, Daily Housekeeping"
                  className="w-full rounded-lg border border-zinc-700 bg-black px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-gray-600 focus:border-red-600 focus:ring-1 focus:ring-red-600"
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
                  placeholder="Parking, Attached Bathroom, Smart TV"
                  className="w-full rounded-lg border border-zinc-700 bg-black px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-gray-600 focus:border-red-600 focus:ring-1 focus:ring-red-600"
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
                  onChange={(event) => setPhotos(event.target.value)}
                  placeholder="https://image1.jpg, https://image2.jpg"
                  className="w-full rounded-lg border border-zinc-700 bg-black px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-gray-600 focus:border-red-600 focus:ring-1 focus:ring-red-600"
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
              {loading ? "Creating Room..." : "Create Room"}
            </button>

          </div>

        </form>

      </div>

    </main>
  );
}