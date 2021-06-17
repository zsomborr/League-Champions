import { Link } from "react-router-dom";
import { Card, CardContainer } from "../styles/CardStyle.js";
import { ThemeProvider } from "styled-components";
import { useState, useEffect, useContext } from "react";
import { Icon } from "@iconify/react";
import starIcon from "@iconify-icons/entypo/star";
import { UserContext } from "../contexts/UserContext";
import { API_BASE_URL } from "../constants";

const Champion = ({ champion }) => {
  const [theme, setTheme] = useState({
    color: "#d3b509",
    backgroundColor: "#2c5d72",
  });
  // eslint-disable-next-line no-unused-vars
  const [user, setUser] = useContext(UserContext);
  const [favourite, setFavourite] = useState(champion.favourite);

  useEffect(() => {
    champion.free
      ? setTheme((oldTheme) => ({
          ...oldTheme,
          color: "#2c5d72",
          backgroundColor: "#d3b509",
        }))
      : setTheme((oldTheme) => ({
          ...oldTheme,
          color: "#d3b509",
          backgroundColor: "#2c5d72",
        }));
  }, [champion.key, champion.free]);

  const toggleFavouriteChamp = () => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: user, championId: champion.key }),
    };
    fetch(`${API_BASE_URL}/user/update-favourite`, requestOptions);
    champion.favourite = !champion.favourite;
    setFavourite(champion.favourite);
  };

  return (
    <ThemeProvider theme={theme}>
      <CardContainer>
        {user && (
          <Icon
            icon={starIcon}
            color={favourite ? theme.color : "black"}
            onClick={toggleFavouriteChamp}
          />
        )}
        <Link
          to={{
            pathname: `/championDetail/${champion.key}`,
            state: { champion: champion },
          }}
        >
          <Card>
            <img
              width="100%"
              alt="Not found"
              src={`https://ddragon.canisback.com/img/champion/tiles/${
                champion.id === "Fiddlesticks" ? "FiddleSticks" : champion.id
              }_0.jpg`}
            ></img>
            <br />
            {champion.name}
            <br />
            {champion.title}
          </Card>
        </Link>
      </CardContainer>
    </ThemeProvider>
  );
};

export default Champion;
