import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    trailerVideo: null,
    popularMovies:null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addTrailerVideo: (state, action) => {
      state.trailerVideo = action.payload;
    },
    addpopularMovies:(state,action) => {
      state.popularMovies=action.payload
    }
  },
});

export const { addNowPlayingMovies, addTrailerVideo,addpopularMovies } = movieSlice.actions;
export default movieSlice.reducer;
