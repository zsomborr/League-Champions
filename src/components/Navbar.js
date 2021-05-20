import { Ul, Li, NavLink } from "../styles/NavBarStyle";
import Tags from "./Tags";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const Navbar = () => {
  const location = useLocation();
  return (
    <Ul>
      <Li>
        <NavLink to="/champions">Main Page</NavLink>
      </Li>
      <Li>
        <NavLink to="/favouriteChampions">Favourites</NavLink>
      </Li>
      <Li>{location.pathname === "/champions" ? <Tags /> : null}</Li>
    </Ul>
  );
};

export default Navbar;
