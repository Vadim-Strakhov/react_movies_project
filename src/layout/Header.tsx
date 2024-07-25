export const Header = () => {
  return (
    <nav className="purple darken-4">
      <div className="nav-wrapper">
        <a
          href="https://vadim-strakhov.github.io/react_movies_project/"
          className="brand-logo"
        >
          React Movies
        </a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <a
              href="https://github.com/Vadim-Strakhov/react_movies_project"
              target="_blank"
              rel="noreferrer"
            >
              Repo
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
