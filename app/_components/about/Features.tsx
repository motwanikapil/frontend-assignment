import { Playfair_Display, Instrument_Sans } from "next/font/google"
import Image from "next/image"
import dividerAbout from '@/public/dividerAbout.png'
import features from '@/public/features.png'

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
})

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-instrument-sans",
})

export default function Features() {
  return (
    <main className="flex items-start justify-between max-w-300 mx-auto py-25 gap-10 text-[#4B4D4C]">
    <div className="relative w-80 h-60 mt-10">
      <Image src={features} width={400} height={728} alt="about image" />
    </div>
    <section className="flex flex-col">
      <section className="flex flex-col">
      <h1 className={`text-[56px] leading-[1.2] font-medium ${playfair.className} text-center`} ><span>Features & </span><span className="text-red-500 mr-4">Highlights</span></h1>
      <h4 className="text-center italic uppercase tracking-wider">Premium Apartments in Whitefield, Bengaluru</h4>
      <Image src={dividerAbout} width={800} height={52} alt="divider about" />
    </section>
    <section className={`flex flex-col max-w-200 w-full gap-7 ${instrumentSans.className}`}>
      <div>
            <ul className="flex items-start flex-col gap-2">
           <section className="flex flex-col">
             <li className={`text-[16px] uppercase leading-[1.45] font-medium tracking-[0.08em] text-center flex items-center gap-3`}><Image src="/bullet.png" width="24" height="24" alt="bullet" className="shrink-0" />PRIME AND WELL CONNECTED LOCATION</li>
            <p className="leading-5.5">Located at Hope Farm Junction, Whitefield, Mahindra Blossom places you minutes away from ITPL, tech parks, top schools, hospitals, malls, and the fully operational metro — ensuring effortless daily travel and high future value.</p>
           </section>
            <section className="flex flex-col">
              <li className={`text-[16px] uppercase leading-[1.45] font-medium tracking-[0.08em] text-center flex items-center gap-3`}><Image src="/bullet.png" width="24" height="24" alt="bullet" className="shrink-0" />Homes Designed for Space, Light & Comfort</li>
            <p className="leading-5.5">Choose from 2, 3 & 4 BHK premium apartments with smart, vastu compliant layouts, abundant natural light, and excellent ventilation — crafted for modern families, work-from-home needs, and everyday comfort.</p>
            </section>
            <section className="flex flex-col">
              <li className={`text-[16px] uppercase leading-[1.45] font-medium tracking-[0.08em] text-center flex items-center gap-3`}><Image src="/bullet.png" width="24" height="24" alt="bullet" className="shrink-0" />Wake Up to Green, Calm Living</li>
            <p className="leading-5.5">Surrounded by landscaped open spaces and greenery, Mahindra Blossom offers 4 acres of landscaped garden with bougainvillea canopies, aromatic and native plantations and butterfly park </p>
            </section>
            <section className="flex flex-col">
              <li className={`text-[16px] uppercase leading-[1.45] font-medium tracking-[0.08em] text-center flex items-center gap-3`}><Image src="/bullet.png" width="24" height="24" alt="bullet" className="shrink-0" />Resort-Style Amenities at Your Doorstep</li>
            <p className="leading-5.5">Offering 97,000 sq. ft. of amenities and clubhouse
spaces, including Bougainvillea canopies, half-Olympic
size swimming pool, 25+ seater business center, cricket nets, 2 running tracks, 2 indoor badminton courts and much more.</p>
            </section>
            <section className="flex flex-col">
              <li className={`text-[16px] uppercase leading-[1.45] font-medium tracking-[0.08em] text-center flex items-center gap-3`}><Image src="/bullet.png" width="24" height="24" alt="bullet" className="shrink-0" />SUSTAINABLE LIVING</li>
            <p className="leading-5.5">Offering 97,000 sq. ft. of amenities and clubhouse
spaces, including Bougainvillea canopies, half-Olympic
size swimming pool, 25+ seater business center, cricket nets, 2 running tracks, 2 indoor badminton courts and much more.</p>
            </section>
<section className="flex flex-col">
  <li className={`text-[16px] uppercase leading-[1.45] font-medium tracking-[0.08em] text-center flex items-center gap-3`}><Image src="/bullet.png" width="24" height="24" alt="bullet" className="shrink-0" />75+ Years of Mahindra Trust</li>
<p className="leading-5.5">Developed by Mahindra Lifespaces, part of the Mahindra Group, this project offers peace of mind through quality construction, transparency, & a proven track record of timely delivery.</p>
</section>
          </ul>
          </div>
    </section>
    </section>
    <section>
    </section>
    </main>
  )
}