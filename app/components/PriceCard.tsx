import Link from "next/link";
import type { PricingPlan } from "@/data/pricingData";

type PriceCardProps = {
  plan: PricingPlan;
};

export default function PriceCard({ plan }: PriceCardProps) {
  return (
    <article className="group relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-zinc-800/80 bg-zinc-950/80 p-8 shadow-2xl backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:border-red-600/50">

      {/* Badge */}
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

        <h2 className="mt-3 pr-24 text-2xl font-extrabold text-white sm:text-3xl">
          {plan.title}
        </h2>

        <p className="mt-3 min-h-[60px] text-sm leading-relaxed text-zinc-400">
          {plan.description}
        </p>

        {/* Pricing */}
        <div className="mt-6 rounded-2xl border border-zinc-800/60 bg-zinc-900/40 p-5 backdrop-blur-md">

          <p className="text-xs font-medium uppercase tracking-wider text-zinc-500">
            Starting From
          </p>

          <div className="mt-1 flex items-baseline gap-1.5">

            <span className="text-2xl font-bold text-amber-400">
              ₹
            </span>

            <span className="text-4xl font-black tracking-tight text-white sm:text-5xl">
              {plan.price.toLocaleString("en-IN")}
            </span>

            <span className="ml-1 text-xs font-medium text-zinc-500">
              / night
            </span>

          </div>

        </div>

        {/* Features */}
        <div className="mt-7">

          <h3 className="text-xs font-bold uppercase tracking-wider text-amber-400">
            Included Amenities
          </h3>

          <ul className="mt-4 space-y-3">

            {plan.features.map((feature) => (
              <li
                key={feature}
                className="flex items-center gap-3 text-sm text-zinc-300"
              >

                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-red-500/30 bg-red-600/20 text-xs text-red-500">
                  ✓
                </span>

                <span>
                  {feature}
                </span>

              </li>
            ))}

          </ul>

        </div>

      </div>

      {/* Button */}
      <div className="mt-8 pt-4">

        <Link
  href="/contact"
  className="block w-full rounded-md bg-[#d4af37] px-6 py-3 text-center font-semibold text-black transition duration-300 hover:bg-red-600 hover:text-white"
>
  Select This Plan
</Link>

      </div>

    </article>
  );
}