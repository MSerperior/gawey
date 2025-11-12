export default function MiniCard() {
  return (
    <div className="flex flex-row gap-6">
      <img src="image-placeholder.png" className="rounded-xl pb-3 h-30"></img>
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
