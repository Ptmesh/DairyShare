import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./Pages/Auth/Login";
import Register from "./Pages/Auth/Register";
import About from "./Pages/Landing/About";
import Contact from "./Pages/Landing/Contact";
import Home from "./Pages/Landing/Home";
import PrivateRoute from "./Pages/Routes/PrivateRoute";
import Dashboard from "./Pages/Software/Dashboard";
import Profile from "./Pages/Software/Profile";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const authenticate = () => {
    setIsAuthenticated(true);
  };

  const logout = () => {
    setIsAuthenticated(false);
  };
  return (
    <>
      <Routes>
        {/* Landing Page */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        {/* Auth Routes */}
        <Route path="/login" element={<Login authenticate={authenticate} />} />
        <Route path="/register" element={<Register />} />

        <Route
          path="/"
          element={<PrivateRoute isAuthenticated={isAuthenticated} />}
        >
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
