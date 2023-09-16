const CourseName = () => {
  return (
    <div className="bg-white mt-4 rounded-xl p-5 w-80">
      <h3 className="text-blue-600 mb-3 font-bold text-lg">
        Credit Hour Remaining <span>7</span> hr
      </h3>
      <hr />
      <div>
        <h3 className="text-black font-bold text-xl mt-2">Course Name</h3>
        <div className="text-[#1c1b1b8b] flex flex-col gap-1 mt-4 mb-4">
          <p>1 Introduction to c programming</p>
          <p>2 Introduction to C++ for DSA</p>
          <p>3 Software Engineering</p>
        </div>
      </div>
      <hr />
      <h2 className="font-medium text-slate-950 py-4">
        Total Credit Hour : 13
      </h2>
      <hr />
      <h2 className="font-semibold text-slate-950 pt-4">
        Total Price : 48000 USD
      </h2>
    </div>
  );
};

export default CourseName;
