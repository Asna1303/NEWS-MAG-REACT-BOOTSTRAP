import { useEffect, useState } from "react"


const Newsboard = () => {
    const [articles,setArticles]=useState([]);
    useEffect(()=>{
        let url= `https://newsapi.org/v2/top-headlines?country=us&apiKey=d2ae75dc41e34ebfa4bde1b6d7895927`;
    })
  return (
    <div>
      <h2 className="text-center">Latest <span className="badge bg-danger">News</span></h2>
    </div>
  )
}

export default Newsboard
