"use client"

import MiniCard from "@/components/custom/mini-card";
import { SiFacebook, SiLine, SiX } from "@icons-pack/react-simple-icons";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";

import { Suspense, useEffect, useState } from "react";

export default function NewsDetail() {
  const [news, setNews] = useState([]);
  const [currentNews, setCurrentNews] = useState({});

  const params = useParams();
  const { slug } = params

  const token = process.env.TOKEN;
  const API_URL = "http://localhost:3000/api";

  useEffect(() => {
    fetchData();
    fetchCurrentNews();
  }, []);

  async function fetchData() {
    try {
      const res = await fetch(`${API_URL}/news?limit=6`, {
        headers: {
          "Authorization": `Bearer ${token}`,
          "Content-Type": "application/json"
        },
        cache: "no-store"
      });

      let data = await res.json();

      setNews(data.data);
    } catch (error) {
      console.log("error")
    }
  }

  async function fetchCurrentNews() {
    try {
      const res = await fetch(`${API_URL}/news/${slug}`, {
        headers: {
          "Authorization": `Bearer ${token}`,
          "Content-Type": "application/json"
        },
        cache: "no-store"
      });
      let data = await res.json();
      setCurrentNews(data.data);

    } catch (error) {
      console.log("error")
    }
  }

  return (
    <div>
      <div className="px-24 xl:px-70">
        <div className="pt-20">Home / Artikel / Human Resource</div>
        <div className="pt-15 text-5xl text-blue-950 max-w-2xl">{currentNews.news_title}</div>
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
          <img src="/image-placeholder.png" className="rounded-xl w-full mt-8 mb-4 z-0 object-cover"></img>
          <div dangerouslySetInnerHTML={{ __html: currentNews.news_content }}
            className="prose max-w-none 
            prose-p:text-lg prose-p:pb-4 prose-p:text-blue-950
            prose-h2:text-3xl prose-h2:font-bold prose-h2:pb-7 prose-h2:text-blue-950
            prose-h3:text-2xl prose-h3:font-bold prose-h3:pb-5 prose-h3:text-blue-950
            ">
          </div>
          <div className="font-bold text-xl px-6 border-blue-300 border-l-5 my-4">
            <span className="text-gray-600">Baca juga : </span>
            <span className="text-primary">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non sem dignissim.</span>
          </div>
        </div>
        <div id="tags" className="flex items-center gap-4">
          <div className="text-gray-600">Tags</div>
          <div className="flex items-center gap-2">
            <div className="px-2 border-2 text-blue-300 border-blue-300 rounded-lg">Human Resrouce</div>
            <div className="px-2 border-2 text-blue-300 border-blue-300 rounded-lg">Tech</div>
            <div className="px-2 border-2 text-blue-300 border-blue-300 rounded-lg">Business</div>
          </div>
        </div>
        <div id="navigation" className="flex justify-between pt-12 text-blue-300">
          <Link href={"/"} className="flex"><ChevronLeft />Artikel sebelumnya</Link>
          <Link href={"/"} className="flex">Artikel selanjutnya <ChevronRight /></Link>
        </div>
      </div>

      <div id="terbaru" className="flex flex-col items-start px-32 bg-gray-100 mt-12 pb-12">
        <div className="text-3xl md:text-4xl text-blue-950 font-bold pt-12">Related Article</div>
        <div className="grid lg:grid-cols-2 flex-wrap gap-6 pt-9">
          <Suspense fallback={"Loading..."}>
            {news?.map((n, index) => (
              <MiniCard key={index} news={n} />
            ))}
          </Suspense>
        </div>
      </div>
    </div>

  );
}