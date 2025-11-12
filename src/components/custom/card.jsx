export default function Card() {
  return (
    <div>
      <img src="image-placeholder.png" className="rounded-xl pb-3"></img>
      <div className="text-gray-600 text-lg pb-2">Human Resource</div>
      <div className="font-bold text-blue-950 text-xl pb-2">Lorem ipsum dolor sit amet, consecte adipiscing elit.</div>
      <div className="flex justify-between  text-blue-300 font-bold">
        <div className="flex items-center gap-2"><div className="w-4 h-4 bg-blue-300 rounded-4xl inline-flex"></div>Author</div>
        <div>14 Februari 2025</div>
      </div>
    </div>
  );
}
