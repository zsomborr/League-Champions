import { useContext, useEffect, useState } from "react";
import { FavouriteContext } from "../contexts/FavouriteContext";
import Champion from "./Champion";
import { API_BASE_URL } from "../constants";

const FavouriteChampions = () => {
  // eslint-disable-next-line no-unused-vars
  const [favouriteChampions, setFavouriteChampions] =
    useContext(FavouriteContext);
  const [freeChampions, setFreeChampions] = useState([]);

  useEffect(() => {
    const getFreeChampions = async () => {
      const championsFromApi = await fetchFreeChampions();
      setFreeChampions(championsFromApi);
    };
    getFreeChampions();
  }, []);

  const fetchFreeChampions = async () => {
    const data = await fetch(`${API_BASE_URL}/free`).then((r) => r.json());
    console.log(data);
    return data.freeChampionIds;
  };

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
