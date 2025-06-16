import React from "react";

interface PropsType {
  imgSrc: string;
}

const Card = ({ imgSrc }: PropsType) => {
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo,
            fugiat?
          </h1>
          <p className="mb-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            odio dolor voluptates illo doloremque...
          </p>
          <span className="text-[#0AA01B]">02/08/2025</span>
        </div>
      </div>
    </>
  );
};

export default Card;
