import { SiInstagram, SiLine, SiTiktok } from "@icons-pack/react-simple-icons";
import { CopyrightIcon, MailIcon, PhoneIcon } from "lucide-react";

export default function Footer() {
	return (
		<div className="flex flex-col from-primary to-blue-900 text-white bg-linear-to-r">
			<div className="flex justify-start py-24 px-16 lg:gap-26">
				<div className="p-4 w-96 -mt-12">
					<div>
						<img src="gawey-white.svg" alt="gawey" />
						<p>
							Gawey by JDS memantau kinerja karyawan bermobilitas tinggi secara real-time dan memberikan berbagai fitur HRIS untuk memudahkan personalia perusahaan dengan pengolahan data absensi kehadiran, menyimpan data karyawan, mengatur jadwal kerja, hingga manajemen izin.
						</p>
					</div>
					<div className="pt-12">
						<h3 className="font-bold text-lg">Solusi cerdas untuk absensi karyawan yang modern!</h3>
						<div className="flex flex-col sm:flex-row gap-4 pt-4">
							<img src="get-playstore.svg" alt="Playstore" />
							<img src="get-appstore.svg" alt="AppStore" />
						</div>
					</div>
				</div>
				<div className="p-4 w-72">
					<h3 className="font-bold text-lg">Hubungi Kami</h3>
					<p className="pt-2">Komplek Ruko Mega Grosir Cempaka Mas, Blk. A No.29, Daerah Khusus Ibukota Jakarta</p>
					<div className="flex pt-2">
						<PhoneIcon /> Telp: 021 - 50987388
					</div>
					<div className="flex pt-2">
						<MailIcon /> Email: 021 - 50987388
					</div>
					<p className="font-bold pt-2">Ikuti Sosial Media Kami</p>
					<div className="flex mt-2 gap-2">
						<div className="bg-blue-300 p-2 w-fit rounded-lg">
							<SiLine />
						</div>
						<div className="bg-blue-300 p-2 w-fit rounded-lg">
							<SiTiktok />
						</div>
						<div className="bg-blue-300 p-2 w-fit rounded-lg">
							<SiInstagram />
						</div>
					</div>
				</div>
				<div className="p-4">
					<h3 className="font-bold text-lg">Informasi</h3>
					<p className="pt-2">Informasi</p>
					<p className="pt-2">FAQ</p>
					<p className="pt-2">Terms & Condition</p>
					<p className="pt-2">Privacy & Policy</p>
					<p className="pt-2">Fitur Gawey!</p>
					<p className="pt-2">Testimoni Pengguna</p>
					<p className="pt-2">Kenapa Harus Gawey?</p>
					<p className="pt-2">Biaya Berlangganan</p>
				</div>
			</div>
			<div className="text-white inline-flex gap-2 p-4 self-center"><CopyrightIcon /> 2024 PT. Jelajah Data Semesta. All Rights Reserved.</div>
		</div>
	);
}
