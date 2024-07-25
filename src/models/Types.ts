export interface IMovie {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}

export interface IMovies {
  movies: IMovie[];
}

export interface ISearchProps {
  searchMovies: (search: string, type: string) => void;
}
