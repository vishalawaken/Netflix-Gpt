import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
    const movies=useSelector((store)=>store.movies);
  return (
    <div className=" bg-black">
      <div className="-mt-52 pl-12 relative z-20">
      <MovieList title={`Now Playing`} movies={movies?.nowPlayingMovies}></MovieList>
      <MovieList title={`Popular`} movies={movies?.popularMovies}></MovieList>
      <MovieList title={`Trending`} movies={movies?.nowPlayingMovies}></MovieList>
      <MovieList title={`Upcoming`} movies={movies?.nowPlayingMovies}></MovieList>
      <MovieList title={`Top Rated`} movies={movies?.nowPlayingMovies}></MovieList>
      </div>
    </div>
  );
};

export default SecondaryContainer;
