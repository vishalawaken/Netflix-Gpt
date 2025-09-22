import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addpopularMovies } from "../utils/movieSlice";
import { useEffect } from "react";

const usePopularMovies=()=>{
    const  popularMovies=useSelector((store)=>store.movies.popularMovies)
    const dispatch=useDispatch();   
    const getPopularMovies=async()=>{
        const data = await fetch("https://api.themoviedb.org/3/movie/popular",API_OPTIONS)
        const json = await data.json();
        dispatch(addpopularMovies(json.results))
    }
    useEffect(()=>{
        !popularMovies && getPopularMovies();
    },[])
}

export default usePopularMovies;