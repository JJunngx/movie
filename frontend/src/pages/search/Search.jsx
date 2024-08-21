import React, { useCallback, useContext, useRef, useState } from "react";
import NavBar from "../browser/NavBar";
import SearchForm from "./SearchForm";
import ResultList from "./ResultsList";
import useHttp from "../hooks/useHttp";
import ContextMovies from "../hooks/ContextMovies";
import MovieDetail from "../browser/MovieDetail";
import classes from "../browser/Banner.module.css";
const Search = () => {
  const inputSearch = useRef(null);
  const { detailsearch, showSearch } = useContext(ContextMovies);
  const { searchMovies, searchResults, error } = useHttp();

  const searchHandler = useCallback(
    (event) => {
      event.preventDefault();
      const enteredSearch = inputSearch.current.value;
      if (!enteredSearch) {
        alert("please enter data");
        return;
      }
      searchResults(enteredSearch);
    },
    [inputSearch]
  );

  const resetForm = useCallback(() => {
    inputSearch.current.form.reset();
  }, [inputSearch]);

  return (
    <div className={`text-white ${classes.marginBottom}`}>
      <NavBar />
      <SearchForm
        ref={inputSearch}
        onSearchHandler={searchHandler}
        onResetForm={resetForm}
      />
      <ResultList searchMovies={searchMovies} error={error} />

      {showSearch && <MovieDetail movie={detailsearch} />}
    </div>
  );
};

export default Search;
