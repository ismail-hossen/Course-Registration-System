import { useEffect, useState } from "react";
import CourseCard from "./CourseCard";
import CourseName from "./CourseName";

const CourseArea = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  return (
    <div className="px-16">
      <h1 className="text-center text-black text-4xl font-bold mt-6">
        Course Registration
      </h1>
      <div className="flex gap-3">
        <div className="grid grid-cols-3 w-8/12 gap-3 mt-4">
          {data?.map((d, index) => (
            <CourseCard key={index} allCourses={d}></CourseCard>
          ))}
        </div>
        <div>
          <CourseName></CourseName>
        </div>
      </div>
    </div>
  );
};

export default CourseArea;
