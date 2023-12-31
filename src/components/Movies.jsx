import { Movie } from './Movie';

export const Movies = (props) => {
  const { movies = [] } = props;

  return (
    <div className='movies'>
      {movies.length ? (
        movies.map((movie) => {
          return (
            <Movie
              key={movie.imdbID}
              {...movie}
            />
          );
        })
      ) : (
        <div>
          <h3>Not found</h3>
        </div>
      )}
    </div>
  );
};
