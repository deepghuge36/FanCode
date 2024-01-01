import { useCallback, useEffect, useState } from 'react';
import axios from 'axios';

const useGenres = (currentYear, currentPage) => {
  const [loading, setLoading] = useState(false);
  const [genres, setGenres] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState('all');

  const fetchGenres = useCallback(async () => {
    try {
      setLoading(true);
      const response = await axios.get('https://api.themoviedb.org/3/genre/movie/list?language=en', {
        params: {
          sort_by: 'popularity.desc',
          primary_release_year: currentYear,
          page: currentPage,
          api_key: import.meta.env.VITE_API_KEY,
        },
      });
      setGenres([{ id: 'all', name: 'All' }, ...response.data.genres]);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  }, [currentYear, currentPage]);

  useEffect(() => {
    fetchGenres();
  }, [fetchGenres]);

  const handleGenreChange = (genreId) => {
    setSelectedGenre(genreId);
  };

  return { loading, genres, selectedGenre, handleGenreChange };
};

export default useGenres;
