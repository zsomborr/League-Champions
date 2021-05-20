import { useEffect, useState } from "react";
import Champion from "./Champion.js";

const Champions = (props) => {
  const [champions, setChampions] = useState([]);
  const [freeChampions, setFreeChampions] = useState([]);

  useEffect(() => {
    const getChampions = async () => {
      const championsFromApi = await fetchChampions();
      const search = props.location.search;
      let taggedChampions = [];
      const params = new URLSearchParams(search);
      const tag = params.get("tag");
      if (tag !== null) {
        Object.entries(championsFromApi).map((e) =>
          e[1].tags.map((t) => t === tag && taggedChampions.push(e[1]))
        );
      } else {
        taggedChampions = Object.entries(championsFromApi).map((e) => e[1]);
      }
      setChampions(taggedChampions);
    };

    getChampions();
  }, [props.location.search]);

  useEffect(() => {
    const getFreeChampions = async () => {
      // const championsFromApi = await fetchFreeChampions();
      const championsFromApi = [
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
      setFreeChampions(championsFromApi);
    };
    getFreeChampions();
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
      {champions.map((champion) => (
        <Champion
          key={champion.id}
          champion={champion}
          freeChampions={freeChampions}
        />
      ))}
    </div>
  );
};

export default Champions;
