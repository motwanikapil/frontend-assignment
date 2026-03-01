import HeroLeft from "./HeroLeft";
import HeroRight from "./HeroRight";
import Navbar from "./Navbar";

export default function Hero() {
  return (
    <main className="relative bg-[url('/hero-bg.png')] bg-cover bg-center z-10 flex flex-col items-center w-full h-full">
      {/* <div className="absolute inset-0 bg-black opacity-30 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops) from-transparent via-transparent to-black/90]"></div> */}
      <div className="relative z-10 w-full">
        <Navbar />
      </div>
      <section className="max-w-[1200px] text-center flex items-center justify-between w-full">
        <HeroLeft />
        <HeroRight />
      </section>
    </main>
  )
}
