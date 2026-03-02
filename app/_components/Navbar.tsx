import { PhoneForwarded } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  return (
    <main className="flex items-center justify-between max-w-300 py-3 z-50 w-full mx-auto mb-10">
        <Image src='/navbar-logo.png' width={350} height={47} alt="navbar-logo" />
        {/* mobile number */}
        <button className="flex items-center justify-center gap-2 bg-red-500 px-4 py-2 rounded-full text-white w-60 h-12">
            <PhoneForwarded color="white" size={20} />
            <span>+91 9901717339</span>
        </button>
    </main>
  )
}
