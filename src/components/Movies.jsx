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
				<h4>
					Упс, что-то пошло не так... <br />
					Уже исправляю...
				</h4>
			)}
		</div>
	);
};
