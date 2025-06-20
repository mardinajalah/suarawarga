interface PointNewsType {
  no: number;
  title: string;
}

const PointNews = ({no, title}: PointNewsType) => {
  return (
    <div className="flex gap-3 items-center mt-2">
      <h1 className="bg-[#0AA01B] w-12 h-10 flex justify-center items-center text-2xl text-white text-center rounded-full">
        {no}
      </h1>
      <p className="text-[#0AA01B] text-lg w-full">
        {title}
      </p>
    </div>
  );
};

export default PointNews;
