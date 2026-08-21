import RoomsHero from "../components/RoomsHero";
import RoomCard from "../components/RoomCard";
import { rooms } from "@/data/roomsData";

export default function RoomsPage() {
  return (
    <main className="min-h-screen bg-black">

      <RoomsHero />

      <section className="px-6 pb-24">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-2">

          {rooms.map((room) => (
            <RoomCard
              key={room.id}
              room={room}
            />
          ))}

        </div>
      </section>

    </main>
  );
}