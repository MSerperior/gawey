export default function Card() {
  return (
    <div className="py-4">
      <div className="relative">
        <div className="absolute w-full rounded-lg bg-primary h-56 z-10 mask-r-from-0% mask-r-to-80%"></div>
        <img src="image-placeholder.png" className="rounded-xl h-56 w-full mb-3 z-0 object-cover"></img>
      </div>
      <div className="text-gray-600 text-lg pb-2">Human Resource</div>
      <div className="font-bold text-blue-950 text-xl pb-2">Lorem ipsum dolor sit amet, consecte adipiscing elit.</div>
      <div className="flex justify-between  text-blue-300 font-bold">
        <div className="flex items-center gap-2"><div className="w-4 h-4 bg-blue-300 rounded-4xl inline-flex"></div>Author</div>
        <div>14 Februari 2025</div>
      </div>
    </div>
  );
}
