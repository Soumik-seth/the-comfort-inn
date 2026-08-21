export default function PriceHero() {
  return (
    <section className="relative overflow-hidden bg-black px-6 pb-16 pt-36">
      {/* Background Radial Glow */}
      <div className="pointer-events-none absolute left-1/2 top-10 -translate-x-1/2 h-96 w-[600px] rounded-full bg-red-600/15 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-red-500/20 bg-red-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.25em] text-red-500 backdrop-blur-md">
          Simple & Transparent
        </span>

        <h1 className="mt-6 text-4xl font-extrabold uppercase tracking-tight text-white sm:text-6xl md:text-7xl">
          Room <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-red-400 to-amber-400">Pricing</span>
        </h1>

        <div className="mx-auto mt-6 h-1 w-20 rounded-full bg-gradient-to-r from-red-600 to-amber-500" />

        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-zinc-400 sm:text-lg">
          Choose the perfect room for your stay with our transparent pricing.
          Enjoy premium luxury, state-of-the-art facilities, and warm hospitality at <span className="text-zinc-200 font-medium">The Comfort Inn</span>.
        </p>
      </div>
    </section>
  );
}