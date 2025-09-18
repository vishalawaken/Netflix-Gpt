import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addpopularMovies } from "../utils/movieSlice";
import { useEffect } from "react";

const usePopularMovies=()=>{
    const dispatch=useDispatch();
    const getPopularMovies=async()=>{
        const data = await fetch("https://api.themoviedb.org/3/movie/popular",API_OPTIONS)
        const json = await data.json();
        dispatch(addpopularMovies(json.results))
    }
    useEffect(()=>{
        getPopularMovies();
    },[])
}

export default usePopularMovies;