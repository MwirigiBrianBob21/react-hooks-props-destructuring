import React from "react";


// Destructuring the props to keys, title, posterSrc, and genres. This is creating variables with the samme names
function MovieCard({
  title,
  // telling our MovieCard component to use a default value of posterSrc if it is not provided.
  // the default value is declared in the MovieCard- the child component. 
  // In React, components should encapsulate the functionality that they can and should be responsible for
  posterSrc = "https://m.media-amazon.com/images/M/MV5BOTJjNzczMTUtNzc5MC00ODk0LWEwYjgtNzdiOTEyZmQxNzhmXkEyXkFqcGdeQXVyNzMzMjU5NDY@._V1_UY268_CR1,0,182,268_AL_.jpg",
  genres,
}) {
  return (
    <div className="movie-card">
      <img src={posterSrc} alt={title} />
      <h2>{title}</h2>
      <small>{genres.join(", ")}</small>
    </div>
  );
}

export default MovieCard;

// destructuring helps the returned elements easier to read, without the props being everywhere
// Destructuring also makes it easier to tell what a component expects.
// In destructuring, we can provide a default value for any prop keys we want. 
