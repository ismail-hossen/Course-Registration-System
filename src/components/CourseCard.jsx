import PropTypes from "prop-types";

const CourseCard = ({ allCourses }) => {
  const { cName, description, price, image, credit } = allCourses || {};
  return (
    <div className="flex flex-col bg-white w-96 rounded-xl p-3 gap-3">
      <img src={image} alt="" />
      <h2 className="text-slate-950 font-semibold text-2xl">{cName}</h2>
      <p className="text-slate-600">{description}</p>
      <p className="text-slate-600 flex justify-between text-xl">
        <span>
          Price: <span>{price}</span>
        </span>
        <span>Credit: {credit}hr</span>
      </p>
      <button className="bg-blue-900 text-white font-semibold rounded-md w-full p-2">
        Select
      </button>
    </div>
  );
};

export default CourseCard;

CourseCard.propTypes = {
  allCourses: PropTypes.object,
};
