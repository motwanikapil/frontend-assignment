import AboutLayout from "./_components/about/AboutLayout";
import AmenitiesLayout from "./_components/amenities/AmenitiesLayout";
import Hero from "./_components/Hero";
import Prices from "./_components/prices/Prices";

export default function Home() {
  return (
    <main className="min-w-screen min-h-screen">
      <Hero />
      <AboutLayout />
      <Prices />
      <AmenitiesLayout />
    </main>
  );
}
