import aromaticGarden from "@/public/amenities/aromatic_garden.png";
import spaciousKitchen from "@/public/amenities/spacious_kitchen.jpg";
import cricketNets from "@/public/amenities/cricket_nets.jpg";
import gym from "@/public/amenities/gym.png";
import joggingTrack from "@/public/amenities/jogging_track.png";
import landscapedGarden from "@/public/amenities/landscaped_garden.png";
import largeBalcony from "@/public/amenities/large_balcony.jpg";
import modernBedroom from "@/public/amenities/modern_bedroom.png";
import multipurposeCourt from "@/public/amenities/multipurpose_court.jpg";
import olympicPool from "@/public/amenities/olympic_pool.jpg";

const amenities = [
  {
    title: "Aromatic Garden",
    image: aromaticGarden,
    span: "row-span-2",
  },
  {
    title: "Spacious Kitchen",
    image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f",
  },
  {
    title: "Party Lawn",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
  },
  {
    title: "Multipurpose Court",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b",
    span: "row-span-2",
  },
  {
    title: "Modern Bedroom",
    image: "https://images.unsplash.com/photo-1505693314120-0d443867891c",
  },
  {
    title: "Gym",
    image: "https://images.unsplash.com/photo-1558611848-73f7eb4001ab",
  },
  {
    title: "Cricket Nets",
    image: "https://images.unsplash.com/photo-1593341646782-e0b495cff86d",
  },
  {
    title: "1/2 Olympic Size Pool",
    image: "https://images.unsplash.com/photo-1501117716987-c8e1ecb210f9",
    span: "row-span-2",
  },
  {
    title: "Landscaped Gardens",
    image: "https://images.unsplash.com/photo-1493244040629-496f6d136cc3",
  },
  {
    title: "Ventilated Flats",
    image: "https://images.unsplash.com/photo-1484154218962-a197022b5858",
  },
  {
    title: "Large Balcony",
    image: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae",
  },
  {
    title: "Jogging Track",
    image: "https://images.unsplash.com/photo-1492724441997-5dc865305da7",
  },
];

export default function AmenitiesLayout() {
  return (
    <div className="bg-neutral-900 min-h-screen p-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-white text-3xl font-semibold mb-8">Amenities</h2>

        <div
          className="grid 
                        grid-cols-1 
                        sm:grid-cols-2 
                        lg:grid-cols-3 
                        gap-6 
                        auto-rows-[220px]"
        >
          {amenities.map((item, index) => (
            <div
              key={index}
              className={`relative group rounded-2xl overflow-hidden shadow-lg 
                         hover:shadow-2xl transition-all duration-500 
                         hover:-translate-y-1 ${item.span || ""}`}
            >
              <img
                src={`${item.image}?auto=format&fit=crop&w=800&q=80`}
                alt={item.title}
                className="w-full h-full object-cover 
                           transition-transform duration-700 
                           group-hover:scale-110"
              />

              <div
                className="absolute bottom-4 left-4 
                              bg-black/60 backdrop-blur-md 
                              text-white text-sm px-4 py-1.5 
                              rounded-full"
              >
                {item.title}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
