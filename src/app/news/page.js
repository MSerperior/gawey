"use client"

import Card from "@/components/custom/card";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { FaChevronDown } from "react-icons/fa6";

import { Suspense, useEffect, useState } from "react";

export default function News() {
  const [news, setNews] = useState([]);
  const [meta, setMeta] = useState({});
  const [page, setPage] = useState(1)

  const token = process.env.TOKEN;
  const API_URL = "http://localhost:3000/api";

  useEffect(() => {
    fetchData();
  }, [page]);

  async function fetchData() {
    try {
      const res = await fetch(`${API_URL}/news?limit=3&page=${page}`, {
        headers: {
          "Authorization": `Bearer ${token}`,
          "Content-Type": "application/json"
        },
        cache: "no-store"
      });

      let data = await res.json();

      setNews(data.data);
      setMeta({
        current_page: data.meta.current_page,
        last_page: data.meta.last_page,
        total: data.meta.total,
      });
    } catch (error) {
      console.log("error")
    }
  }

  return (
    <div className="flex flex-col px-32 pt-12">
      <div className="w-full rounded-lg bg-gray-300 flex flex-col items-center py-12">
        <div className="text-4xl font-bold">
          Rekomendasi buat kamu
        </div>
        <div className="text-lg font-bold pt-4"><span className="text-primary">{meta.total}</span> Artikel berhasil ditemukan</div>
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
        <Suspense fallback={"Loading..."}>
          {news?.map((n, index) => (
            <Card key={index} news={n} />
          ))}
        </Suspense>
      </div>
      <div className="flex justify-between items-center pb-12">
        <div></div>
        <div className="flex flex-row gap-4">
          <button onClick={() => setPage(page - 1)} className="rounded-lg border border-primary col-start-2 px-2 py-2 my-4 w-fit bg-white text-primary flex items-center hover:cursor-pointer" hidden={page === 1}><ChevronRight size={36} className="rotate-180" /></button>
          <button onClick={() => setPage(page + 1)} className="rounded-lg col-start-2 px-4 py-2 my-4 w-fit bg-primary text-white flex items-center hover:cursor-pointer" hidden={page === meta.last_page}>Selanjutnya<ChevronRight size={36} /></button>
        </div>
        <div className="flex items-center gap-4 justify-center">
          <select value={page} className="rounded-lg border border-blue-300 text-blue-300 bg-gray-100 p-2" onChange={(e) => setPage(Number(e.target.value))}>
            {Array.from({ length: meta.last_page || 1 }).map((_, index) => (
              <option key={index} value={index + 1} >{index + 1}</option>
            ))}
          </select>
          of 20 pages
        </div>
      </div>

    </div>
  );
}