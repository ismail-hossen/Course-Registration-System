const CourseCard = () => {
  return (
    <div className="flex flex-col bg-white w-96 rounded-xl p-3 gap-3">
      <img src="https://i.ibb.co/L0HjPxp/Rectangle-3-1.png" alt="" />
      <h2 className="text-slate-950 font-semibold text-2xl">
        AWS, Cloud Computing
      </h2>
      <p className="text-slate-600">
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout.
      </p>
      <p className="text-slate-600 flex justify-between text-xl">
        <span>Price: 35000</span>
        <span>Credit: 5hr</span>
      </p>
      <button className="bg-blue-900 text-white font-semibold rounded-md w-full p-2">
        Select
      </button>
    </div>
  );
};

export default CourseCard;
