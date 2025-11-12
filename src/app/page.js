import Card from "@/components/custom/card";
import MiniCard from "@/components/custom/mini-card";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div id="rekomendasi" className="flex flex-col items-center px-20">
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
