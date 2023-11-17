import { Button, Card, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signin = () => {
  const navigate = useNavigate();

  const [signinData, setSigninData] = useState({
    username: "",
    password: "",
  });
  
  const signinHandler = () => {
    fetch("http://localhost:3000/admin/login", {
      method: "POST",
      headers: {
        // "Content-Type": "application/json",
        username: signinData.username,
        password: signinData.password
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setSigninData({ username: "", password: "" });
        localStorage.setItem('token', data.token);
        navigate("/addcourse");
      })
      .catch((error) => console.error("Error:", error));
  };

  return (
    <div className="flex flex-col items-center justify-center gap-4 h-[80%]">
      <Typography variant="h6" className="h-auto text-center">
        Welcome to Coursera Sign in Below
      </Typography>
      <Card className="w-[352px] h-auto p-5 gap-6 flex flex-col ">
        <TextField
          label="Email"
          value={signinData.username}
          onChange={(e) =>
            setSigninData({ ...signinData, username: e.target.value })
          }
        />
        <TextField
          label="Password"
          value={signinData.password}
          onChange={(e) =>
            setSigninData({ ...signinData, password: e.target.value })
          }
        />
        <Button variant="contained" onClick={signinHandler}>
          Sign In
        </Button>
      </Card>
    </div>
  );
};

export default Signin;
