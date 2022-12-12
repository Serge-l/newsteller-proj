import React, { useState, useEffect } from "react";
import NewsItem from "./NewsItem";
import axios from "axios";

function NewsList() {


  const apiKey = '2e73733d1946420582aa6a2bd5e1d6e6'

  const [articles, setArticles] = useState([]);


  useEffect(() => {
    const getArticles = async () => {
      const res = await axios.get (
        `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${apiKey}`
      );
      setArticles(res.data.articles);
      console.log(res)
    }
    getArticles()
  },[])



  
  return (
    <div className="item-container">
    <h1 className="news-feed">News Feed</h1>
<div className="itemBox">
  {articles.map(({title, description, url, urlToImage}) => (
    <NewsItem title={title}
     description={description}
     url={url}
     urlToImage={urlToImage}
    />
  ))}
</div>
</div>
  );
}

export default NewsList;



// {data.articles ? (
//   <h1>{data.articles[0].title}</h1>
// ) : null }
// <div className="sp">{data.articles ? (
//   <h1>{data.articles[0].description}</h1>
// ) : null }</div>