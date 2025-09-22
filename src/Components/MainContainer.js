import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  if(!movies)return;
  const mainMovie=movies[0];
  return <div className="md:pt-0 bg-black pt-[38%]">
    <VideoTitle title={mainMovie.title} overview={mainMovie.overview}></VideoTitle>
    <VideoBackground movieId={mainMovie.id}></VideoBackground>
  </div>;
};

export default MainContainer;
