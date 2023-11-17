import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import NavBar from "./components/Navbar";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import CreateCourse from "./components/CreateCourse";
import Courses from "./components/Courses";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/addcourse" element={<CreateCourse />} />
        <Route path="/courses" element={<Courses />} />
      </Routes>
    </Router>
  );
}

export default App;
