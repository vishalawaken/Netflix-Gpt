import React, { useEffect } from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import SecondaryContainer from "./SecondaryContainer";
import MainContainer from "./MainContainer";


const Browse = () => {
  useNowPlayingMovies();
 
  return (
    <div>
      <Header></Header>
      <MainContainer></MainContainer>
      <SecondaryContainer></SecondaryContainer>
      {/* MainContainer
          - Video Background 
          - Video Title

        Secondary Container
          - MovieList * n
            - Cards * n
       */}
    </div>
  );
};

export default Browse;
