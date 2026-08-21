const amenities = [
  {
    icon: "📶",
    title: "Free WiFi",
    description:
      "Stay connected with fast and reliable WiFi throughout the hotel.",
  },
  {
    icon: "🚗",
    title: "Parking",
    description:
      "Enjoy convenient and secure parking during your stay.",
  },
  {
    icon: "🛎️",
    title: "Room Service",
    description:
      "Enjoy delicious meals and excellent service from the comfort of your room.",
  },
  {
    icon: "🛡️",
    title: "Security",
    description:
      "Your safety and comfort are our top priorities, day and night.",
  },
];

export default function Amenities() {
  return (
    <section className="bg-zinc-950 px-6 py-24">
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mb-14 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-red-500">
            Hotel Facilities
          </p>

          <h2 className="text-4xl font-bold text-white md:text-5xl">
            World-Class Amenities
          </h2>

          <div className="mx-auto mt-5 h-1 w-16 bg-red-600" />

          <p className="mx-auto mt-5 max-w-2xl text-gray-400">
            Everything you need for a comfortable, convenient
            and worry-free stay.
          </p>
        </div>

        {/* Amenities */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {amenities.map((amenity) => (
            <div
              key={amenity.title}
              className="group rounded-lg border border-gray-800 bg-black p-8 text-center transition duration-300 hover:-translate-y-2 hover:border-red-600"
            >
              {/* Icon */}
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-red-600 text-3xl transition duration-300 group-hover:bg-red-600">
                {amenity.icon}
              </div>

              {/* Title */}
              <h3 className="mt-6 text-xl font-semibold text-white">
                {amenity.title}
              </h3>

              {/* Description */}
              <p className="mt-4 text-sm leading-7 text-gray-400">
                {amenity.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}