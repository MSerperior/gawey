"use client"

import { GlobeIcon } from "lucide-react";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaCaretDown, FaHeadset } from "react-icons/fa";
import { X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Navigation() {
	const [isOpen, setIsOpen] = useState(false);

	const handleClick = () => {
		setIsOpen(!isOpen);
	};

	return (
		<nav className="sticky bg-white top-0 z-50">
			<div
				className={`
          fixed top-0 left-0 h-screen w-60 bg-white shadow-lg z-50 
          flex flex-col items-center py-4 rounded-r-md 
          transform transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
        `}
			>
				{/* Tombol close */}
				<button
					onClick={() => setIsOpen(false)}
					className="self-end mr-3 mb-4 p-2 rounded-full hover:bg-gray-100 hover:cursor-pointer"
				>
					<X className="w-5 h-5" />
				</button>

				<div className="flex flex-col w-full px-4 gap-4 text-gray-600">
					<Link className="hover:text-blue-950 hover:bg-gray-300 hover:font-bold rounded-md px-2" href={"/"}>Fitur</Link>
					<Link className="hover:text-blue-950 hover:bg-gray-300 hover:font-bold rounded-md px-2" href={"/"}>Artikel</Link>
					<Link className="hover:text-blue-950 hover:bg-gray-300 hover:font-bold rounded-md px-2" href={"/"}>Kontak</Link>

					<Link className="py-2 px-2 flex gap-2 bg-primary rounded-lg text-white" href={"/"}>
						<FaHeadset size={20} />
						Hubungi Sales
					</Link>
					<Link className="p-2 rounded-lg text-primary border-primary border" href={"/"}>Coba Gawey Gratis</Link>
				</div>
			</div>
			<div className="flex h-20 items-center w-auto justify-between px-12 lg:px-25 shadow-md">
				<div className="flex md:gap-12 gap-4 items-center">
					<div>
						<img src="gawey.svg" alt="gawey" />
					</div>
					<div className="hidden lg:flex gap-9 text-gray-600">
						<Link className="w-12 hover:text-blue-950 hover:font-bold" href={"/"}>Fitur</Link>
						<Link className="w-12 hover:text-blue-950 hover:font-bold" href={"/"}>Artikel</Link>
						<Link className="w-12 hover:text-blue-950 hover:font-bold" href={"/"}>Kontak</Link>
					</div>
					<button onClick={handleClick}
						className="flex flex-col justify-center items-center lg:hidden hover:cursor-pointer">
						{isOpen ? <X size={30} /> : <RxHamburgerMenu size={30} />}
					</button>
				</div>

				<div className="flex gap-4 items-center">
					<div className="flex px-2 items-center gap-1">
						<GlobeIcon size={20} />
						ID
						<FaCaretDown size={20} />
					</div>
					<div className="flex gap-4">
						<Link className="p-2 flex gap-2 bg-primary rounded-lg text-white" href={"/"}>
							<FaHeadset size={20} />
							<span className="hidden lg:block">Hubungi Sales</span>
						</Link>
						<Link className="p-2 rounded-lg text-primary border-primary border" href={"/"}>Coba <span className="hidden lg:inline-block">Gawey Gratis</span></Link>
					</div>
				</div>
			</div>
		</nav>
	);
}
