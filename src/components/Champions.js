import { useEffect, useState } from "react";
import Champion from "./Champion.js";

const Champions = () => {
  const [champions, setChampions] = useState([]);
  const [freeChampions, setFreeChampions] = useState([]);

  useEffect(() => {
    const getChampions = async () => {
      const championsFromApi = await fetchChampions();
      setChampions(championsFromApi);
    };

    const getFreeChampions = async () => {
      const championsFromApi = await fetchFreeChampions();
      setFreeChampions(championsFromApi);
    };

    getChampions();
    getFreeChampions();
  }, []);

  const fetchChampions = async () => {
    const res = await fetch(
      "http://ddragon.leagueoflegends.com/cdn/11.10.1/data/en_US/champion.json"
    );
    const data = await res.json();
    return data.data;
  };

  const fetchFreeChampions = async () => {
    let myHeaders = new Headers();
    myHeaders.append("X-Riot-Token", process.env.REACT_APP_RG_API_KEY);

    let requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    const data = await fetch(
      "/api.riotgames.com/lol/platform/v3/champion-rotations",
      requestOptions
    ).then((r) => r.json());
    // const data = await res.json();
    console.log(data);
    return data.freeChampionIds;
  };

  return (
    <div>
      {Object.entries(champions).map(([key, value]) => (
        <Champion
          key={key}
          champion={value}
          urlName={key}
          freeChampions={freeChampions}
        />
      ))}
    </div>
  );
};

export default Champions;
