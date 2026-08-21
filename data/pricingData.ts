export type PricingPlan = {
  id: number;
  title: string;
  description: string;
  price: number;
  badge?: string;
  features: string[];
};

export const pricingPlans: PricingPlan[] = [
  {
    id: 1,
    title: "Deluxe Double Room",
    description:
      "A comfortable and beautifully designed room perfect for a relaxing and memorable stay.",
    price: 700,
    badge: "Popular",
    features: [
      "Free WiFi",
      "Room Service",
      "Parking",
    ],
  },

  {
    id: 2,
    title: "Luxury King Room",
    description:
      "Enjoy a spacious luxury room with premium comfort and modern facilities.",
    price: 1200,
    features: [
      "Free WiFi",
      "Room Service",
      "Parking",
    ],
  },

  {
    id: 3,
    title: "Premium Single Room",
    description:
      "A stylish and comfortable room designed for a peaceful and convenient stay.",
    price: 900,
    features: [
      "Free WiFi",
      "Room Service",
      "Parking",
    ],
  },

  {
    id: 4,
    title: "Family Suite",
    description:
      "A spacious family-friendly suite offering comfort, convenience and plenty of space.",
    price: 1500,
    badge: "Best For Family",
    features: [
      "Free WiFi",
      "Room Service",
      "Parking",
    ],
  },
];