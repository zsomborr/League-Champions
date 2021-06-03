import React, { useState, useEffect } from "react";
import { API_BASE_URL } from "../constants";
import SingleNew from "./SingleNews";

const News = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const getNews = async () => {
      const newsFromApi = await fetchNews();
      setNews(newsFromApi);
    };
    getNews();
  }, []);

  const fetchNews = async () => {
    const res = await fetch(`${API_BASE_URL}/news`);
    const data = await res.json();
    return data;
  };

  return (
    <div>
      {news.map((singleNews) => (
        <SingleNew key={singleNews.id} singleNews={singleNews} />
      ))}
    </div>
  );
};

export default News;
