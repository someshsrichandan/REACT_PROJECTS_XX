// src/components/NewsFeed.js

import React, { useEffect, useState } from 'react';
import { fetchNews } from '../services/apiService';

const NewsFeed = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const getNews = async () => {
      const newsData = await fetchNews();
      setNews(newsData.articles);
    };
    getNews();
  }, []);

  return (
    <div>
      <h2>Crypto News</h2>
      <ul>
        {news.map((article, index) => (
          <li key={index}>
            <a href={article.url} target="_blank" rel="noopener noreferrer">{article.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NewsFeed;
