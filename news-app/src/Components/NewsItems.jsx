import React from "react";

export default function NewsItems(article) {
  console.log(article.article, "articlesarticles");
  return (
    <>
      <div className="card" >
        <img src={article.article.urlToImage} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{article.article.title}</h5>
          <p className="card-text">
           {article.article.description}
          </p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </>
  );
}
