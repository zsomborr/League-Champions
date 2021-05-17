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

    // const getFreeChampions = async () => {
    //   const championsFromApi = await fetchFreeChampions();
    //   setFreeChampions(championsFromApi);
    // };

    getChampions();
    // getFreeChampions();
  }, []);

  const fetchChampions = async () => {
    const res = await fetch(
      "http://ddragon.leagueoflegends.com/cdn/11.10.1/data/en_US/champion.json"
    );
    const data = await res.json();
    return data.data;
  };

  // const fetchFreeChampions = async () => {
  //   let myHeaders = new Headers();
  //   myHeaders.append(
  //     "X-Riot-Token",
  //     "RGAPI-a0b13f9b-f31e-4516-86d1-b4937bd9a940"
  //   );
  //   myHeaders.append("Origin", "http://localhost:3000");

  //   let requestOptions = {
  //     method: "GET",
  //     headers: myHeaders,
  //     redirect: "follow",
  //   };

  //   const data = await fetch(
  //     "https://eun1.api.riotgames.com/lol/platform/v3/champion-rotations",
  //     requestOptions
  //   ).then((r) => r.json());
  //   // const data = await res.json();
  //   console.log(data);
  //   return data.freeChampionIds;
  // };

  return (
    <tbody>
      {Object.entries(champions).map(([key, value]) => (
        <Champion
          key={key}
          champion={value}
          urlName={key}
          freeChampions={freeChampions}
        />
      ))}
    </tbody>
  );
};

export default Champions;
