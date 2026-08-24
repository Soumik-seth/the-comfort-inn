import RoomsHero from "../components/RoomsHero";
import RoomCard from "../components/RoomCard";
import prisma from "@/lib/prisma";

export default async function RoomsPage() {
  const rooms = await prisma.room.findMany({
    orderBy: {
      id: "asc",
    },
  });

  return (
    <main className="min-h-screen bg-black">

      <RoomsHero />

      <section className="px-6 pb-24">

        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-2">

          {rooms.map((room) => (
            <RoomCard
              key={room.id}
              room={{
                id: room.id,
                title: room.title,
                description: room.description,
                image: room.image,
                availability: room.availability,

                specifications: {
                  bedType: room.bedType,
                  maxOccupancy: room.maxOccupancy,
                  roomSize: room.roomSize,
                },

                roomFeatures: room.roomFeatures,
                additionalFeatures: room.additionalFeatures,
                photos: room.photos,
              }}
            />
          ))}

        </div>

      </section>

    </main>
  );
}