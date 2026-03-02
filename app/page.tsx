import AboutLayout from "./_components/about/AboutLayout";
import Hero from "./_components/Hero";

export default function Home() {
  return (
    <main className="min-w-screen min-h-screen">
      <Hero />
      <AboutLayout />
    </main>
  );
}
