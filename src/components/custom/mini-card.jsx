import Link from "next/link";

export default function MiniCard({ news }) {
  const url = "http://localhost:3000/news";

  return (
    <div className="flex flex-row w-full ">
      <div className="relative shrink-0">
        <div className="absolute w-full rounded-lg bg-primary h-30 z-10 mask-r-from-0% mask-r-to-80%"></div>
        <img src={news.thumbnail?.image_path ?? "/image-placeholder-2.jpg"} className="rounded-lg h-30 w-full mb-3 z-0 object-cover"></img>
      </div>
      <div className="ml-6 max-w-100">
        <div className="text-gray-600 text-lg pb-1">Human Resource</div>
        <Link href={`${url}/${news.news_slug}`} className="font-bold text-blue-950 text-xl pb-1">{news.news_title}</Link>
        <div className="text-blue-300 font-bold">
          {new Date(news.created_at).toLocaleDateString("id-ID", {
            day: "2-digit",
            month: "long",
            year: "numeric",
          })}
        </div>
      </div>
    </div>
  );
}
