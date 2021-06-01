import { useEffect, useState } from "react";
import Champion from "./Champion.js";
import { API_BASE_URL } from "../constants";

const Champions = (props) => {
  const [champions, setChampions] = useState([]);
  const [freeChampions, setFreeChampions] = useState([]);

  useEffect(() => {
    const getChampions = async () => {
      const championsFromApi = await fetchChampions();
      const search = props.location.search;
      const params = new URLSearchParams(search);
      const tag = params.get("tag");
      let taggedChampions = [];
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
      const championsFromApi = await fetchFreeChampions();
      setFreeChampions(championsFromApi);
    };
    getFreeChampions();
  }, []);

  const fetchFreeChampions = async () => {
    const data = await fetch(`${API_BASE_URL}/free`).then((r) => r.json());
    return data.freeChampionIds;
  };

  const fetchChampions = async () => {
    const res = await fetch(`${API_BASE_URL}/champions`);
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
