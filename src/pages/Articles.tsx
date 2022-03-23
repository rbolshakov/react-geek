import React, { FC, useEffect, useState } from 'react';
import { apiUrl } from '../constants/Constants';

export const Articles: FC = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => setArticles(data));
  }, []);
  return (
    <>
      <h2>Articles</h2>
      <ul>
        {articles.map((article: any) => (
          <li key={article.id}>{article.title}</li>
        ))}
      </ul>
    </>
  );
};
