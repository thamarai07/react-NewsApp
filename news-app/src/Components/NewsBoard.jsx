import React, { useEffect, useState } from "react";
import NewsItems from "./NewsItems";

export default function NewsBoard() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${
      import.meta.env.VITE_API_HEADLINE
    }`;

    const fetchData = async () => {
      try {
        const response = await fetch(url, { signal });
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        console.log(response, "response");
        const data = await response.json();
        setArticles(data.articles); // Fallback in case `data.articles` is undefined
      } catch (error) {
        if (error.name !== "AbortError") {
          console.error("Fetch error:", error);
        }
      }
    };

    fetchData();

    return () => {
      controller.abort();
    };
  }, []);


  return (
    <>
      <h2 className="text-center">
        Latest <span className="badge bg-danger">News</span>
      </h2>
      <ul>
        {articles.map((article, index) => (
            <li key={index}>
            <NewsItems article={article}/>
            </li>
        ))}
      </ul>
    </>
  );
}
