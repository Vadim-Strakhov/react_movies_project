export const Footer = () => {
    return (
        <footer className='page-footer green lighten-4'>
            <div className='footer-copyright'>
                <div className='container'>
                    © {new Date().getFullYear()} Copyright Text
                    <a
                        className='grey-text text-lighten-4 right'
                        href='https://github.com/Vadim-Strakhov/react_movies_project'
                    >
                        Repo
                    </a>
                </div>
            </div>
        </footer>
    );
};
