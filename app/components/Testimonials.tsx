const testimonials = [
  {
    name: "Rahul Sharma",
    role: "Guest",
    message:
      "Amazing rooms, friendly staff and a wonderful experience. Highly recommended!",
  },
  {
    name: "Priya Das",
    role: "Guest",
    message:
      "The rooms were clean, comfortable and beautifully maintained. We really enjoyed our stay.",
  },
  {
    name: "Arjun Roy",
    role: "Guest",
    message:
      "Excellent hospitality and a very peaceful stay. I would definitely visit The Comfort Inn again.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-black px-6 py-24">
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mb-14 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-red-500">
            Guest Reviews
          </p>

          <h2 className="text-4xl font-bold text-white md:text-5xl">
            What Our Guests Say
          </h2>

          <div className="mx-auto mt-5 h-1 w-16 bg-red-600" />

          <p className="mx-auto mt-5 max-w-2xl text-gray-400">
            Our guests&apos; experiences mean everything to us.
          </p>
        </div>

        {/* Testimonials */}
        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="group rounded-lg border border-gray-800 bg-zinc-950 p-8 transition duration-300 hover:-translate-y-2 hover:border-red-600"
            >
              {/* Stars */}
              <div className="text-xl tracking-widest text-red-500">
                ★★★★★
              </div>

              {/* Quote */}
              <p className="mt-6 min-h-[120px] text-base leading-7 text-gray-300">
                &quot;{testimonial.message}&quot;
              </p>

              {/* Divider */}
              <div className="my-6 h-px bg-gray-800 transition group-hover:bg-red-600" />

              {/* Guest */}
              <div>
                <h3 className="font-semibold text-white">
                  {testimonial.name}
                </h3>

                <p className="mt-1 text-sm text-red-500">
                  {testimonial.role}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}