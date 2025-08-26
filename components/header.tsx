"use client";
import { pngs } from "@/public/images";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

function Header() {
  const pathname = usePathname();

  const pages = [
    { label: "Home", paths: "/bar" },
    { label: "Drinks", paths: "/bar/drinks" },
    { label: "Small Hunger", paths: "/bar/small-hunger" },
    { label: "Suggestions", paths: "/bar/suggestions" },
    { label: "Photos", paths: "/bar/photos" },
    { label: "About us", paths: "/bar/about" },
    { label: "Contact us", paths: "/bar/contact" },
  ];

  return (
    <header className="p-[20px_40px] bg-black fixed top-0 w-full z-50">
      <div className="container mx-auto flex items-center justify-between">
        <Image
          src={pngs.logo}
          alt="logo"
          width={105}
          height={105}
          className="size-[105px]"
        />
        <aside>
          <ul className="flex items-center gap-[35px]">
            {pages.map((page) => (
              <li
                key={page.label}
                className={clsx(
                  "uppercase duration-300 transition-all cursor-pointer",
                  pathname === page.paths
                    ? "text-white"
                    : "text-[#969493] hover:text-white"
                )}
              >
                <Link href={page.paths}>{page.label}</Link>
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </header>
  );
}

export default Header;