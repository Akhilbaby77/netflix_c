import { API_KEY } from "./constants/constants"
export const trending =`trending/all/week?api_key=${API_KEY}&language=en-US`
export const action =`discover/movie?api_key=${API_KEY}&with_genres=28`
export const comedyMovies = `discover/movie?api_key=${API_KEY}&with_genres=35`;
export const horrorMovies = `discover/movie?api_key=${API_KEY}&with_genres=27`;
export const romanceMovies = `discover/movie?api_key=${API_KEY}&with_genres=10749`;
export const documentaries = `discover/movie?api_key=${API_KEY}&with_genres=99`;
