import Hero from "@/components/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <main className=" relative flex justify-center items-center flex-col overflow-hidden mx-auto  ">
      <div className="w-full bg-black-100 h-screen">
        <Hero></Hero>
      </div>
    </main>
  );
}
