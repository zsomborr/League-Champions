import { useEffect, useState } from "react";
import Champion from "./Champion.js";

const Champions = () => {
  const [champions, setChampions] = useState([]);

  useEffect(() => {
    const getChampions = async () => {
      const championsFromApi = await fetchChampions();
      setChampions(championsFromApi);
    };

    getChampions();
  }, []);

  const fetchChampions = async () => {
    const res = await fetch(
      "http://ddragon.leagueoflegends.com/cdn/11.10.1/data/en_US/champion.json"
    );
    const data = await res.json();
    return data.data;
  };

  return (
    <div>
      {Object.entries(champions).map(([key, value]) => (
        <Champion key={key} champion={value} urlName={key} />
      ))}
    </div>
  );
};

export default Champions;
