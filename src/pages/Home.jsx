import { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import MovieCard from '../components/MovieCard';
import useGenres from '../hooks/useGenres';
import useMovies from '../hooks/useMovies';
import Genre from '../components/Genre';
import Navbar from '../components/Navbar';

const Home = () => {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [currentPage, setCurrentPage] = useState(1);
  const [allMovies, setAllMovies] = useState({}); // Maintain movies grouped by year

  const { loading: genreLoading, genres, selectedGenre, handleGenreChange } = useGenres(currentYear, currentPage);
  const { loading: movieLoading, movies } = useMovies(currentYear, currentPage, selectedGenre);

  const handleScroll = () => {
    const container = document.querySelector('.App');
    if (!container) return;

    const scrolledToBottom = container.scrollTop + container.clientHeight >= container.scrollHeight;
    const scrolledToTop = container.scrollTop === 0;

    if (scrolledToBottom && !movieLoading) {
      setCurrentYear(currentYear + 1);
      setCurrentPage(1);
    } else if (scrolledToTop && !movieLoading) {
      setCurrentYear(currentYear - 1);
      setCurrentPage(1);
    }
  };

  useEffect(() => {
    if (!movieLoading && movies.length > 0) {
      // Group movies by year
      setAllMovies((prevMovies) => ({
        ...prevMovies,
        [currentYear]: [...(prevMovies[currentYear] || []), ...movies],
      }));
    }
  }, [movieLoading, movies, currentYear]);
  useEffect(() => {
    setAllMovies({}); // Resetting allMovies to an empty object
  }, [selectedGenre]);

  return (
    <AppContainer className="App" onScroll={handleScroll}>
      <Navbar />
      <Genre
        genres={genres}
        loading={genreLoading}
        selectedGenre={selectedGenre}
        handleGenreChange={handleGenreChange}
      ></Genre>
      {Object.keys(allMovies).map((year) => (
        <div key={year}>
          <Header>{year}</Header>
          <MovieContainer>
            {allMovies[year].length > 0 ? (
              allMovies[year].map((movie) => (
                <StyledMovieCard key={movie.id} movie={movie}>
                  <MovieCard movie={movie} />
                </StyledMovieCard>
              ))
            ) : (
              <div>No Movies Available</div>
            )}
          </MovieContainer>
        </div>
      ))}
    </AppContainer>
  );
};

const Header = styled.header`
  font-size: 24px;
  font-weight: bold;
  color: #fff;
  text-align: left;
  padding: 20px 0;
  padding-left: 28px;
  @media (max-width: 768px) {
    font-size: 18px;
    padding: 10px 0px;
    padding-left: 15px;
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;
const StyledMovieCard = styled(MovieCard)`
  animation: ${fadeIn} 0.5s ease-in-out;
  background-color: #333;
  border-radius: 8px;
  padding: 10px;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
`;

const MovieContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
  padding: 20px;
  background-color: #111;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    justify-items: center;
    & > * {
      max-width: 300px;
      width: 100%;
      margin-bottom: 20px;
    }
  }
`;

const AppContainer = styled.div`
  background-color: #111;
  color: #fff;
  overflow-y: scroll;
  height: 100vh;
`;

export default Home;
