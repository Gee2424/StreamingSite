window.onload = function() {
    const movieListDiv = document.getElementById('movieList');
    const moviePlayerDiv = document.getElementById('moviePlayer');
  
    // Fetch the list of latest movies
    fetch('https://vidsrc.me/movies/latest/page-1.json')
      .then(response => response.json())
      .then(data => {
        console.log(data); // Log the API response to the console
  
        // Check if data.movies exists before trying to use it
        if (data.movies) {
          // Display the list of movies
          data.movies.forEach(movie => {
            const movieButton = document.createElement('button');
            movieButton.textContent = movie.title;
            movieButton.addEventListener('click', () => {
              streamMovie(movie.imdb);
            });
            movieListDiv.appendChild(movieButton);
          });
        } else {
          console.error('Error: data.movies is undefined');
        }
      })
      .catch(error => console.error('Error:', error));
  
    function streamMovie(imdb) {
      // Use the VidSrc API to get the streaming URL
      const streamingUrl = `https://vidsrc.me/embed/movie?imdb=${imdb}`;
  
      moviePlayerDiv.innerHTML = '';
      const iframe = document.createElement('iframe');
      iframe.src = streamingUrl;
      moviePlayerDiv.appendChild(iframe);
    }
  }
  