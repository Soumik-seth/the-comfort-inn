import PriceHero from "../components/PriceHero";
import PriceCard from "../components/PriceCard";
import { pricingPlans } from "@/data/pricingData";

const benefits = [
  {
    title: "Instant Confirmation",
    description:
      "Get quick confirmation for your room booking.",
  },
  {
    title: "Free Cancellation",
    description:
      "Flexible cancellation options for a worry-free stay.",
  },
  {
    title: "Best Price Guarantee",
    description:
      "Book directly with us and enjoy our best available prices.",
  },
];

export default function PricesPage() {
  return (
    <main className="min-h-screen bg-black">

      {/* Hero */}
      <PriceHero />

      {/* Pricing Cards */}
      <section className="px-6 pb-24">

        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-2">

          {pricingPlans.map((plan) => (
            <PriceCard
              key={plan.id}
              plan={plan}
            />
          ))}

        </div>

      </section>

      {/* Permanent Benefits */}
      <section className="border-t border-zinc-900 bg-zinc-950 px-6 py-20">

        <div className="mx-auto max-w-7xl">

          {/* Heading */}
          <div className="mb-12 text-center">

            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-red-500">
              Book With Confidence
            </p>

            <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">
              Why Book With Us?
            </h2>

            <div className="mx-auto mt-5 h-1 w-16 bg-red-600" />

          </div>

          {/* Benefits */}
          <div className="grid gap-6 md:grid-cols-3">

            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="rounded-xl border border-zinc-800 bg-black p-7 text-center transition duration-300 hover:-translate-y-1 hover:border-red-600"
              >

                {/* Icon */}
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-red-600 text-xl font-bold text-white">
                  ✓
                </div>

                {/* Title */}
                <h3 className="mt-5 text-lg font-bold text-white">
                  {benefit.title}
                </h3>

                {/* Description */}
                <p className="mt-3 text-sm leading-7 text-gray-400">
                  {benefit.description}
                </p>

              </div>
            ))}

          </div>

        </div>

      </section>

    </main>
  );
}