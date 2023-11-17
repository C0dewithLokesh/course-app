import { Button, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [username, setusername] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (
      location.pathname.includes("/signin") ||
      location.pathname.includes("/signup")
    ) {
      setLoading(false);
      return;
    }

    fetch("http://localhost:3000/admin/me", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.username) {
          setusername(data.username);
          setLoading(false);
        } else {
          console.log(data);
          setLoading(false);
        }
      });
  }, [location.pathname]);

  const logoutHandler = () => {
    localStorage.removeItem("token");
    setusername(null);
    setLoading(false);
    navigate("/signin");
  };

  function CheckUserLogin() {
    return username ? (
      <>
        <h6>{username}</h6>
        <Button variant="contained" onClick={logoutHandler}>
          LogOut
        </Button>
      </>
    ) : (
      <>
        <Button variant="contained" onClick={() => navigate("/signup")}>
          SIGNUP
        </Button>
        <Button variant="contained" onClick={() => navigate("/signin")}>
          SIGNIN
        </Button>
      </>
    );
  }

  return (
    <div className="flex items-center justify-between p-5">
      <Typography variant="h6">Coursera</Typography>
      <div className="flex items-center gap-4">
        {loading ? "Loading.." : (<CheckUserLogin />)}
      </div>
    </div>
  );
};

export default NavBar;
