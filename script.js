window.onload = function() {
    const movieListDiv = document.getElementById('movieList');
    const moviePlayerDiv = document.getElementById('moviePlayer');
  
    // Fetch the list of latest movies
    fetch('https://vidsrc.me/movies/latest/page-1.json')
      .then(response => response.json())
      .then(data => {
        // Split the string into an array of movies
        const movies = data.ContentChunk.split('title');
        
        // Display the list of movies
        movies.forEach(movie => {
          const movieButton = document.createElement('button');
          movieButton.textContent = movie;
          movieButton.addEventListener('click', () => {
            // Extract the imdb id from the movie string
            const imdb = movie.match(/imdbid(.*?)embedurl/)[1];
            streamMovie(imdb);
          });
          movieListDiv.appendChild(movieButton);
        });
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
  