import { FC, useState } from "react";
import { ISearchProps } from "../models/Types";

export const Search: FC<ISearchProps> = (props) => {
  const { searchMovies = Function.prototype } = props;

  const [search, setSearch] = useState("");
  const [type, setType] = useState("all");

  const handleKey = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      searchMovies(search, type);
    }
  };

  const handleFilter = (event: React.ChangeEvent<HTMLInputElement>) => {
    setType(event.target.dataset.type || "all");
    searchMovies(search, event.target.dataset.type);
  };

  return (
    <>
      <div className="row">
        <div className="input-field col s12">
          <input
            placeholder="search"
            type="search"
            className="validate"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={handleKey}
          />
          <button
            className="btn search-btn purple darken-4"
            onClick={() => searchMovies(search, type)}
          >
            Search
          </button>
        </div>
      </div>
      <div className="row">
        <div className="col s4">
          <label>
            <input
              className="with-gap purple darken-4"
              name="type"
              type="radio"
              data-type="all"
              onChange={handleFilter}
              checked={type === "all"}
            />
            <span>All</span>
          </label>
        </div>
        <div className="col s4">
          <label>
            <input
              className="with-gap purple darken-4"
              name="type"
              type="radio"
              data-type="movie"
              onChange={handleFilter}
              checked={type === "movie"}
            />
            <span>Movies Only</span>
          </label>
        </div>
        <div className="col s4">
          <label>
            <input
              className="with-gap purple darken-4"
              name="type"
              type="radio"
              data-type="series"
              onChange={handleFilter}
              checked={type === "series"}
            />
            <span>Series Only</span>
          </label>
        </div>
      </div>
    </>
  );
};
