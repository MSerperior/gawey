export default function MiniCard() {
  return (
    <div className="flex flex-row gap-6">
      <div className="relative">
        <div className="absolute w-full rounded-lg bg-primary h-30 z-10 mask-r-from-0% mask-r-to-100%"></div>
        <img src="image-placeholder-2.jpg" className="rounded-xl w-48 mb-3 h-30 object-cover"></img>
      </div>
      <div>
        <div className="text-gray-600 text-lg pb-1">Human Resource</div>
        <div className="font-bold text-blue-950 text-xl">Lorem ipsum dolor sit amet, consecte adipiscing elit.</div>
        <div className="text-blue-300 font-bold">
          14 Februari 2025
        </div>
      </div>
    </div>
  );
}
