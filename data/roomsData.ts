export type Room = {
  id: number;
  title: string;
  description: string;
  image: string;

  availability: number;

  specifications: {
    bedType: string;
    maxOccupancy: string;
    roomSize: string;
  };

  roomFeatures: string[];
  additionalFeatures: string[];

  photos: string[];
};

export const rooms: Room[] = [
  {
    id: 1,

    title: "Deluxe Double Room",

    description:
      "A spacious and elegant room designed for guests looking for comfort, relaxation and a premium stay.",

    image:
      "https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=1200&auto=format&fit=crop",

    availability: 10,

    specifications: {
      bedType: "Double Bed",
      maxOccupancy: "2 Guests",
      roomSize: "350 sq ft",
    },

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

    specifications: {
      bedType: "King Bed",
      maxOccupancy: "2 Guests",
      roomSize: "400 sq ft",
    },

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

    specifications: {
      bedType: "Single Bed",
      maxOccupancy: "1 Guest",
      roomSize: "250 sq ft",
    },

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

    specifications: {
      bedType: "Two Double Beds",
      maxOccupancy: "4 Guests",
      roomSize: "550 sq ft",
    },

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