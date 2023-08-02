document.getElementById('loadMovies').addEventListener('click', function() {
    fetch('https://vidsrc.me/movies/latest/page-1.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        const movieList = document.getElementById('movieList');
        movieList.innerHTML = '';  // clear the movie list
  
        // Loop over each movie and append it to the movie list
        data.movies.forEach(movie => {
          const movieItem = document.createElement('div');
          movieItem.textContent = movie.title;
          movieList.appendChild(movieItem);
        });
      })
      .catch(error => {
        console.error('There has been a problem with your fetch operation:', error);
      });
  });
  