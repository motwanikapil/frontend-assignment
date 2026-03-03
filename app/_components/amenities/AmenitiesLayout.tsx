import Image from "next/image";
import { Instrument_Sans, Playfair_Display } from "next/font/google";

import aromaticGarden from "@/public/amenities/aromatic_garden.png";
import cricketNets from "@/public/amenities/cricket_nets.jpg";
import gym from "@/public/amenities/gym.png";
import joggingTrack from "@/public/amenities/jogging_track.png";
import landscapedGarden from "@/public/amenities/landscaped_garden.png";
import largeBalcony from "@/public/amenities/large_balcony.jpg";
import modernBedroom from "@/public/amenities/modern_bedroom.png";
import multipurposeCourt from "@/public/amenities/multipurpose_court.jpg";
import olympicPool from "@/public/amenities/olympic_pool.jpg";
import partyLawn from "@/public/amenities/party_lawn.jpg";
import spaciousKitchen from "@/public/amenities/spacious_kitchen.jpg";
import ventilatedFlats from "@/public/amenities/ventilated_flats.jpg";

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-instrument-sans",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const amenities = [
  {
    title: "Aromatic Garden",
    image: aromaticGarden,
    span: "row-span-2",
  },
  {
    title: "Spacious Kitchen",
    image: spaciousKitchen,
  },
  {
    title: "Party Lawn",
    image: partyLawn,
  },
  {
    title: "Multipurpose Court",
    image: multipurposeCourt,
    span: "row-span-2",
  },
  {
    title: "Modern Bedroom",
    image: modernBedroom,
  },
  {
    title: "Gym",
    image: gym,
  },
  {
    title: "Cricket Nets",
    image: cricketNets,
  },
  {
    title: "1/2 Olympic Size Pool",
    image: olympicPool,
    span: "row-span-2",
  },
  {
    title: "Landscaped Gardens",
    image: landscapedGarden,
  },
  {
    title: "Ventilated Flats",
    image: ventilatedFlats,
  },
  {
    title: "Large Balcony",
    image: largeBalcony,
  },
  {
    title: "Jogging Track",
    image: joggingTrack,
  },
];

export default function AmenitiesLayout() {
  return (
    <main className="bg-white">
      <div className="min-h-screen p-6 max-w-300 mx-auto">
        <div className="max-w-7xl mx-auto">
          <div className="gap-3">
            <h1
              className={`text-[56px] leading-[1.2] font-medium ${playfair.className} text-center`}
            >
              <span className="text-red-500">Amenities </span>
              <span className="text-[#4B4D4C]">for Every Age, Every Mood</span>
            </h1>
            <span
              className={`uppercase ${instrumentSans.className} text-[18px] leading-[1.45] font-medium tracking-[0.16em] italic text-center`}
            >
              home of positive energy
            </span>
            <section>
              <Image
                src="/divider.png"
                width="476"
                height="31"
                alt="divider image"
                className="mx-auto pb-3"
              />
            </section>
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
                  <Image
                    src={item.image}
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
      </div>
    </main>
  );
}
