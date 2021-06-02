import { Ul, Li, NavLink, InputBar, NavElement } from "../styles/NavBarStyle";
import Tags from "./Tags";
import { useLocation } from "react-router-dom";
import { useState } from "react";

const Navbar = ({ toggleLoginModal, isLoggedIn, onLogout }) => {
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
        <NavLink to={{ pathname: "/userDetail", search: `?user=${text}` }}>
          Search For User
        </NavLink>
      </Li>
      <Li style={{ float: "right" }}>
        {isLoggedIn ? (
          <NavElement onClick={onLogout}>Logout</NavElement>
        ) : (
          <NavElement onClick={toggleLoginModal}>Login</NavElement>
        )}
      </Li>
    </Ul>
  );
};

export default Navbar;
