const tmdbKey = '';
const tmdbBaseUrl = '';
const playBtn = document.getElementById('playBtn');

const getGenres = async () => {
  try{
  const genreRequestEndpoint= '/genre/movie/list';
  const response= await fetch('https://api-to-call.com/endpoint');
 // const requestParams= await fetch('https://api-to-call.com/endpoint');
 if(response.ok){
   const jsonResponse= await response.json();
   console.log(jsonResponse);
   const genre=jsonResponse.genre;
   return genre;
 }
  const urlToFetch=`${tmdbBaseUrl}${genreRequestEndpoint}${requestParams}`;
  }catch(error){
    console.log(error);
  }
};

const getMovies = () => {
  const selectedGenre = getSelectedGenre();
  const discoverMovieEndpoint= '/discover/movie';
  const requestParams=
};

const getMovieInfo = () => {

};

// Gets a list of movies and ultimately displays the info of a random movie from the list
const showRandomMovie = () => {
  const movieInfo = document.getElementById('movieInfo');
  if (movieInfo.childNodes.length > 0) {
    clearCurrentMovie();
  };

};

getGenres().then(populateGenreDropdown);
playBtn.onclick = showRandomMovie;
