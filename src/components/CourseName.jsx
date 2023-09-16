import PropTypes from "prop-types";

const CourseName = ({ selectedData, totalCredit, totalPrice }) => {
  return (
    <div className="bg-white mt-4 rounded-xl p-5 w-80">
      <h3 className="text-blue-600 mb-3 font-bold text-lg">
        Credit Hour Remaining {20 - totalCredit == 0 ? 0 : 20 - totalCredit} hr
      </h3>
      <hr />
      <div>
        <h3 className="text-black font-bold text-xl mt-2">Course Name</h3>
        <div className="text-[#1c1b1b8b] flex flex-col gap-1 mt-4 mb-4">
          {selectedData?.map((course, index) => (
            <p key={course.id}>
              {index + 1} {course.cName}
            </p>
          ))}
        </div>
      </div>
      <hr />
      <h2 className="font-medium text-slate-950 py-4">
        Total Credit Hour : {totalCredit}
      </h2>
      <hr />
      <h2 className="font-semibold text-slate-950 pt-4">
        Total Price : {totalPrice} USD
      </h2>
    </div>
  );
};

export default CourseName;

CourseName.propTypes = {
  selectedData: PropTypes.array,
  totalCredit: PropTypes.number,
  totalPrice: PropTypes.number,
};
