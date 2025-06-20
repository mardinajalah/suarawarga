import React from "react";

interface PropsType {
  imgSrc: string;
  title: string;
  desc: string;
  tanggal: string;
}

const Card = ({ imgSrc, title, desc, tanggal }: PropsType) => {
  return (
    <>
      <div className="md:flex justify-between gap-2 overflow-hidden">
        <div className="md:w-[50%] md:h-[200px] overflow-hidden shadow-xl rounded-lg">
          <picture>
            <img
              src={imgSrc}
              alt="gambar"
              className="w-full h-full object-cover"
            />
          </picture>
        </div>
        <div className="md:w-[50%]">
          <h1 className="text-lg font-bold mt-2 mb-1 md:mt-0">
            {title}
          </h1>
          <p className="mb-2">
            {desc.split(" ").slice(0, 15).join(" ") + "..."}
          </p>
          <span className="text-[#0AA01B]">{tanggal}</span>
        </div>
      </div>
    </>
  );
};

export default Card;
