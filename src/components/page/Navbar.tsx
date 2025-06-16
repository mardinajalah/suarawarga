"use client";

import { useState } from "react";
import { Equal, EqualNot } from "lucide-react";
import Link from "next/link";
import { Khand, Karantina } from "next/font/google";
import { useRouter } from "next/navigation";

interface PropsType {
  lists: string[];
}

const khand = Khand({
  weight: "700",
  style: "normal",
  subsets: ["latin"],
});

const karantina = Karantina({
  weight: "700",
  style: "normal",
  subsets: ["latin"],
});

const Navbar = ({ lists }: PropsType) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  const handleNavigation = (path: string) => {
    router.push(path);
    setMenuOpen(false);
  };

  return (
    <>
      <div className="text-center font-bold capitalize text-gray-800 pt-5">
        <h1 className={`${khand.className} text-6xl`}>suarawarga</h1>
        <span className={`${karantina.className} text-2xl`}>
          nurani warga tapak
        </span>
      </div>
      <div className="sticky top-0 z-50 bg-[#0AA01B] text-white py-4 px-6 md:px-10 flex justify-between items-center gap-5">
        {/* Tombol Toggle hanya muncul di layar kecil */}
        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden">
          {menuOpen ? <EqualNot size={28} /> : <Equal size={28} />}
        </button>

        {/* Menu hanya tampil di md ke atas */}
        <ul className="hidden md:flex gap-6 text-xl">
          {lists.map((list: string, i: number) => (
            <Link
              href={list == "Home"? "/" :`/${list.toLowerCase()}`}
              key={i}
              className="cursor-pointer"
            >
              {list}
            </Link>
          ))}
        </ul>

        {/* Input cari hanya tampil di md ke atas */}
        <div className="w-full md:w-1/2 lg:w-1/3 text-sm flex justify-between font-semibold items-center gap-2">
          <input
            type="text"
            className="bg-white w-full placeholder:text-gray-800 text-gray-800 rounded-lg py-2 px-4 outline-none"
            placeholder="Cari Berita......"
          />
          <button className="bg-black px-5 py-2 rounded-lg cursor-pointer">
            Cari
          </button>
        </div>

        {menuOpen && (
          <ul className="absolute top-16.5 left-0 w-full bg-[#0AA01B] text-white md:hidden flex flex-col gap-2 px-6 py-4">
            {lists.map((list, i) => (
              <p
                onClick={() => handleNavigation(list == "Home"? "/" :`/${list.toLowerCase()}`)}
                key={i}
                className="py-2 cursor-pointer"
              >
                {list}
              </p>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default Navbar;
