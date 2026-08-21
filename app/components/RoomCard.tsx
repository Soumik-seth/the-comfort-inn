import Link from "next/link";
import type { PricingPlan } from "@/data/pricingData";

type PriceCardProps = {
  plan: PricingPlan;
};

export default function PriceCard({ plan }: PriceCardProps) {
  return (
    <article
      className={`relative group flex h-full flex-col justify-between overflow-hidden rounded-3xl border transition-all duration-500 hover:-translate-y-2 p-8 shadow-2xl ${
        plan.popular
          ? "border-red-600/60 bg-gradient-to-b from-zinc-900 via-zinc-950 to-black shadow-red-900/20"
          : "border-zinc-800/80 bg-zinc-950/80 backdrop-blur-sm hover:border-red-600/50"
      }`}
    >
      {/* Popular / Best Value Badge */}
      {plan.badge && (
        <div className="absolute right-6 top-6">
          <span className="rounded-full bg-gradient-to-r from-red-600 to-amber-500 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-white shadow-lg">
            {plan.badge}
          </span>
        </div>
      )}

      <div>
        {/* Header */}
        <p className="text-xs font-bold uppercase tracking-[0.25em] text-red-500">
          The Comfort Inn
        </p>

        <h2 className="mt-3 text-2xl font-extrabold text-white sm:text-3xl">
          {plan.title}
        </h2>

        <p className="mt-3 min-h-[60px] text-sm leading-relaxed text-zinc-400">
          {plan.description}
        </p>

        {/* Pricing Block */}
        <div className="mt-6 rounded-2xl border border-zinc-800/60 bg-zinc-900/40 p-5 backdrop-blur-md">
          <p className="text-xs font-medium uppercase tracking-wider text-zinc-500">
            Starting From
          </p>

          <div className="mt-1 flex items-baseline gap-1.5">
            <span className="text-2xl font-bold text-amber-400">₹</span>
            <span className="text-4xl sm:text-5xl font-black text-white tracking-tight">
              {plan.price.toLocaleString("en-IN")}
            </span>
            <span className="text-xs font-medium text-zinc-500 ml-1">/ night</span>
          </div>
        </div>

        {/* Features List */}
        <div className="mt-7">
          <h3 className="text-xs font-bold uppercase tracking-wider text-amber-400">
            Included Amenities
          </h3>

          <ul className="mt-4 space-y-3">
            {plan.features.map((feature) => (
              <li key={feature} className="flex items-center gap-3 text-sm text-zinc-300">
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-red-600/20 text-red-500 border border-red-500/30 text-xs">
                  ✓
                </span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Action Button */}
      <div className="mt-8 pt-4">
        <Link
          href="/contact"
          className={`block w-full rounded-xl py-4 text-center text-sm font-bold tracking-wide transition-all duration-300 shadow-md ${
            plan.popular
              ? "bg-gradient-to-r from-red-600 to-amber-500 text-white hover:brightness-110 hover:shadow-red-600/25"
              : "bg-zinc-900 border border-zinc-700 text-white hover:bg-red-600 hover:border-red-600 hover:text-white"
          }`}
        >
          Select This Plan
        </Link>
      </div>
    </article>
  );
}