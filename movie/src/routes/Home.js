import { useEffect, useState } from "react";
import Movie from '../components/Movie';


function Home (){
  const[loading, setLoading] = useState(true);
  const[movies, setMovies] = useState([]);
  const getMovies = async () => {
    const res = await fetch("https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year");
    const json = await res.json();
    setMovies(json.data.movies);
    setLoading(false);
  };

  useEffect(()=>{
    getMovies();
  },[]);

  return(
    <div>
      {
        loading? <h1>Loading...</h1> : <div>{movies.map((item)=>(
        <Movie 
          key ={item.id}
          id={item.id}
          medium_cover_image={item.medium_cover_image}
          title={item.title}
          year={item.year}
          summary={item.summary} 
          genres={item.genres} />))}</div>
      
      }
    </div>
  )
}

export default Home;