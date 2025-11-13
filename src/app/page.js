import Banner from "@/components/custom/banner";
import Card from "@/components/custom/card";
import MiniCard from "@/components/custom/mini-card";
import { CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Link from "next/link";
import { FaMagnifyingGlass } from "react-icons/fa6";

export default function Home() {
  return (
    <div>

      <div id="banner" className="bg-blue-100 flex justify-center px-20 py-12">
        <Carousel className="w-full max-w-5xl">
          <CarouselContent>
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index}>
                <Banner />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>

      <div id="search" className="flex flex-col md:flex-row items-center gap-4 md:gap-10 py-4 w-full text-gray-600 bg-white px-20 text-nowrap">
        <div className="flex items-center gap-10">
          <Link href={"/"}>Updates</Link>
          <Link href={"/"}>Insight</Link>
          <Link href={"/"}>HR</Link>
          <Link href={"/"}>Tech</Link>
          <Link href={"/"}>Business & Financial</Link>
        </div>
        <div className="relative flex items-center border border-gray-300 rounded-lg w-full">
          <FaMagnifyingGlass size={20} className="absolute left-4" />
          <input
            type='text'
            placeholder="cari artikel disini"
            className="pl-10 w-full h-10 focus:outline-none"
          />
        </div>
      </div>

      <div id="rekomendasi" className="flex flex-col items-center bg-gray-100 px-20">
        <div className="text-3xl md:text-4xl text-blue-950 font-bold pt-12">Rekomendasi buat kamu</div>
        <div className="grid md:grid-cols-3 pt-9 gap-6">
          <Card />
          <Card />
          <Card />
        </div>
        <Link className="rounded-lg px-8 py-4 my-4 bg-primary text-white" href={"/"}>Lihat Semua</Link>
      </div>

      <div id="terbaru" className="flex flex-col items-start px-20">
        <div className="text-3xl md:text-4xl text-blue-950 font-bold pt-12">Terbaru</div>
        <div className="grid lg:grid-cols-2 flex-wrap gap-6 pt-9">
          <MiniCard />
          <MiniCard />
          <MiniCard />
          <MiniCard />
          <MiniCard />
          <MiniCard />
        </div>

        <Link className="rounded-lg px-8 py-4 my-4 bg-primary text-white self-center" href={"/"}>Lihat Semua</Link>
      </div>
    </div>
  );
}
