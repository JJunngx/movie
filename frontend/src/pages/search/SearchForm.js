import React, { forwardRef } from "react";
import SearchIcon from "../browser/SearchIcon";

const SearchForm = forwardRef((props, ref) => {
  return (
    <div
      className="container d-flex align-items-center justify-content-center"
      style={{ marginTop: "100px" }}
    >
      <form className="bg-white w-50 " onSubmit={props.onSearchHandler}>
        <div className="d-flex border-bottom  border-info  border-4 justify-content-center">
          <input
            type="search"
            className="w-100 border-0 p-2  fs-5 "
            ref={ref}
            style={{ outline: "none" }}
          />
          
          <button type="submit" className="border-0 bg-white">
            <SearchIcon />
          </button>
        </div>
        <div className="py-5 d-flex gap-2 justify-content-end me-5">
          <button
            className="btn btn-outline-line border-0 fw-semibold px-3 "
            type="button"
            onClick={props.onResetForm}
          >
            RESET
          </button>
          <button type="submit" className="btn btn-info text-white fw-semibold">
            SEARCH
          </button>
        </div>
      </form>
    </div>
  );
});

export default SearchForm;
