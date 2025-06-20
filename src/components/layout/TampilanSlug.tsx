import React from "react";
import Navbar from "../page/Navbar";
import { dataNavbar, dataPointNews } from "@/data";
import PointNews from "../page/PointNews";
import Footer from "../page/Footer";

const TampilanSlug = () => {
  return (
    <>
      <Navbar lists={dataNavbar} />
      <div className="lg:flex justify-between px-5 md:px-10">
        {/* kontent left */}
        <div className="pb-5 lg:w-[55%]">
          <h1 className="text-[#0AA01B] mt-2">Berita</h1>
          <div className="h-80 rounded-lg overflow-hidden mt-2">
            <picture>
              <img
                src="https://cdn.antaranews.com/cache/1200x800/2024/02/16/antarafoto-aksi-depan-kpu-160224-hma-01.jpg"
                alt="gambar"
                className="w-full h-full object-cover"
              />
            </picture>
          </div>
          <div className="">
            <h1 className="text-lg font-bold mb-1 md:mt-0">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo,
              fugiat?
            </h1>
            <div className="flex flex-col gap-2">
              <p className="indent-4">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni,
                accusamus. Neque officiis, delectus alias iusto esse vero,
                quidem aliquid similique, sed aperiam tempora! Repudiandae error
                explicabo aspernatur ad excepturi consequatur amet omnis
                reprehenderit asperiores hic nisi delectus soluta voluptas et
                itaque dicta quam expedita, recusandae, cum aliquam. Rerum totam
                libero quis optio, eveniet repudiandae commodi recusandae
                minima, hic natus pariatur amet dolor laborum sed vero
                provident. Distinctio accusantium soluta sint natus, dolores
                fuga possimus modi nihil pariatur qui. Porro, cupiditate sunt
                cum repudiandae maiores quam accusantium molestiae numquam
                ducimus ad, ipsum ut officia aut perferendis architecto, ea enim
                mollitia! Incidunt?
              </p>
              <p className="indent-4">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni,
                accusamus. Neque officiis, delectus alias iusto esse vero,
                quidem aliquid similique, sed aperiam tempora! Repudiandae error
                explicabo aspernatur ad excepturi consequatur amet omnis
                reprehenderit asperiores hic nisi delectus soluta voluptas et
                itaque dicta quam expedita, recusandae, cum aliquam. Rerum totam
                libero quis optio, eveniet repudiandae commodi recusandae
                minima, hic natus pariatur amet dolor laborum sed vero
                provident. Distinctio accusantium soluta sint natus, dolores
                fuga possimus modi nihil pariatur qui. Porro, cupiditate sunt
                cum repudiandae maiores quam accusantium molestiae numquam
                ducimus ad, ipsum ut officia aut perferendis architecto, ea enim
                mollitia! Incidunt?
              </p>
              <p className="indent-4">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni,
                accusamus. Neque officiis, delectus alias iusto esse vero,
                quidem aliquid similique, sed aperiam tempora! Repudiandae error
                explicabo aspernatur ad excepturi consequatur amet omnis
                reprehenderit asperiores hic nisi delectus soluta voluptas et
                itaque dicta quam expedita, recusandae, cum aliquam. Rerum totam
                libero quis optio, eveniet repudiandae commodi recusandae
                minima, hic natus pariatur amet dolor laborum sed vero
                provident. Distinctio accusantium soluta sint natus, dolores
                fuga possimus modi nihil pariatur qui. Porro, cupiditate sunt
                cum repudiandae maiores quam accusantium molestiae numquam
                ducimus ad, ipsum ut officia aut perferendis architecto, ea enim
                mollitia! Incidunt?
              </p>
            </div>
          </div>
        </div>
        {/* kontent right */}
        <div className="lg:w-[30%] w-full">
          <div>
            <h1 className="text-[#0AA01B] mt-2">Populer</h1>
            {dataPointNews.map((point, i) => (
              <PointNews key={i} no={point.id} title={point.title} />
            ))}
          </div>
          <div>
            <h1 className="text-[#0AA01B] mt-2">terkini</h1>
            {dataPointNews.map((point, i) => (
              <PointNews key={i} no={point.id} title={point.title} />
            ))}
          </div>
          <div>
            <h1 className="text-[#0AA01B] lg:mt-5 mt-2">Pembuat Artikel</h1>
            <div className="pl-5">
                <p>Penulis : suparman, Susi Pertiwi</p>
                <p>Editor : laksmana</p>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default TampilanSlug;
