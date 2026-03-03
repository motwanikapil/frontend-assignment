import Image from "next/image";
import soldOutImage from "@/public/sold_out.png";

export default function Price({
  bhk,
  soldOut,
  minSqrFt,
  maxSqrFt,
  price,
}: {
  bhk: number;
  soldOut: boolean;
  minSqrFt?: number;
  maxSqrFt?: number;
  price?: string;
}) {
  return (
    <main className="max-w-100.75 w-full h-72 rounded-3xl bg-white text-[#4B4D4C] py-2.5 overflow-hidden">
      <h3 className="text-center font-bold text-[24px] mb-2">{bhk} BHK</h3>
      {soldOut ? (
        <section className="flex items-center justify-center">
          <Image src={soldOutImage} alt="sold out" width={305} height={229} />
        </section>
      ) : (
        <section className="flex flex-col gap-3 items-center justify-between max-h-58 h-full pb-10">
          <article className="flex flex-col gap-2">
            <article className="font-semibold text-[18px] text-center">
              {minSqrFt}-{maxSqrFt} sq.ft.
            </article>
            <article>
              <span className="text-[24px] font-bold">{price}</span>
              <span className="italic font-medium text-[18px]"> Onwards</span>
            </article>
          </article>
          <article>
            <button className="w-60 h-12 border-2 rounded-full hover:bg-[#4B4D4C] hover:text-white transition-all cursor-pointer">
              Get Quote
            </button>
          </article>
        </section>
      )}
    </main>
  );
}
