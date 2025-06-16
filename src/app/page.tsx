import Card from "@/components/Card";
import Navbar from "@/components/Navbar";
import PointNews from "@/components/PointNews";
import { Khand, Karantina } from "next/font/google";

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

const Home = () => {
  return (
    <>
      <div className="text-center font-bold capitalize text-gray-800 pt-5">
        <h1 className={`${khand.className} text-6xl`}>suarawarga</h1>
        <span className={`${karantina.className} text-2xl`}>
          nurani warga tapak
        </span>
      </div>
      <Navbar />
      <div className="lg:flex justify-between px-5 md:px-10">
        {/* content left */}
        <div className="pb-5 lg:w-[50%]">
          <h1 className="text-[#0AA01B] mt-2">Terkini</h1>
          <div className="mt-2">
            <div className="relative bg-slate-200 overflow-hidden rounded-xl shadow-2xl">
              <picture>
                <img
                  src="https://c.files.bbci.co.uk/0231/production/_109016500_antarafoto-aksigejayanmemanggil-230919-afa-013.jpg"
                  alt="gambar"
                  className="w-full object-cover"
                />
              </picture>
              <div className="absolute inset-0 bg-black opacity-50"></div>
              <div className="absolute md:bottom-5 md:left-5 bottom-2 left-2 text-white w-[70%]">
                <h1 className="font-extrabold cursor-pointer hover:text-slate-200">
                  Lorem citationem cum pariatur aliquid? Blanditiis ut sequi
                  doloremque.
                </h1>
                <p className="mt-2 text-[#0AA01B] font-bold">01/02/2025</p>
              </div>
            </div>
          </div>
          <div className="mt-5 flex flex-col gap-5">
            <Card imgSrc="https://c.files.bbci.co.uk/0231/production/_109016500_antarafoto-aksigejayanmemanggil-230919-afa-013.jpg" />
            <Card imgSrc="https://cdn.antaranews.com/cache/1200x800/2024/02/16/antarafoto-aksi-depan-kpu-160224-hma-01.jpg" />
            <Card imgSrc="https://berita.batangkab.go.id/img/berita/20-230824150728berita11319_.jpeg" />
          </div>
        </div>
        {/* content right */}
        <div className="w-[30%] border-2">
          <h1 className="text-[#0AA01B] mt-2 mb-2">Populer</h1>
          <PointNews />
          <PointNews />
          <PointNews />
        </div>
      </div>
    </>
  );
};

export default Home;
