import React from 'react';

interface PropsType {
  imgSrc: string;
}

const Card = ({imgSrc}: PropsType) => {
  return (
    <>
      <div className='flex w-[97%] justify-between gap-3'>
        <div className='w-6xl overflow-hidden shadow-xl rounded-lg'>
          <img
            src={imgSrc}
            alt='gambar'
            className='w-full h-full object-cover'
          />
        </div>
        <div>
          <h1 className='text-lg font-bold'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae, ut!</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi facilis consequatur possimus dolores libero suscipit vero, dolore temporibus impedit cumque aliquam, et repudiandae obcaecati repellat sunt accusamus officia delectus
            exercitationem.
          </p>
          <span className='text-[#0AA01B]'>02/08/2025</span>
        </div>
      </div>
    </>
  );
};

export default Card;
