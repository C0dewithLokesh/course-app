import { useEffect, useState } from "react";

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3000/admin/courses", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setLoading(false)
        data.courses ? setCourses(data.courses) : console.log("data = " + data)
      });
  }, []);

  return (
    <div>
      {loading
        ? "Loading..."
        : courses.map((course, index) => <div key={index}>{course.title}</div>)}
    </div>
  );
};

export default Courses;
