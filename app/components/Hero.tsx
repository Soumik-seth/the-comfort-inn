import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2000&auto=format&fit=crop')",
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/65" />

      {/* Hero Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-6 pt-20 text-center">
        
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.4em] text-red-500">
          Welcome To
        </p>

        <h1 className="text-5xl font-bold uppercase tracking-wide text-white md:text-7xl">
          The Comfort Inn
        </h1>

        <div className="mx-auto mt-6 h-1 w-20 bg-red-600" />

        <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-gray-300 md:text-lg">
          Experience comfort, elegance and exceptional hospitality
          at The Comfort Inn. Your perfect stay begins here.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          
          <Link
            href="/contact"
            className="rounded-md bg-red-600 px-8 py-3.5 font-semibold text-white transition duration-300 hover:bg-red-700 hover:scale-105"
          >
            Book Now
          </Link>

          <Link
            href="/rooms"
            className="rounded-md border border-white px-8 py-3.5 font-semibold text-white transition duration-300 hover:border-red-600 hover:bg-red-600 hover:scale-105"
          >
            View Rooms
          </Link>

        </div>
      </div>
    </section>
  );
}