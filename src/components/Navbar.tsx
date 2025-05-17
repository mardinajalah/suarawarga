const lists: string[] = ['Berita', 'Jaga', 'udik', 'pandangan'];

const Navbar = () => {
  return (
    <div className='sticky top-0 z-50 bg-[#0AA01B] text-white py-4 flex justify-between items-center px-20'>
      <ul className='flex gap-6 text-xl'>
        {lists.map((list, i) => (
          <li
            key={i}
            className='cursor-pointer'
          >
            {list}
          </li>
        ))}
      </ul>
      <div className="w-1/4 text-sm flex justify-between font-semibold items-center gap-2">
        <input type="text"
          className="bg-white w-full placeholder:text-gray-800 text-gray-800 rounded-lg py-2 px-4 outline-none"
          placeholder="Cari Berita......"
        />
        <button className="bg-black px-5 py-2 rounded-lg cursor-pointer">Cari</button>
      </div>
    </div>
  );
};

export default Navbar;
