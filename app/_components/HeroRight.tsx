import Image from "next/image";
import heroImage from '@/public/heroRight.gif';

export default function HeroRight() {
  return (
    <main className="flex justify-end w-full">
      <Image src={heroImage} alt="
      door" className="rounded-t-full" height={600} width={420} unoptimized />
    </main>
  )
}