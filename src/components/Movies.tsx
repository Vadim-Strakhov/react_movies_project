import { FC } from "react";
import { Movie } from "./Movie.tsx";
import { IMovies } from "../models/Types.ts";

export const Movies: FC<IMovies> = (props) => {
  const { movies = [] } = props;

  return (
    <div className="movies">
      {movies.length ? (
        movies.map((movie) => {
          return <Movie key={movie.imdbID} {...movie} />;
        })
      ) : (
        <div>
          <h3>Not found</h3>
        </div>
      )}
    </div>
  );
};
