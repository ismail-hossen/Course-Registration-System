import CourseCard from "./CourseCard";

const CourseArea = () => {
  return (
    <div className="px-16">
      <h1 className="text-center text-black text-4xl font-bold mt-6">
        Course Registration
      </h1>
      <div className="grid grid-cols-3 w-8/12 gap-3 mt-4">
        <CourseCard></CourseCard>
        <CourseCard></CourseCard>
        <CourseCard></CourseCard>
        <CourseCard></CourseCard>
        <CourseCard></CourseCard>
        <CourseCard></CourseCard>
      </div>
    </div>
  );
};

export default CourseArea;
