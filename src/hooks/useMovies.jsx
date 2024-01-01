import { useEffect, useState, useCallback } from 'react';
import axios from 'axios';

const useMovies = (currentYear, currentPage, genreId) => {
  const [loading, setLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  const [totalPages, setTotalPages] = useState(0);

  const fetchMovies = useCallback(async () => {
    try {
      setLoading(true);
      const response = await axios.get('https://api.themoviedb.org/3/discover/movie', {
        params: {
          api_key: import.meta.env.VITE_API_KEY,
          sort_by: 'popularity.desc',
          primary_release_year: currentYear,
          page: currentPage,
          'vote_count.gte': 100,
          with_genres: genreId !== 'all' ? genreId : '',
        },
      });
      setMovies(response?.data?.results || []);
      setTotalPages(response?.data?.total_pages || 0);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  }, [currentYear, currentPage, genreId]);

  useEffect(() => {
    fetchMovies();
  }, [fetchMovies]);

  return { loading, movies, totalPages };
};

export default useMovies;
