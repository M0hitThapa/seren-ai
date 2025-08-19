import { Hero } from "@/components/hero";
import Image from "next/image";

export default function Home() {
  return (
   <div className="flex flex-col min-h-screen overflow-hidden  ">
    
    
    <Hero />
    <div className="relative w-full flex flex-col items-center justify-center  ">
      <Image src="/icon1.png" alt="aiimage" height={450} width={450} />
     
      {/* <Image height={800} width={800} src="/hero.webp" alt="hero" className="h-[600px] w-[1000px] mx-auto rounded-md shadow-[0px_5px_15px_rgba(0,0,0,0.35)] object-cover object-left"/> */}
     </div>
   </div>
  );
}
