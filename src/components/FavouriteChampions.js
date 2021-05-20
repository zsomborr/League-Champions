import { useContext } from "react";
import { FavouriteContext } from "../contexts/FavouriteContext";
import Champion from "./Champion";

const FavouriteChampions = () => {
  const [favouriteChampions, setFavouriteChampions] =
    useContext(FavouriteContext);

  const freeChampions = [
    "9",
    "13",
    "29",
    "33",
    "42",
    "43",
    "60",
    "67",
    "86",
    "103",
    "104",
    "112",
    "122",
    "245",
    "267",
  ];

  return (
    <div>
      {favouriteChampions.map((champion) => (
        <Champion
          key={champion.id}
          champion={champion}
          freeChampions={freeChampions}
        />
      ))}
    </div>
  );
};

export default FavouriteChampions;
