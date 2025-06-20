import Card from "@/components/page/Card";
import PointNews from "@/components/page/PointNews";
import { dataCards, dataPointNews } from "@/data";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Jaga = () => {
  return (
    <div className="lg:flex justify-between px-5 md:px-10">
      {/* content left */}
      <div className="pb-5 lg:w-[55%]">
        <h1 className="text-[#0AA01B] mt-2">Jaga</h1>
        <div className="mt-3 flex flex-col gap-5">
          {dataCards.map((card, i) => (
            <Card
              key={i}
              title={card.title}
              desc={card.desc}
              imgSrc={card.img}
              tanggal={card.tanggal}
            />
          ))}
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
          {dataPointNews.map((point, i) => (
            <PointNews key={i} no={point.id} title={point.title} />
          ))}
        </div>
        <div>
          <h1 className="text-[#0AA01B] mt-2">Populer</h1>
          {dataPointNews.map((point, i) => (
            <PointNews key={i} no={point.id} title={point.title} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Jaga;
