import { useEffect, useState } from "react"
import Newsitem from "./Newsitem";


const Newsboard = () => {
    const [articles,setArticles]=useState([]);
    useEffect(()=>{
        let url= `https://newsapi.org/v2/top-headlines?country=us&apiKey=d2ae75dc41e34ebfa4bde1b6d7895927=${import.meta.env.API_KEY}`;
    fetch(url).then(response=>response.json()).then(data=>setArticles(data.articles));
    
},[])

  return (
    <div>
      <h2 className="text-center">Latest <span className="badge bg-danger">News</span></h2>
      {articles.map((news,index)=>{
        return <Newsitem key={index} title={news.title} description={news.description} src={urlToImage} url={news.url}/>
      })}
    </div>
  )
}

export default Newsboard
