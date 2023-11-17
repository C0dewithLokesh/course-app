import { Button, Card, TextField, Typography } from "@mui/material";
import { useState } from "react";

const initialCourseData = {
  title: "",
  description: "",
  price: 0,
  imageLink: "",
};

const CreateCourse = () => {
  const [courseData, setCourseData] = useState(initialCourseData);

  const handleDataChange = (e) => {
    setCourseData({
      ...courseData,
      [e.target.name]: e.target.value,
    });
  };

  const createCourseHandler = () => {
    if (courseData === initialCourseData) {
      return null;
    }
    fetch("http://localhost:3000/admin/courses", {
      method: "POST",
      body: JSON.stringify(courseData),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    // .then((res) => res.json())
    // .then((data) => {
    //   console.log(data)
    // });
  };

  return (
    <div className="flex flex-col items-center justify-center gap-4 h-[80%]">
      <Typography variant="h6" className="h-auto text-center">
        Welcome to Coursera Sign in Below
      </Typography>
      <Card className="w-[352px] h-auto p-5 gap-6 flex flex-col ">
        <TextField label="Title" name="title" onChange={handleDataChange} />
        <TextField
          label="Desciption"
          name="description"
          onChange={handleDataChange}
        />
        <TextField label="Price" name="price" onChange={handleDataChange} />
        <TextField
          label="Image Link"
          name="imageLink"
          onChange={handleDataChange}
        />
        <Button variant="contained" onClick={createCourseHandler}>
          Create Course
        </Button>
      </Card>
    </div>
  );
};

export default CreateCourse;
