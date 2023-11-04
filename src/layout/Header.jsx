export const Header = () => {
	return (
		<nav className='green darken-1'>
			<div className='nav-wrapper'>
				<a
					href='https://github.com/Vadim-Strakhov/react_movies_project'
					className='brand-logo'
				>
					React Movies
				</a>
				<ul
					id='nav-mobile'
					className='right hide-on-med-and-down'
				>
					<li>
						<a href='https://github.com/Vadim-Strakhov/react_movies_project'>Repo</a>
					</li>
				</ul>
			</div>
		</nav>
	);
};
