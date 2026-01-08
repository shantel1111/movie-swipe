export default function Swipe({ movies }) {
  console.log(movies);

  function cleanPlot(plot) {
    console.log(plot);
  }

  return (
    <div className="app-container">
      {/* <div class="film-standby">
        <span class="body-text">Popcorn ready? Let’s find a movie.</span>
      </div> */}
      {movies.map((movie) => (
        <div className="film-search">
          <div className="img-container">
            <img className="film-img" src={movie.Poster} />
            <div className="rating">
              <p className="film-rating">{movie.imdbRating}</p>
              <i className="fa-solid fa-star star-icon"></i>
              <p className="film-year">{movie.Year}</p>
            </div>
          </div>
          <div className="info-container">
            <div className="top-section">
              <p className="film-name">{movie.Title}</p>
            </div>
            <div className="middle-section">
              <p className="film-time">{movie.Runtime}</p>
              <p>{movie.Genre}</p>
            </div>
            <p className="film-desc">{cleanPlot(movie.Plot)}</p>
          </div>
          <div className="bottom-section">
            <i class="fa-solid fa-circle-info info"></i>
            <i class="fa-solid fa-circle-plus"></i>
          </div>
        </div>
      ))}
    </div>
  );
}

// return `<div class="film-boxes">
//         <div class="img-container">
//           <img class="film-img" src=${film.Poster} />
//           <div class="rating">
//               <p class="film-rating">${film.imdbRating}</p>
//               <i class="fa-solid fa-star star-icon"></i>
//               <p class="film-year">${film.Year}</p>
//           </div>
//         </div>
//         <div class="info-container">
//           <div class="top-section">
//             <p class="film-name">${film.Title}</p>
//           </div>
//           <div class="middle-section">
//             <p class="film-time">${film.Runtime}</p>
//             <p>${film.Genre}</p>
//             <div class="watchlist">
//               ${watchListStr}
//             </div>
//           </div>
//           <p class="film-desc">${film.Plot}</p>
//         </div>
//       </div> `;
//     })
//     .join("");
