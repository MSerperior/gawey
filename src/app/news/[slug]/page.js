import MiniCard from "@/components/custom/mini-card";
import { SiFacebook, SiLine, SiX } from "@icons-pack/react-simple-icons";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

export default function NewsDetail() {
  return (
    <div>
      <div className="px-24 xl:px-70">
        <div className="pt-20">Home / Artikel / Human Resource</div>
        <div className="pt-15 text-5xl text-blue-950 max-w-2xl">Spesial Valentine: Beli 1 Bulan Gratis 1 Bulan, Paling Hemat</div>
        <div id="user-created-at" className="flex justify-between pt-4">
          <div className="flex gap-4">
            <div>
              <img className="w-15 h-15 rounded-4xl object-cover" src="/user-pic.jpg" alt="U"></img>
            </div>
            <div className="font-bold">
              <div className="text-gray-600">Alexandre Christine</div>
              <div className="text-blue-300">14 Februari 2025</div>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="inline-flex text-gray-600">Bagikan Artikel Ini</div>
            <div className="flex items-center gap-4">
              <div className="bg-gray-200 text-gray-600 p-2 w-fit rounded-4xl">
                <SiLine />
              </div>
              <div className="bg-gray-200 text-gray-600 p-2 w-fit rounded-4xl">
                <SiFacebook />
              </div>
              <div className="bg-gray-200 text-gray-600 p-2 w-fit rounded-4xl">
                <SiX />
              </div>
              <div className="bg-gray-200 text-gray-600 p-2 w-fit rounded-4xl">
                <SiLine />
              </div>
              <div className="bg-gray-200 text-gray-600 p-2 w-fit rounded-4xl">
                <SiLine />
              </div>
            </div>
          </div>
        </div>
        <div id="content">
          <img src="/image-placeholder.png" className="rounded-xl w-full mt-8 z-0 object-cover"></img>
          <div className="pt-10 text-blue-950">
            <div className="text-3xl font-bold pb-7">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
            <div className="text-2xl font-bold pb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
            <div className="text-lg pb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non sem dignissim, malesuada purus euismod, scelerisque enim. Curabitur blandit facilisis velit nec fringilla. Curabitur viverra mattis erat, at bibendum quam tincidunt ut. Nam porta erat ut enim gravida, eu tincidunt nunc dignissim. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed venenatis, lorem eu ornare blandit, eros arcu finibus nisi, at lobortis nisl est tincidunt odio.</div>
            <div className="text-lg pb-4">Sed vestibulum mauris eu odio ullamcorper, eu porttitor lectus faucibus. Proin in ornare sem, a sagittis ante. Cras molestie finibus dui vel sollicitudin. Nulla non augue sed elit semper varius egestas in quam. Aliquam interdum erat in rutrum gravida. Curabitur laoreet, massa in consequat commodo, libero sapien ultrices leo, vitae eleifend diam lectus nec justo.</div>
          </div>
          <div className="font-bold text-xl px-6 border-blue-300 border-l-5 mt-4">
            <span className="text-gray-600">Baca juga : </span>
            <span className="text-primary">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non sem dignissim.</span>
          </div>
          <div className="pt-10 text-blue-950">
            <div className="text-3xl font-bold pb-7">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
            <div className="text-2xl font-bold pb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
            <div className="text-lg pb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non sem dignissim, malesuada purus euismod, scelerisque enim. Curabitur blandit facilisis velit nec fringilla. Curabitur viverra mattis erat, at bibendum quam tincidunt ut. Nam porta erat ut enim gravida, eu tincidunt nunc dignissim. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed venenatis, lorem eu ornare blandit, eros arcu finibus nisi, at lobortis nisl est tincidunt odio.</div>
            <div className="text-lg pb-4">Sed vestibulum mauris eu odio ullamcorper, eu porttitor lectus faucibus. Proin in ornare sem, a sagittis ante. Cras molestie finibus dui vel sollicitudin. Nulla non augue sed elit semper varius egestas in quam. Aliquam interdum erat in rutrum gravida. Curabitur laoreet, massa in consequat commodo, libero sapien ultrices leo, vitae eleifend diam lectus nec justo.</div>
          </div>
        </div>
        <div id="tags" className="flex items-center gap-4">
          <div className="text-gray-600">Tags</div>
          <div className="px-2 border-2 text-blue-300 border-blue-300 rounded-lg">Human Resrouce</div>
        </div>
        <div id="navigation" className="flex justify-between pt-12 text-blue-300">
          <Link href={"/"} className="flex"><ChevronLeft />Artikel sebelumnya</Link>
          <Link href={"/"} className="flex">Artikel selanjutnya <ChevronRight /></Link>
        </div>
      </div>

      <div id="terbaru" className="flex flex-col items-start px-32 bg-gray-100 mt-12 pb-12">
        <div className="text-3xl md:text-4xl text-blue-950 font-bold pt-12">Related Article</div>
        <div className="grid lg:grid-cols-2 flex-wrap gap-6 pt-9">
          <MiniCard />
          <MiniCard />
          <MiniCard />
          <MiniCard />
          <MiniCard />
          <MiniCard />
        </div>
      </div>
    </div>

  );
}