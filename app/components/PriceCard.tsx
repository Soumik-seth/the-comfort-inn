import Link from "next/link";
import type { PricingPlan } from "@/data/pricingData";

type PriceCardProps = {
  room: PricingPlan;
};

export default function PriceCard({ plan }: PriceCardProps) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950 p-8 shadow-xl transition duration-300 hover:-translate-y-2 hover:border-red-600">

      {/* Plan Title */}
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-500">
          The Comfort Inn
        </p>

        <h2 className="mt-3 text-2xl font-bold text-white md:text-3xl">
          {plan.title}
        </h2>

        <p className="mt-4 min-h-[72px] text-sm leading-7 text-gray-400">
          {plan.description}
        </p>
      </div>

      {/* Price */}
      <div className="mt-7 border-y border-zinc-800 py-6">

        <p className="text-sm font-medium text-gray-500">
          Starting From
        </p>

        <div className="mt-2 flex items-baseline gap-2">
          <span className="text-3xl font-bold text-[#d4af37]">
            ₹
          </span>

          <span className="text-5xl font-bold text-white">
            {plan.price}
          </span>
        </div>

        <p className="mt-2 text-sm text-gray-500">
          Per night
        </p>

      </div>

      {/* Features */}
      <div className="mt-7 flex-1">

        <h3 className="text-sm font-semibold uppercase tracking-wider text-[#d4af37]">
          Included
        </h3>

        <ul className="mt-5 space-y-4">

          {plan.features.map((feature) => (
            <li
              key={feature}
              className="flex items-center gap-3 text-gray-300"
            >
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-red-600 text-xs text-white">
                ✓
              </span>

              {feature}
            </li>
          ))}

        </ul>

      </div>

      {/* Select Plan */}
      <div className="mt-8">

        <Link
          href="/contact"
          className="block w-full rounded-md bg-red-600 px-6 py-3.5 text-center font-semibold text-white transition duration-300 hover:bg-[#d4af37] hover:text-black"
        >
          Select This Plan
        </Link>

      </div>

    </article>
  );
}