import PropTyeps from "prop-types";
import {Link} from "react-router-dom";

function Movie(prop){
  return (
    <div>
      <img src={prop.medium_cover_image} alt={prop.title}/>
      <h2>
        <Link to={`/movie/${prop.id}`}>{prop.title} ({prop.year})</Link>
      </h2>
      <p>{prop.summary}</p>
        <ul>
          {prop.genres.map((g) =><li key={g}>{g}</li>)}
        </ul>
      
      </div>
  )
}

Movie.PropTyeps = {
  id:PropTyeps.number,
  medium_cover_image: PropTyeps.string.isRequired,
  title:PropTyeps.string.isRequired,
  summary:PropTyeps.string.isRequired,
  genres:PropTyeps.arrayOf(PropTyeps.string).isRequired,
  year : PropTyeps.number.isRequired
}
export default Movie;