import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideo } from "../utils/movieSlice";
import { useEffect } from "react";

const useMovieTrailer=({movieId})=>{
  const trailerVideo = useSelector((store)=>store.movies.trailerVideo)
    const dispatch=useDispatch();   
    const getMovieVideo = async () => {
        const data = await fetch(
          `https://api.themoviedb.org/3/movie/${movieId}/videos`,
          API_OPTIONS
        );
        const json = await data.json();
    
        const filterData = json.results.filter((video) => video.type === "Trailer");
        const trailer = filterData.length ? filterData[0] : json.results[0];
        console.log(trailer);
        dispatch(addTrailerVideo(trailer));
      };
    
      useEffect(() => {
        !trailerVideo && getMovieVideo();
      }, []);
}

export default useMovieTrailer;