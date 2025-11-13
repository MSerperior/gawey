import Card from "@/components/custom/card";
import { FaChevronDown } from "react-icons/fa6";

export default function News() {
  return (
    <div className="flex flex-col px-32 pt-12">
      <div className="w-full rounded-lg bg-gray-300 flex flex-col items-center py-12">
        <div className="text-4xl font-bold">
          Rekomendasi buat kamu
        </div>
        <div className="text-lg font-bold pt-4"><span className="text-primary">200</span> Artikel berhasil ditemukan</div>
      </div>
      <div className="flex gap-4 self-end items-center py-9">
        <label className="text-gray-400">
          Urutkan
        </label>
        <select className="rounded-lg border border-blue-300 text-blue-300 bg-gray-100 p-3">
          <option>Urutkan Artikel</option>
        </select>
      </div>
      <div id="articles" className="grid grid-cols-3 gap-6">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}