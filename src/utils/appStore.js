import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import moviesReducer from "./movieSlice";
import trailerReducer from "./movieSlice";
import gptReducer from "./GptSlice";
import languageReducer from "./LanguageSlice";

const appStore = configureStore({
  reducer: {
    user: userReducer,
    movies: moviesReducer,
    trailer: trailerReducer,
    gpt:gptReducer,
    language:languageReducer,
  },
});

export default appStore;
