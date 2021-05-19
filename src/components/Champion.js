import { Link } from "react-router-dom";
import Card from "../styles/CardStyle.js";
import { ThemeProvider } from "styled-components";
import { useState, useEffect } from "react";

const Champion = ({ champion, freeChampions }) => {
  const [theme, setTheme] = useState({
    color: "gold",
    backgroundColor: "#2c5d72",
  });

  useEffect(() => {
    freeChampions.includes(champion.key)
      ? setTheme((oldTheme) => ({
          ...oldTheme,
          color: "#2c5d72",
          backgroundColor: "gold",
        }))
      : setTheme((oldTheme) => ({
          ...oldTheme,
          color: "gold",
          backgroundColor: "#2c5d72",
        }));
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Link
        to={{
          pathname: `/championDetail/${champion.key}`,
          state: { champion: champion },
        }}
      >
        <Card>
          <img
            width="100%"
            alt="test"
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
    </ThemeProvider>
  );
};

export default Champion;
