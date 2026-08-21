export type PricingPlan = {
  id: number;
  title: string;
  description: string;
  price: number;
  features: string[];
  popular?: boolean;
  badge?: string;
};

export const pricingPlans: PricingPlan[] = [
  {
    id: 1,
    title: "Deluxe Double Room",
    description:
      "A comfortable and beautifully designed room perfect for a relaxing stay with modern amenities.",
    price: 700,
    features: ["Free High-Speed WiFi", "24/7 Room Service", "Complimentary Parking", "Air Conditioning"],
  },
  {
    id: 2,
    title: "Luxury King Room",
    description:
      "Enjoy a spacious luxury room with premium comfort, scenic views, and high-end facilities.",
    price: 1200,
    popular: true,
    badge: "Most Popular",
    features: ["Free High-Speed WiFi", "24/7 Room Service", "VIP Parking", "King Size Bed", "Breakfast Included"],
  },
  {
    id: 3,
    title: "Premium Single Room",
    description:
      "A stylish and cozy room tailored for solo travelers looking for comfort and peaceful stay.",
    price: 900,
    features: ["Free High-Speed WiFi", "Room Service", "Dedicated Workspace", "Smart TV"],
  },
  {
    id: 4,
    title: "Family Suite",
    description:
      "A spacious family-friendly suite offering maximum comfort, two bed sections, and luxury space.",
    price: 1500,
    badge: "Best Value",
    features: ["Free High-Speed WiFi", "Full Room Service", "Reserved Parking", "2 King Beds", "Mini Bar & Kitchenette"],
  },
];