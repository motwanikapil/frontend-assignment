import { Instrument_Sans, Playfair_Display } from "next/font/google";
import Image from "next/image";
import Price from "./Price";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-instrument-sans",
});

const prices = [
  {
    bhk: 2,
    soldOut: true,
  },
  {
    bhk: 3,
    minSqrFt: 1800,
    maxSqrFt: 1850,
    price: "₹2.18cr",
    soldOut: false,
  },
  {
    bhk: 4,
    minSqrFt: 2200,
    maxSqrFt: 2350,
    price: "₹2.88cr",
    soldOut: false,
  },
];

export default function Prices() {
  return (
    <main className="bg-[#ED3237]">
      <section className="flex flex-col justify-center items-center max-w-300 mx-auto py-25 gap-3">
        <h2 className={`${playfair.className} text-[56px]`}>
          Unlock the Door to Affordable Luxury
        </h2>
        <p
          className={`${instrumentSans.className} uppercase italic text-[18px] font-medium`}
        >
          Explore apartment options and pricing details tailored to your needs
        </p>
        <Image src="/divider.png" width="476" height="31" alt="divider image" />
        <section className="w-full flex justify-center gap-4">
          {prices.map((price, idx) => (
            <Price {...price} key={idx} />
          ))}
        </section>
      </section>
    </main>
  );
}
