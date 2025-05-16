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
      <div className="w-1/5 text-sm">
        <input type="text"
          className="bg-white w-full placeholder:text-gray-800 text-gray-800 text-lg font-semibold rounded-lg py-2 px-4 outline-none"
          placeholder="Cari Berita......"
        />
      </div>
    </div>
  );
};

export default Navbar;
