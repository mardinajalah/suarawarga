import Card from "@/components/page/Card";
import PointNews from "@/components/page/PointNews";
import Link from "next/link";
import { dataCards, dataPointNews } from "@/data";


const Home = () => {
  return (
    <>
      <div className="lg:flex justify-between px-5 md:px-10">
        {/* content left */}
        <div className="pb-5 lg:w-[55%]">
          <h1 className="text-[#0AA01B] mt-2">Terkini</h1>
          <div className="mt-2">
            <div className="relative bg-slate-200 overflow-hidden rounded-xl shadow-2xl">
              <picture>
                <img
                  src="https://c.files.bbci.co.uk/0231/production/_109016500_antarafoto-aksigejayanmemanggil-230919-afa-013.jpg"
                  alt="gambar"
                  className="w-full h-full object-cover"
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
            { dataCards.map((card, i) => (
              <Card key={i} title={card.title} desc={card.desc} imgSrc={card.img} tanggal={card.tanggal} />
            ))}
          </div>
          <div className="flex justify-center mt-3 gap-2">
            <Link href="/berita" className="hover:text-[#0AA01B]">
              Lihat semua berita
            </Link>
          </div>
        </div>
        {/* content right */}
        <div className="lg:w-[30%] w-full">
          <h1 className="text-[#0AA01B] mt-2">Populer</h1>
          {dataPointNews.map((point, i) => (
            <PointNews key={i} no={point.id} title={point.title} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
