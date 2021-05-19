import { Link } from "react-router-dom";
import Card from "../styles/CardStyle.js";

const Champion = ({ champion, freeChampions }) => {
  return (
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
  );
};

export default Champion;
