import Card from "@/components/page/Card";
import PointNews from "@/components/page/PointNews";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Berita = () => {
  return (
    <div className="lg:flex justify-between px-5 md:px-10">
      {/* content left */}
      <div className="pb-5 lg:w-[55%]">
        <h1 className="text-[#0AA01B] mt-2">Berita</h1>
        <div className="mt-3 flex flex-col gap-5">
          <Card imgSrc="https://c.files.bbci.co.uk/0231/production/_109016500_antarafoto-aksigejayanmemanggil-230919-afa-013.jpg" />
          <Card imgSrc="https://cdn.antaranews.com/cache/1200x800/2024/02/16/antarafoto-aksi-depan-kpu-160224-hma-01.jpg" />
          <Card imgSrc="https://berita.batangkab.go.id/img/berita/20-230824150728berita11319_.jpeg" />
        </div>
        <div className="flex justify-center mt-3 gap-2">
          <button className="bg-black text-white rounded-md p-1 cursor-pointer">
            <ChevronLeft size={20} />
          </button>
          <button className="bg-black text-white rounded-md p-1 cursor-pointer">
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
      {/* content right */}
      <div className="lg:w-[30%] w-full">
        <div>
            <h1 className="text-[#0AA01B] mt-2">Terkini</h1>
            <PointNews />
            <PointNews />
            <PointNews />
        </div>
        <div>
            <h1 className="text-[#0AA01B] mt-2">Populer</h1>
            <PointNews />
            <PointNews />
            <PointNews />
        </div>
      </div>
    </div>
  );
};

export default Berita;
