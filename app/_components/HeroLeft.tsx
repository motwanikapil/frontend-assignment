import Image from "next/image"
import { Playfair_Display, Instrument_Sans } from "next/font/google"

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
})

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-instrument-sans",
})

export default function HeroLeft() {
	return <main className={`flex flex-col ${instrumentSans.variable} gap-10 backdrop-blur-sm bg-white/10 p-6 rounded-lg w-full`}>
		<div className="gap-4">
			<h1 className={`text-[56px] leading-[1.2] font-medium tracking-normal ${playfair.className}`} ><span className="text-red-500">Mahindra</span> Blossom</h1>
		<span className={`uppercase ${instrumentSans.className} text-[18px] leading-[1.45] font-medium tracking-[0.16em] italic text-center`}>home of positive energy</span>
		<Image src="/divider.png" width="476" height="31" alt="divider image" />
		<section className="flex flex-col gap-4">
			<h4 className={`${instrumentSans.className} max-w-86.25 w-full mx-auto`}>
			2, 3 & 4BHK premium homes in Hopefarm Jn., Whitefield, 
		</h4>
		<h3 className={`${instrumentSans.className} bg-[rgba(255,255,255,0.12)] h-12.75 w-61.5 -skew-x-12 text-[18px] leading-[1.45] tracking-[0.08em] text-center flex items-center justify-center mx-auto`}>
			<span className="block skew-x-12 font-bold items-center"> ₹1.88cr </span><span className="ms-2">Onwards</span>
		</h3>
		</section>
		</div>
		<div>
			<ul className="flex items-start flex-col gap-2">
			<li className={`${instrumentSans.className} text-[18px] leading-[1.45] font-medium tracking-[0.08em] text-center flex items-center gap-3`}><Image src="/bullet.png" width="24" height="24" alt="bullet" className="shrink-0" />8 Acres | 1 Towers | 6 Wings | 733 Units</li>
			<li className={`${instrumentSans.className} text-[18px] leading-[1.45] font-medium tracking-[0.08em] text-center flex items-center gap-3`}><Image src="/bullet.png" width="24" height="24" alt="bullet" className="shrink-0" />Make it yours at just 7.5% down payment</li>
			<li className={`${instrumentSans.className} text-[18px] leading-[1.45] font-medium tracking-[0.08em] text-center flex items-center gap-3`}><Image src="/bullet.png" width="24" height="24" alt="bullet" className="shrink-0" />Abutting Hopefarm metro station</li>
			<li className={`${instrumentSans.className} text-[18px] leading-[1.45] font-medium tracking-[0.08em] text-center flex items-center gap-3`}><Image src="/bullet.png" width="24" height="24" alt="bullet" className="shrink-0" />IGBC Gold rated green home</li>
			<li className={`${instrumentSans.className} text-[18px] leading-[1.45] font-medium tracking-[0.08em] text-center flex items-center gap-3`}><Image src="/bullet.png" width="24" height="24" alt="bullet" className="shrink-0" />75+ Years of Mahindra Trust</li>
		</ul>
		</div>
	</main>
}