const API_KEY = import.meta.env.VITE_API_KEY;
const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language-en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchTopRatedMovies: `/movie/top_rated?api_key=${API_KEY}&language-en-US`,
  fetchActionMovies:
    // `/discover/tv?api_key=${API_KEY}&with_genres=28`,
    `/discover/movie?api_key=${API_KEY}&include_adult=false&include_video=false&sort_by=popularity.desc&with_genres=28`,
  fetchComedyMovies: `/discover/tv?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomanceMovies: `/discover/tv?api_key=${API_KEY}&with_genres=10749`,
  fetchAnimation: `/discover/movie?api_key=${API_KEY}&include_adult=false&include_video=false&sort_by=popularity.desc&with_genres=16`,

  fetchDocumentaries: `/discover/tv?api_key=${API_KEY}&with_genres=99`,
  fetchKids: `/discover/tv?api_key=${API_KEY}&with_genres=10762`,
  // fetchTvShow: `/discover/movie?api_key=${API_KEY}&with_genres=1`,
  //  `/discover/tv?api_key=${API_KEY}&with_genres=1`,
};

export default requests;
