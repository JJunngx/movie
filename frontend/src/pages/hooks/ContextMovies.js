import React, { useState } from "react";

const ContextMovies = React.createContext(null);
export default ContextMovies;

//cung cap gia tri de show or hide chi tiet phim cua search vaf browse
export const ContextMoviesProvider = ({ children }) => {
  const [movie, setMovie] = useState([]);

  const [detailsearch, setDetailSearch] = useState([]);
  const [titleList, settitleList] = useState([]);

  const [showTrailer, setShowTrailer] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  //show or hide  (details trailer youtube ...)
  const showTrailerHandler = (movieId) => {
    if (movie.id === movieId) {
      setShowTrailer(!showTrailer);
    } else if (movie.id !== movieId) {
      setShowTrailer(true);
    } else {
      setShowTrailer(false);
    }
  };
  const showSearchHandler = (movieId) => {
    if (detailsearch.id === movieId) {
      setShowSearch(!showSearch);
    } else if (movie.id !== movieId) {
      setShowSearch(true);
    } else {
      setShowSearch(false);
    }
  };

  return (
    <ContextMovies.Provider
      value={{
        // brwose detail
        movie,
        setMovie,
        showTrailer,
        setShowTrailer,
        showTrailerHandler,
        titleList,
        settitleList,
        //search detail
        detailsearch,
        setDetailSearch,
        showSearch,
        setShowSearch,
        showSearchHandler,
      }}
    >
      {children}
    </ContextMovies.Provider>
  );
};
