import { Ul, Li, NavLink, InputBar } from "../styles/NavBarStyle";
import Tags from "./Tags";
import { useLocation } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const location = useLocation();

  const [text, setText] = useState("");

  const handleOnChange = (e) => {
    setText(e.target.value);
  };

  return (
    <Ul>
      <Li>
        <NavLink to="/champions">Main Page</NavLink>
      </Li>
      <Li>
        <NavLink to="/favouriteChampions">Favourites</NavLink>
      </Li>
      <Li>{location.pathname === "/champions" && <Tags />}</Li>
      <Li>
        <InputBar
          type="search"
          id="search"
          name="search"
          value={text}
          onChange={handleOnChange}
        />
      </Li>
      <Li>
        <NavLink to={{ pathname: `/userDetail/?user=${text}` }}>
          Search For User
        </NavLink>
      </Li>
    </Ul>
  );
};

export default Navbar;
