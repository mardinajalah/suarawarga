import Card from '@/components/Card';
import Navbar from '@/components/Navbar';
import PointNews from '@/components/PointNews';
import { Khand, Karantina } from 'next/font/google';

const khand = Khand({
  weight: '700',
  style: 'normal',
  subsets: ['latin'],
});

const karantina = Karantina({
  weight: '700',
  style: 'normal',
  subsets: ['latin'],
});

const Home = () => {
  return (
    <>
      <div className='text-center font-bold capitalize text-gray-800 pt-5'>
        <h1 className={`${khand.className} text-6xl`}>suarawarga</h1>
        <span className={`${karantina.className} text-2xl`}>nurani warga tapak</span>
      </div>
      <Navbar />
      <div className='flex justify-between'>
        {/* content left */}
        <div className='px-20 pb-5 w-[60%]'>
          <div>
            <h1 className='text-[#0AA01B] mt-2'>Terkini</h1>
            <div className='mt-2'>
              <div className='bg-slate-200 w-[95%] max-h-max overflow-hidden relative rounded-xl shadow-2xl'>
                <img
                  src='https://c.files.bbci.co.uk/0231/production/_109016500_antarafoto-aksigejayanmemanggil-230919-afa-013.jpg'
                  alt='gambar'
                  className='w-full h-full object-cover'
                />
                <div className='absolute inset-0 bg-black opacity-50'></div>
                <div className='absolute bottom-5 left-5 p-2 text-white w-[70%]'>
                  <h1 className='text-4xl font-extrabold cursor-pointer hover:text-slate-200'>Lorem citationem cum pariatur aliquid? Blanditiis ut sequi doloremque.</h1>
                  <p className='mt-2 text-[#0AA01B] text-xl font-bold'>01/02/2025</p>
                </div>
              </div>
            </div>
          </div>
          <div className='mt-5'>
            <Card
              imgSrc='https://c.files.bbci.co.uk/0231/production/_109016500_antarafoto-aksigejayanmemanggil-230919-afa-013.jpg'
            />
          </div>
          <div className='mt-5'>
            <Card
              imgSrc='https://cdn.antaranews.com/cache/1200x800/2024/02/16/antarafoto-aksi-depan-kpu-160224-hma-01.jpg'
            />
          </div>
        </div>
        {/* content right */}
        <PointNews/>
      </div>
    </>
  );
};

export default Home;
