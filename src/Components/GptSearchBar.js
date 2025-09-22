import React, { useRef} from "react";
import lang from "../utils/LanguageConstants";
import { useDispatch, useSelector } from "react-redux";
import { getMovieRecommendations } from "../utils/PerplexityAi";
import { API_OPTIONS } from "../utils/constants";
import { addGptMovieResult, setLoadingg } from "../utils/GptSlice";

const GptSearchBar = () => {
    
  const dispatch = useDispatch();
  const currentLanguage = useSelector((store) => store.language.language);
  const searchText = useRef(null);
  //   Search Recommended Movies by GPT in TMDB Database
  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1`,
      API_OPTIONS
    );
    const json = await data.json();
    return json.results;
  };
  const handleGptSearchClick = async () => {
    // console.log(searchText.current.value);
    //    Make an Api call to Perplexity API and get movie results
    dispatch(setLoadingg(true));
    const movieRecommendations = await getMovieRecommendations(
      searchText.current.value
    );
    const movieRecommendationsArray = movieRecommendations
      .split(",")
      .map((movie) => movie.trim());
    console.log(movieRecommendationsArray);

    //   For each movie I have to search in TMDB Database

    const promiseArray = movieRecommendationsArray.map((movie) =>
      searchMovieTMDB(movie)
    );

    const TMDBresults = await Promise.all(promiseArray);
    console.log(TMDBresults);
    dispatch(
      addGptMovieResult({
        movieNames: movieRecommendationsArray,
        movieResults: TMDBresults,
      })
    );
    dispatch(setLoadingg(false));
  };

  return (
    <div className="pt-[35%] md:pt-[8%] flex justify-center">
      <form
        className="w-full md:w-1/2 bg-black grid grid-cols-12 rounded-lg "
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className="p-4 m-4 rounded-lg col-span-9"
          placeholder={`${lang[currentLanguage].gptSearchPlaceholder}`}
        />
        <button
          onClick={handleGptSearchClick}
          className="py-2 px-4 m-4 bg-red-600 text-white rounded-lg col-span-3"
        >
          {lang[currentLanguage].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
