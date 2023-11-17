import { Button, Card, TextField, Typography } from "@mui/material";
import { useState } from "react";

const Signup = () => {
  const [signupData, setSignupData] = useState({
    username: "",
    password: "",
  });

  const signupHandler = () => {
    fetch("http://localhost:3000/admin/signup", {
      method: "POST",
      body: JSON.stringify(signupData),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setSignupData({ username: "", password: "" });
      })
      .catch((error) => console.error("Error:", error));
  };

  return (
    <div className="flex flex-col items-center justify-center gap-4 h-[80%]">
      <Typography variant="h6" className="h-auto text-center">
        Welcome to Coursera Sign up Below
      </Typography>
      <Card className="w-[352px] h-auto p-5 gap-6 flex flex-col ">
        <TextField
          label="Email"
          value={signupData.username}
          onChange={(e) =>
            setSignupData({ ...signupData, username: e.target.value })
          }
        />
        <TextField
          label="Password"
          value={signupData.password}
          onChange={(e) =>
            setSignupData({ ...signupData, password: e.target.value })
          }
        />
        <Button variant="contained" onClick={signupHandler}>
          Sign Up
        </Button>
      </Card>
    </div>
  );
};

export default Signup;
