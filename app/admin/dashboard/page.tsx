import Link from "next/link";

export default function AdminDashboardPage() {
  return (
    <main className="min-h-screen bg-black px-6 py-32">

      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="mb-12">

          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-red-500">
            Administrator
          </p>

          <h1 className="mt-3 text-4xl font-bold text-white md:text-5xl">
            Admin Dashboard
          </h1>

          <div className="mt-5 h-1 w-16 bg-red-600" />

          <p className="mt-5 max-w-2xl text-gray-400">
            Manage rooms, pricing, gallery and hotel information
            from one place.
          </p>

        </div>

        {/* Dashboard Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

          {/* Rooms */}
          <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-7 transition duration-300 hover:-translate-y-1 hover:border-red-600">

            <div className="text-3xl">
              🏨
            </div>

            <h2 className="mt-5 text-xl font-bold text-white">
              Rooms
            </h2>

            <p className="mt-3 text-sm leading-6 text-gray-400">
              Add, edit and manage hotel rooms.
            </p>

            <Link
              href="/admin/dashboard/rooms"
              className="mt-6 inline-block rounded-md bg-red-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#d4af37] hover:text-black"
            >
              Manage Rooms
            </Link>

          </div>

          {/* Pricing */}
          <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-7 transition duration-300 hover:-translate-y-1 hover:border-red-600">

            <div className="text-3xl">
              💰
            </div>

            <h2 className="mt-5 text-xl font-bold text-white">
              Pricing
            </h2>

            <p className="mt-3 text-sm leading-6 text-gray-400">
              Update room prices and included amenities.
            </p>

            <button
              type="button"
              className="mt-6 rounded-md bg-red-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#d4af37] hover:text-black"
            >
              Manage Pricing
            </button>

          </div>

          {/* Gallery */}
          <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-7 transition duration-300 hover:-translate-y-1 hover:border-red-600">

            <div className="text-3xl">
              🖼️
            </div>

            <h2 className="mt-5 text-xl font-bold text-white">
              Gallery
            </h2>

            <p className="mt-3 text-sm leading-6 text-gray-400">
              Upload and manage hotel images.
            </p>

            <button
              type="button"
              className="mt-6 rounded-md bg-red-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#d4af37] hover:text-black"
            >
              Manage Gallery
            </button>

          </div>

          {/* Messages */}
          <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-7 transition duration-300 hover:-translate-y-1 hover:border-red-600">

            <div className="text-3xl">
              📩
            </div>

            <h2 className="mt-5 text-xl font-bold text-white">
              Messages
            </h2>

            <p className="mt-3 text-sm leading-6 text-gray-400">
              View and manage customer enquiries.
            </p>

            <button
              type="button"
              className="mt-6 rounded-md bg-red-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#d4af37] hover:text-black"
            >
              View Messages
            </button>

          </div>

        </div>

        {/* Back */}
        <div className="mt-12">

          <Link
            href="/"
            className="text-sm font-medium text-gray-400 transition hover:text-red-500"
          >
            ← Back to Website
          </Link>

        </div>

      </div>

    </main>
  );
}