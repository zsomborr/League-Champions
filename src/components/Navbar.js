import { NavBar } from "../styles/NavBarStyle";
import Tags from "./Tags";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const Navbar = () => {
  const location = useLocation();
  return (
    <NavBar>
      <p>menu</p>
      {location.pathname === "/champions" ? <Tags /> : null}
    </NavBar>
  );
};

export default Navbar;
