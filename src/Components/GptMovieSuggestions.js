import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";
import LoaderComponent from "./LoaderComponent";


const GptMovieSuggestions = () => {
    const {loading}=useSelector((store)=>store.gpt);
  const gpt = useSelector((store) => store.gpt);
  const { movieResults, movieNames } = gpt;
  if(loading) return <div className=" flex mt-[10%] justify-center items-center text-white">
    <LoaderComponent></LoaderComponent>
  </div>
  if (!movieNames) return null;
  return (
    <div className="p-4 m-4 bg-black text-white bg-opacity-70 ">
      <div>
        <h1>{movieNames[0]}</h1>
        {movieNames.map((movieName, index) => (
          <MovieList title={movieName} movies={movieResults[index]}></MovieList>
        ))}
      </div>
    </div>
  );
};

export default GptMovieSuggestions;
