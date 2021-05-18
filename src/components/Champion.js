import { Link } from "react-router-dom";
import Card from "../styles/CardStyle.js";

const Champion = ({ champion, urlName, freeChampions }) => {
  return (
    <Link
      to={{
        pathname: `/championDetail/${champion.key}`,
        state: { champion: champion, urlName: urlName },
      }}
    >
      <Card>
        <img
          width="200px"
          alt="test"
          src={`https://ddragon.canisback.com/img/champion/tiles/${
            urlName === "Fiddlesticks" ? "FiddleSticks" : urlName
          }_0.jpg`}
        ></img>
        <br />
        {champion.name}
        <br />
        {champion.title}
      </Card>
    </Link>
    // <tr>
    //   <td>

    //   </td>
    //   <td>

    //   </td>
    //   {/* <td>{freeChampions.contains(champion.key) ? "Yes" : "No"}</td> */}
    //   <td>{champion.tags}</td>
    //   {/* <td>{champion.blurb}</td> */}
    // </tr>
  );
};

export default Champion;
