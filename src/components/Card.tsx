import React from "react";

interface PropsType {
  imgSrc: string;
}

const Card = ({ imgSrc }: PropsType) => {
  return (
    <>
      <div className="md:flex justify-between gap-2 overflow-hidden">
        <div className="md:w-[50%] overflow-hidden shadow-xl rounded-lg">
          <picture>
            <img
              src={imgSrc}
              alt="gambar"
              className="w-full h-full object-cover"
            />
          </picture>
        </div>
        <div className="md:w-[50%]">
          <h1 className="text-lg font-bold">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Recusandae, ut!
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
            error cum unde vero aspernatur repellendus consectetur, quam
            excepturi esse consequatur.
          </p>
          <span className="text-[#0AA01B]">02/08/2025</span>
        </div>
      </div>
    </>
  );
};

export default Card;
