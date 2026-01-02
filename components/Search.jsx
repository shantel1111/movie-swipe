export default function Swipe({ movies }) {
  console.log(movies);

  return (
    <>
      {movies.map((movie) => (
        <div>
          <div>
            <img src={movie.Poster} />
            <div>
              <p>{movie.imdbRating}</p>
              <i className="fa-solid fa-star star-icon"></i>
              <p>{movie.Year}</p>
            </div>
          </div>
          <div>
            <div>
              <p>{movie.Title}</p>
            </div>
            <div>
              <p>{movie.Runtime}</p>
              <p>{movie.Genre}</p>
            </div>
            <p>{movie.Plot}</p>
          </div>
        </div>
      ))}
    </>
  );
}
