import styled, { keyframes } from 'styled-components';
import PropTypes from 'prop-types';

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

const MovieContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
  padding: 10px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  animation: ${fadeIn} 0.5s ease-in-out;
  transition: transform 0.2s ease-in-out, background-color 0.3s;

  &:hover {
    transform: scale(1.03);
    background-color: #111;
  }

  img {
    width: 200px;
    height: 300px;
    object-fit: cover;
    border-radius: 6px;
    margin-bottom: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  h3 {
    font-size: 18px;
    margin: 5px 0;
    color: #fff;
    text-align: center;
  }

  h4 {
    font-size: 12px;
    margin: 0;
    color: #ccc;
    text-align: center;
  }
  @media (max-width: 768px) {
    img {
      width: 100px;
      height: 150px;
    }
    h3 {
      font-size: 14px;
    }
    h2 {
      font-size: 8px;
    }
  }
`;

const MovieCard = ({ movie }) => {
  return (
    <MovieContainer className="movie-card" key={movie.id}>
      <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
      <h3>{movie.title || '-'}</h3>
      <h4> {movie.vote_average || '-'}</h4>
    </MovieContainer>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    poster_path: PropTypes.string.isRequired,
    vote_average: PropTypes.any,
  }).isRequired,
};

export default MovieCard;
