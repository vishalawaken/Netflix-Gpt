import { createPerplexity } from "@ai-sdk/perplexity";
import { generateText } from "ai";
import { PERPLEXITY_API_KEY } from "./constants";

const perplexity = createPerplexity({
  apiKey: PERPLEXITY_API_KEY,
});

export const getMovieRecommendations = async (query) => {
  try {
    const { text } = await generateText({
      model: perplexity("sonar-pro"),
      prompt: `Act as a Movie Recommendation system and suggest some movies for the user query: ${query}, only give me names of 5 movies, coma separated like the example result given ahead. Example Result: Movie1, Movie2, Movie3, Movie4, Movie5`,
    });

    return text;
  } catch (error) {
    console.error("Error with Perplexity API:", error);
    throw error;
  }
};
