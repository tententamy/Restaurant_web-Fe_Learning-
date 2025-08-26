import React from "react";
import Link from "next/link";
import Image from "next/image";
import {pngs} from "@/public/images";


export default function BarLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-[#040404] min-h-screen">
      <nav className="flex items-center justify-between fixed top-0 left-0 w-full bg-[#040404] px-8 py-4 text-[#969493] z-50">
            {/* Logo bên trái */}
            <div className="flex items-center">
                <Image src={pngs.logo} alt="Logo" width={100} height={100} className="ml-10" />
            </div>

            {/* Menu bên phải */}   
            <div className="flex gap-10 mr-10">
                <Link className="text-white" href="/bar">HOME</Link>
                <Link href="/bar">DRINKS</Link>
                <Link href="/bar">SMALL HUNGER</Link>
                <Link href="/bar">SUGGESTIONS</Link>
                <Link href="/bar">PHOTOS</Link>
                <Link href="/bar/about">ABOUT US</Link>
                <Link href="/bar/about">CONTACT US</Link>
            </div>
        </nav>
      <main className="pt-[120px]">
        {children}
        
      </main>
    </div>
  );
}
