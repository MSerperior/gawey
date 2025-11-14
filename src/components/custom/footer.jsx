import { SiInstagram, SiLine, SiTiktok } from "@icons-pack/react-simple-icons";
import { CopyrightIcon, MailIcon, PhoneIcon } from "lucide-react";
import Link from "next/link";

export default function Footer() {
	return (
		<footer>
			<div className=" relative h-[600px] bg-linear-to-br from-primary via-primary via-10% to-purple-800 z-10">
				<div className="relative flex gap-20 mx-24 py-12 text-white z-50">
					<div className="w-[393px] flex flex-col justify-between h-[391px]">
						<div className="space-y-3">
							<img src="/gawey-white.svg" className="h-[60px]">
							</img>
							<p>
								Gawey by JDS memantau kinerja karyawan bermobilitas tinggi secara real-time dan memberikan berbagai fitur HRIS untuk memudahkan personalia perusahaan dengan pengolahan data absensi kehadiran, menyimpan data karyawan, mengatur jadwal kerja, hingga manajemen izin.
							</p>
						</div>
						<div className="w-[350px] space-y-5">
							<h3 className="tracking-wider text-md font-semibold">
								Solusi cerdas untuk absensi karyawan yang modern!
							</h3>
							<div className="flex gap-4">
								<Link href="#"><img src="/get-playstore.svg" className="h-[50px]"></img></Link>
								<Link href="#"><img src="/get-appstore.svg" className="h-[50px]"></img></Link>
							</div>
						</div>
					</div>
					<div className="flex pt-12 gap-20">
						<div className="w-[250px] space-y-5">
							<h3 className="font-semibold text-md tracking-widest"> Hubungi Kami</h3>
							<p className="tracking-wide">
								Komplek Ruko Mega Grosir Cempaka Mas, Blk. A No.29, Daerah Khusus Ibukota Jakarta
							</p>
							<div className="flex gap-2"> <PhoneIcon /> <span>Telp :  021 - 50987388</span> </div>
							<div className="flex gap-2"> <MailIcon /> <span>Email :  info@gawey.id</span> </div>
							<h3 className="font-semibold tracking-widest"> Ikuti Sosial Media Kami</h3>
							<div className="flex gap-4">
								<Link className="bg-blue-300 p-2 w-fit rounded-lg" href="#">
									<SiInstagram />
								</Link>
								<Link className="bg-blue-300 p-2 w-fit rounded-lg" href="#">
									<SiInstagram />
								</Link>
								<Link className="bg-blue-300 p-2 w-fit rounded-lg" href="#">
									<SiInstagram />
								</Link>
							</div>
							<div></div>
						</div>
						<div className="w-[190px] space-y-3 flex flex-col tracking-widest">
							<h3 className="font-semibold"> Informasi</h3>
							<Link href="#">FAQ</Link>
							<Link href="#">Terms & Condition</Link>
							<Link href="#">Privacy & Policy</Link>
							<Link href="#">Fitur Gawey!</Link>
							<Link href="#">Testimoni Pengguna</Link>
							<Link href="#">Kenapa harus Gawey?</Link>
							<Link href="#">Biaya berlangganan</Link>
						</div>
					</div>
				</div>
				<div className="absolute bottom-0 z-20 mix-blend-multiply">
					<img src="/vector1.svg"></img>
				</div>
				<div className="absolute bottom-0 right-0 z-30">
					<img src="/ellips.svg"></img>
				</div>
				<div className="absolute right-0 bottom-[130px] z-40">
					<img src="/vector3.svg"></img>
				</div>
			</div>
		</footer>
	);
}
