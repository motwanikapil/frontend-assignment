import About from "./About";
import Features from "./Features";

export default function AboutLayout() {
  return (
    <main className="flex flex-col w-full h-full bg-[#FFFCFD]">
        <About />
        <Features />
    </main>
  )
}