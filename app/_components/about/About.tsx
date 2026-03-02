import { Playfair_Display, Instrument_Sans } from "next/font/google"
import Image from "next/image"
import dividerAbout from '@/public/dividerAbout.png'
import aboutFrame from '@/public/about_frame.png'

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
})

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-instrument-sans",
})

export default function About() {
  return (
    <main className="flex items-center justify-between max-w-300 mx-auto pt-25">
    <section className="flex flex-col">
      <section className="flex flex-col">
      <h1 className={`text-[56px] leading-[1.2] font-medium ${playfair.className} text-center`} ><span className="text-red-500 mr-4">About</span><span className="text-black">Mahindra Blossom</span></h1>
      <h4 className="text-center italic uppercase text-black tracking-wider">Premium Apartments in Whitefield, Bengaluru</h4>
      <Image src={dividerAbout} width={800} height={52} alt="divider about" />
    </section>
    <section className="text-black flex flex-col max-w-200 w-full gap-7">
      <article>
        <strong>Mahindra Blossom</strong> is a thoughtfully designed <strong>premium residential apartment project in Whitefield, Bangalore,</strong> developed by <strong>Mahindra Lifespaces</strong>, part of the trusted Mahindra Group. Known for quality construction, transparency, and sustainable development, Mahindra Lifespaces has delivered landmark residential communities across India.
      </article>
      <article>
        Strategically located <strong>near Hope Farm Junction, Whitefield,</strong> Mahindra Blossom offers <strong>2 BHK, 3 BHK, and 4 BHK luxury apartments</strong> crafted for modern families, professionals, and long-term investors. The project blends <strong>urban convenience with green living</strong>, creating a calm, secure, and future-ready residential environment.
      </article>
      <article>
        With excellent connectivity to <strong>ITPL, major tech parks, schools, hospitals, shopping hubs, and fully operational metro station</strong> , Mahindra Blossom ensures everyday comfort while offering strong potential for <strong>property appreciation and rental demand</strong>.
      </article>
      <article>
        <strong>Mahindra Blossom is not just a home — it’s a lifestyle upgrade backed by the reliability of a trusted developer.</strong>
      </article>
    </section>
    </section>
    <section>

    <div className="relative w-80 h-60">
      <Image src={aboutFrame} width={500} height={500} alt="about image" />

    </div>
    </section>
    </main>
  )
}