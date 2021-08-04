import { useEffect, useState, useContext } from "react";
import Champion from "./Champion";
import { API_BASE_URL } from "../constants";
import { UserContext } from "../contexts/UserContext";
import { defaultChamp } from "../static/DefaultChampion";

const FavouriteChampions = () => {
  // eslint-disable-next-line no-unused-vars
  const [favouriteChampions, setFavouriteChampions] = useState([defaultChamp]);
  // eslint-disable-next-line no-unused-vars
  const [user, setUser] = useContext(UserContext);
  const [update, setUpdate] = useState(false);

  useEffect(() => {
    const getFavouriteChampions = async () => {
      let championsFromApi = await fetchFavouriteChampions();
      championsFromApi = Object.entries(championsFromApi).map((e) => e[1]);
      setFavouriteChampions(championsFromApi);
    };

    getFavouriteChampions();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user, update]);

  const toggleUpdate = () => {
    setUpdate(!update);
  };

  const fetchFavouriteChampions = async () => {
    const requestOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + user.token,
      },
    };
    const res = await fetch(`${API_BASE_URL}/user/favourites`, requestOptions);
    const data = await res.json();
    return data.data;
  };

  return (
    <div>
      {favouriteChampions.map((champion) => (
        <Champion
          key={champion.id}
          champion={champion}
          toggleUpdate={toggleUpdate}
        />
      ))}
    </div>
  );
};

export default FavouriteChampions;
