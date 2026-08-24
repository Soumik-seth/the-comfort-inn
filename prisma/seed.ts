import "dotenv/config";

import bcrypt from "bcrypt";
import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL,
});

const prisma = new PrismaClient({
  adapter,
});

async function main() {
  // ==========================================
  // ADMIN
  // ==========================================

  const email = process.env.ADMIN_EMAIL;
  const password = process.env.ADMIN_PASSWORD;

  if (!email || !password) {
    throw new Error(
      "ADMIN_EMAIL and ADMIN_PASSWORD are required in .env"
    );
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const existingAdmin = await prisma.admin.findUnique({
    where: {
      email,
    },
  });

  if (existingAdmin) {
    console.log("Admin already exists.");
  } else {
    await prisma.admin.create({
      data: {
        email,
        password: hashedPassword,
      },
    });

    console.log("Admin created successfully.");
  }

  // ==========================================
  // ROOMS
  // ==========================================

  const rooms = [
    {
      id: 1,
      title: "Deluxe Double Room",
      description:
        "A spacious and elegant room designed for guests looking for comfort, relaxation and a premium stay.",
      image:
        "https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=1200&auto=format&fit=crop",
      availability: 10,

      bedType: "Double Bed",
      maxOccupancy: "2 Guests",
      roomSize: "350 sq ft",

      roomFeatures: [
        "Free WiFi",
        "24/7 Reception",
        "Daily Housekeeping",
      ],

      additionalFeatures: [
        "Parking",
        "Attached Bathroom",
      ],

      photos: [
        "https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=1200&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=1200&auto=format&fit=crop",
      ],
    },

    {
      id: 2,
      title: "Luxury King Room",
      description:
        "Enjoy a luxurious stay in our spacious king room featuring elegant interiors and modern facilities.",
      image:
        "https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=1200&auto=format&fit=crop",
      availability: 6,

      bedType: "King Bed",
      maxOccupancy: "2 Guests",
      roomSize: "400 sq ft",

      roomFeatures: [
        "Free WiFi",
        "24/7 Reception",
        "Daily Housekeeping",
      ],

      additionalFeatures: [
        "Parking",
        "Attached Bathroom",
        "Smart TV",
      ],

      photos: [
        "https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=1200&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1200&auto=format&fit=crop",
      ],
    },

    {
      id: 3,
      title: "Premium Single Room",
      description:
        "A comfortable and stylish room perfect for solo travellers seeking privacy and convenience.",
      image:
        "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1200&auto=format&fit=crop",
      availability: 8,

      bedType: "Single Bed",
      maxOccupancy: "1 Guest",
      roomSize: "250 sq ft",

      roomFeatures: [
        "Free WiFi",
        "24/7 Reception",
        "Daily Housekeeping",
      ],

      additionalFeatures: [
        "Attached Bathroom",
        "Work Desk",
      ],

      photos: [
        "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1200&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1591088398332-8a7791972843?q=80&w=1200&auto=format&fit=crop",
      ],
    },

    {
      id: 4,
      title: "Family Suite",
      description:
        "A spacious family suite offering extra room, comfort and convenient facilities for families.",
      image:
        "https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=1200&auto=format&fit=crop",
      availability: 4,

      bedType: "Two Double Beds",
      maxOccupancy: "4 Guests",
      roomSize: "550 sq ft",

      roomFeatures: [
        "Free WiFi",
        "24/7 Reception",
        "Daily Housekeeping",
      ],

      additionalFeatures: [
        "Parking",
        "Attached Bathroom",
        "Mini Fridge",
      ],

      photos: [
        "https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=1200&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1595576508898-0ad5c879a061?q=80&w=1200&auto=format&fit=crop",
      ],
    },
  ];

  // ==========================================
  // PRICING PLANS
  // ==========================================

  const pricingPlans = [
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
      badge: null,
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
      badge: null,
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

  // ==========================================
  // SAVE ROOMS
  // ==========================================

  for (const room of rooms) {
    await prisma.room.upsert({
      where: {
        id: room.id,
      },

      update: {
        title: room.title,
        description: room.description,
        image: room.image,
        availability: room.availability,
        bedType: room.bedType,
        maxOccupancy: room.maxOccupancy,
        roomSize: room.roomSize,
        roomFeatures: room.roomFeatures,
        additionalFeatures: room.additionalFeatures,
        photos: room.photos,
      },

      create: room,
    });
  }

  console.log("Rooms seeded successfully.");

  // ==========================================
  // SAVE PRICING PLANS
  // ==========================================

  for (const plan of pricingPlans) {
    await prisma.pricingPlan.upsert({
      where: {
        id: plan.id,
      },

      update: {
        title: plan.title,
        description: plan.description,
        price: plan.price,
        badge: plan.badge,
        features: plan.features,
      },

      create: plan,
    });
  }

  console.log("Pricing plans seeded successfully.");

  console.log("Database seeding completed successfully.");
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });