"use client";

import { useState } from 'react';
import { Equal, EqualNot } from 'lucide-react'; // atau pakai icon lain

const lists: string[] = ['Berita', 'Jaga', 'Udik', 'Pandangan'];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className='sticky top-0 z-50 bg-[#0AA01B] text-white py-4 px-6 md:px-10 flex justify-between items-center gap-5'>
      
      {/* Tombol Toggle hanya muncul di layar kecil */}
      <button 
        onClick={() => setMenuOpen(!menuOpen)}
        className='md:hidden'
      >
        {menuOpen? <EqualNot size={28} /> : <Equal size={28} />}
      </button>

      {/* Menu hanya tampil di md ke atas */}
      <ul className='hidden md:flex gap-6 text-xl'>
        {lists.map((list, i) => (
          <li key={i} className='cursor-pointer'>
            {list}
          </li>
        ))}
      </ul>

      {/* Input cari hanya tampil di md ke atas */}
      <div className="w-full md:w-1/2 lg:w-1/3 text-sm flex justify-between font-semibold items-center gap-2">
        <input 
          type="text"
          className="bg-white w-full placeholder:text-gray-800 text-gray-800 rounded-lg py-2 px-4 outline-none"
          placeholder="Cari Berita......"
        />
        <button className="bg-black px-5 py-2 rounded-lg cursor-pointer">Cari</button>
      </div>

      {menuOpen && (
        <ul className='absolute top-16.5 left-0 w-full bg-[#0AA01B] text-white md:hidden flex flex-col gap-2 px-6 py-4'>
          {lists.map((list, i) => (
            <li key={i} className='py-2 cursor-pointer'>
              {list}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Navbar;