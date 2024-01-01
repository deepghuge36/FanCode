import PropTypes from 'prop-types';
import styled from 'styled-components';

const Genre = ({ genres, selectedGenre, handleGenreChange }) => {
  return (
    <GenreContainer>
      <div>
        {genres?.map((genre) => (
          <div key={genre.id} style={{ display: 'inline-block' }}>
            <GenreButton isSelected={selectedGenre === genre.id} onClick={() => handleGenreChange(genre.id)}>
              {genre.name}
            </GenreButton>
          </div>
        ))}
      </div>
    </GenreContainer>
  );
};
const GenreContainer = styled.div`
  padding: 20px 0;
  background-color: #141414;
  color: #fff;
  overflow-x: auto;
  white-space: nowrap;
  position: sticky;
  top: 50px;
  z-index: 998;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 768px) {
    overflow-x: scroll;
    scrollbar-width: none;
    -ms-overflow-style: none;
    &::-webkit-scrollbar {
      display: none;
    }
    padding-left: 10px;
  }
`;

const GenreButton = styled.button`
  margin: 5px;
  padding: 8px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;
  font-weight: bold;
  background-color: ${({ isSelected }) => (isSelected ? '#E50914' : '#444')};
  color: ${({ isSelected }) => (isSelected ? '#fff' : '#fff')};
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #666;
  }
  @media (max-width: 768px) {
    padding: 5px 10px;
  }
`;

Genre.propTypes = {
  loading: PropTypes.bool.isRequired,
  genres: PropTypes.array.isRequired,
  selectedGenre: PropTypes.any,
  handleGenreChange: PropTypes.func.isRequired,
};

export default Genre;
