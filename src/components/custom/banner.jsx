export default function Banner() {
  return (
    <div>
      <div className="absolute top-12 w-full text-white z-20 px-12">
        <div className="flex flex-col gap-2">
          <div className="text-2xl md:text-4xl font-bold">Gawey telah hadir!</div>
          <div className="text-2xl md:text-4xl font-bold">Aplikasi HRIS dalam 1 genggaman</div>
          <div className="font-bold">14 Februari 2025</div>
        </div>
        <div className="border border-white py-2 px-6 w-fit rounded-lg text-white mt-16">Baca Sekarang!</div>
      </div>
      <div className="absolute bg-primary rounded-lg w-full h-82 z-10 mask-r-from-0% mask-r-to-80%"></div>
      <img src="/image-placeholder.png" className="h-82 w-full object-none rounded-lg" />
    </div>
  );
}