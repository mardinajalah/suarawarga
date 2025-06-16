const Footer = () => {
  return (
    <div className="bg-black text-white mt-5 lg:mt-0 py-5 md:px-10 flex justify-center items-center">
      <div className="w-[80%] md:flex justify-between">
        <ul className="flex flex-col gap-2 mb-2 md:mb-0">
          <li className="capitalize">
            <a href="">kirim tulisan</a>
          </li>
          <li className="capitalize">
            <a href="">tentang kami</a>
          </li>
          <li className="capitalize">
            <a href="">hubungi kami</a>
          </li>
        </ul>
        <ul className="flex flex-col gap-2 mb-2 md:mb-0">
          <li className="capitalize">
            <a href="">redaksi</a>
          </li>
          <li className="capitalize">
            <a href="">pedoman media siber</a>
          </li>
        </ul>
        <div className="flex items-center">
          <p> &copy; suarawarga 2025</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
