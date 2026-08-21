import PriceHero from "../components/PriceHero";
import PriceCard from "../components/PriceCard";
import { pricingPlans } from "@/data/pricingData";

const benefits = [
  {
    icon: "⚡",
    title: "Instant Confirmation",
    description: "Receive your booking confirmation instantly via SMS and Email.",
  },
  {
    icon: "🛡️",
    title: "Free Cancellation",
    description: "Plans change! Enjoy free cancellation options up to 24h prior.",
  },
  {
    icon: "💎",
    title: "Best Price Guarantee",
    description: "Direct booking guarantees the lowest rate available online.",
  },
];

export default function PricesPage() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-red-600 selection:text-white">
      {/* Hero Header */}
      <PriceHero />

      {/* Pricing Cards Grid */}
      <section className="relative z-10 px-6 pb-28">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-2 lg:gap-10">
          {pricingPlans.map((plan) => (
            <PriceCard key={plan.id} plan={plan} />
          ))}
        </div>
      </section>

      {/* Permanent Benefits Section */}
      <section className="relative border-t border-zinc-900 bg-gradient-to-b from-zinc-950 to-black px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-red-500">
              Book With Confidence
            </span>

            <h2 className="mt-3 text-3xl font-extrabold text-white md:text-5xl">
              Why Book Directly With Us?
            </h2>

            <div className="mx-auto mt-5 h-1 w-16 rounded-full bg-red-600" />
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="group rounded-2xl border border-zinc-800/80 bg-zinc-900/40 p-8 text-center transition-all duration-300 hover:-translate-y-1.5 hover:border-red-600/60 hover:bg-zinc-900/80"
              >
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-red-600/20 to-amber-500/20 text-2xl border border-red-500/30 group-hover:scale-110 transition-transform duration-300">
                  {benefit.icon}
                </div>

                <h3 className="mt-6 text-xl font-bold text-white">
                  {benefit.title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-zinc-400">
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