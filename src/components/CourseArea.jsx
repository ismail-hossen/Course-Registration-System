import { useEffect, useState } from "react";
import CourseCard from "./CourseCard";
import CourseName from "./CourseName";

const CourseArea = () => {
  const [data, setData] = useState([]);
  const [selectedData, setSelectedData] = useState([]);
  const [totalCredit, setTotalCredit] = useState(Number);
  const [price, setPrice] = useState(Number);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setData(data));

    const totalPrice = selectedData.reduce(
      (prev, currentValue) => prev + currentValue.price,
      0
    );
    setPrice(totalPrice);
  }, [selectedData]);

  const handleSelect = (item) => {
    let TCreditHr = selectedData.reduce(
      (prev, currentValue) => prev + parseInt(currentValue.credit),
      0
    );

    TCreditHr += parseInt(item.credit);

    if (TCreditHr <= 20) {
      const exists = selectedData?.filter((course) => course.id == item.id);
      if (exists.length == 0) {
        setTotalCredit(TCreditHr);
        setSelectedData([...selectedData, item]);
      } else {
        alert("Already Selected");
        return;
      }
    } else {
      alert("You trying to buy credit over");
      return;
    }
  };

  return (
    <div className="px-16">
      <h1 className="text-center text-black text-4xl font-bold mt-6">
        Course Registration
      </h1>
      <div className="flex gap-3">
        <div className="grid grid-cols-3 w-8/12 gap-3 mt-4">
          {data?.map((d, index) => (
            <CourseCard
              handleSelect={handleSelect}
              key={index}
              allCourses={d}
            ></CourseCard>
          ))}
        </div>
        <div>
          <CourseName
            totalCredit={totalCredit}
            totalPrice={price}
            selectedData={selectedData}
          ></CourseName>
        </div>
      </div>
    </div>
  );
};

export default CourseArea;
