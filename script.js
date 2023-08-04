// JavaScript
window.onload = function() {
  const movieListDiv = document.getElementById('movieList');
  const moviePlayerDiv = document.getElementById('moviePlayer');

  // Fetch the list of latest movies
  fetchLatestMovies()
    .then(movies => {
      if (movies && movies.length > 0) {
        displayMovieList(movies);
      } else {
        console.error('Error: No movies found');
      }
    })
    .catch(error => console.error('Error:', error));

  async function fetchLatestMovies() {
    const response = await fetch('https://vidsrc.me/movies/latest/page-1.json');
    const data = await response.json();
    return data || [];
  }

  function displayMovieList(movies) {
    movies.forEach(movie => {
      const movieButton = createMovieButton(movie.title);
      movieButton.addEventListener('click', () => {
        streamMovie(movie.imdb);
      });
      movieListDiv.appendChild(movieButton);
    });
  }

  function createMovieButton(title) {
    const movieButton = document.createElement('button');
    movieButton.textContent = title;
    return movieButton;
  }

  function streamMovie(imdb) {
    const streamingUrl = `https://vidsrc.me/embed/movie?imdb=${imdb}`;

    moviePlayerDiv.innerHTML = '';
    const iframe = document.createElement('iframe');
    iframe.src = streamingUrl;
    moviePlayerDiv.appendChild(iframe);
  }
};
