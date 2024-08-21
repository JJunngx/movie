import { useCallback, useEffect, useState } from "react";
import axios from "axios";

const API_KEY = "211caba8f505c4c2098b87270ac30332";
const http = `https://movie-j0g3.onrender.com`;
const requests = {
  fetchtmdb: `${http}/api/movies`,
  fetchTrending: `/trending`,
  fetchTopRated: `/top-rate`,
};

const useHttp = () => {
  const [error, setError] = useState(null);

  const [trendMovies, setTrendMovies] = useState([]);
  const [topRateMovies, setTopRateMovies] = useState([]);

  // lấy dữ liệu cho browse (all)
  useEffect(() => {
    const fetchData = async () => {
      setError(null);
      try {
        const [trendResults, topRateResults] = await Promise.all([
          axios.get(
            `${requests.fetchtmdb}${requests.fetchTrending}?token=RYoOcWM4JW`
          ),
          axios.get(
            `${requests.fetchtmdb}${requests.fetchTopRated}?token=RYoOcWM4JW`
          ),
        ]);

        //luu du lieu vao useState

        setTrendMovies(trendResults.data.results);
        setTopRateMovies(topRateResults.data.results);
      } catch (error) {
        setError(error);
      }
    };
    fetchData();
  }, []);

  // get data detail trailer youtube
  const [trailerMovies, setTrailerMovies] = useState([]);

  const fetchDataTrailer = async (id) => {
    try {
      const response = await axios.post(
        `${http}/api/movies/video?filmId=${id}&token=RYoOcWM4JW`,
        { filmId: id },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = response.data;
      setTrailerMovies(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // get data search movies

  const [genre, setGenre] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `${http}/api/movies/discover?genre=12&token=RYoOcWM4JW`
      );

      setGenre(response.data);
    };

    fetchData();
  }, []);

  const [searchMovies, setSearchMovies] = useState([]);
  const searchResults = useCallback(async (term) => {
    try {
      const search = await axios.post(
        `${requests.fetchtmdb}/search?token=RYoOcWM4JW`,
        {
          keyword: term,
        }
      );

      setSearchMovies(search.data);
    } catch (error) {
      setError(error);
    }
  }, []);
  return {
    //browse.jsx
    trendMovies,
    topRateMovies,
    genre,
    trailerMovies,
    fetchDataTrailer,
    //search.jsx
    error,
    searchMovies,
    searchResults,
  };
};

export default useHttp;
