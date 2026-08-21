import Link from "next/link";

export default function Services() {
  return (
    <section className="bg-black px-6 py-24">
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mb-14 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-red-500">
            Discover More
          </p>

          <h2 className="text-4xl font-bold text-white md:text-5xl">
            Explore Our Services
          </h2>

          <div className="mx-auto mt-5 h-1 w-16 bg-red-600" />

          <p className="mx-auto mt-5 max-w-2xl text-gray-400">
            Discover everything you need for a comfortable,
            relaxing and memorable stay at The Comfort Inn.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-2">

          {/* Luxurious Rooms */}
          <Link
            href="/rooms"
            className="group relative h-[420px] overflow-hidden rounded-lg border border-gray-800"
          >
            <div
              className="absolute inset-0 bg-cover bg-center transition duration-700 group-hover:scale-110"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=1200&auto=format&fit=crop')",
              }}
            />

            <div className="absolute inset-0 bg-black/55 transition duration-500 group-hover:bg-black/65" />

            <div className="absolute bottom-0 left-0 right-0 p-8">
              <p className="mb-2 text-sm uppercase tracking-widest text-red-500">
                Stay With Us
              </p>

              <h3 className="text-3xl font-bold text-white">
                Luxurious Rooms
              </h3>

              <p className="mt-3 max-w-md text-gray-300">
                Relax in our beautifully designed rooms with
                modern comfort and premium facilities.
              </p>

              <span className="mt-5 inline-block font-semibold text-white transition group-hover:text-red-500">
                Explore Rooms →
              </span>
            </div>
          </Link>

          {/* Contact Us */}
          <Link
            href="/contact"
            className="group relative h-[420px] overflow-hidden rounded-lg border border-gray-800"
          >
            <div
              className="absolute inset-0 bg-cover bg-center transition duration-700 group-hover:scale-110"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1200&auto=format&fit=crop')",
              }}
            />

            <div className="absolute inset-0 bg-black/55 transition duration-500 group-hover:bg-black/65" />

            <div className="absolute bottom-0 left-0 right-0 p-8">
              <p className="mb-2 text-sm uppercase tracking-widest text-red-500">
                We're Here For You
              </p>

              <h3 className="text-3xl font-bold text-white">
                Contact Us
              </h3>

              <p className="mt-3 max-w-md text-gray-300">
                Have a question or need assistance? Our team
                is always ready to help you.
              </p>

              <span className="mt-5 inline-block font-semibold text-white transition group-hover:text-red-500">
                Get In Touch →
              </span>
            </div>
          </Link>

        </div>
      </div>
    </section>
  );
}