window.onload = function() {
    // Replace with your own list of movies
    const movies = ['Movie1', 'Movie2', 'Movie3'];
  
    const movieListDiv = document.getElementById('movieList');
    const moviePlayerDiv = document.getElementById('moviePlayer');
  
    // Display the list of movies
    movies.forEach(movie => {
      const movieButton = document.createElement('button');
      movieButton.textContent = movie;
      movieButton.addEventListener('click', () => {
        streamMovie(movie);
      });
      movieListDiv.appendChild(movieButton);
    });
  
    function streamMovie(movie) {
      // Use the VidSrc API to get the streaming URL
      // This is a simplified example and you'll need to replace with the actual API call
      const streamingUrl = `https://api.vidsrc.me/link/${movie}`;
  
      moviePlayerDiv.innerHTML = '';
      const iframe = document.createElement('iframe');
      iframe.src = streamingUrl;
      moviePlayerDiv.appendChild(iframe);
    }
  }
  