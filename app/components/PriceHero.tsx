export default function PriceHero() {
  return (
    <section className="bg-black px-6 pb-12 pt-36">
      <div className="mx-auto max-w-4xl text-center">

        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-red-500">
          Simple & Transparent
        </p>

      <h1 className="mt-6 text-4xl font-extrabold uppercase tracking-tight text-white sm:text-6xl md:text-7xl">
  Room <span className="bg-gradient-to-r from-red-500 via-red-400 to-amber-400 bg-clip-text text-transparent">Pricing</span>
</h1>

        <div className="mx-auto mt-5 h-1 w-16 bg-red-600" />

        <p className="mx-auto mt-6 max-w-2xl leading-8 text-gray-400">
          Choose the perfect room for your stay with our simple
          and transparent pricing. Enjoy premium comfort and
          excellent hospitality at The Comfort Inn.
        </p>

      </div>
    </section>
  );
}