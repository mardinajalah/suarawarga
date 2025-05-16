import React from 'react';

const Card = () => {
  return (
    <>
      <div className='flex w-[60%] justify-between gap-3'>
        <div className='w-6xlrounded-lg overflow-hidden shadow-xl rounded-lg'>
          <img
            src='https://c.files.bbci.co.uk/0231/production/_109016500_antarafoto-aksigejayanmemanggil-230919-afa-013.jpg'
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
