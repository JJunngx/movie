// import React, { useContext } from "react";
// import ContextMovies from "../hooks/ContextMovies";

// const SearchItem = (props) => {
//   const { setDetailSearch, showSearchHandler } = useContext(ContextMovies);

//   return (
//     <li>
//       <img
//         src={`https://image.tmdb.org/t/p/w200${props?.poster_path}`}
//         className="scaleImg"
//         alt=""
//         onClick={() => {
//           showSearchHandler(props.searchMovie.id);
//           setDetailSearch(props.searchMovie);
//           return;
//         }}
//       />
//     </li>
//   );
// };

// const ResultsList = ({ searchMovies, error }) => {
//   if (error) return <p className="text-center fs-3">tim nap that bai</p>;

//   return (
//     <>
//       <h2 className="ms-4">
//         {searchMovies.length > 0 ? "search result" : "no result"}
//       </h2>
//       <ul className="list-unstyled d-flex gap-4 flex-wrap justify-content-center my-5 marginBottom">
//         {searchMovies.map((movie) => (
//           <SearchItem
//             key={movie.id}
//             searchMovie={movie}
//             poster_path={movie?.poster_path}
//           />
//         ))}
//       </ul>
//     </>
//   );
// };
// export default ResultsList;
import React, { useContext } from "react";
import ContextMovies from "../hooks/ContextMovies";

const ResultsList = ({ searchMovies, error }) => {
  const { setDetailSearch, showSearchHandler } = useContext(ContextMovies);
  if (error) return <p className="text-center fs-3">tim nap that bai</p>;

  return (
    <>
      <h2 className="ms-4">
        {searchMovies.length > 0 ? "search result" : "no result"}
      </h2>
      <ul className="list-unstyled d-flex gap-4 flex-wrap justify-content-center my-5 marginBottom">
        {searchMovies.map((movie, index) => (
          <li key={index}>
            <img
              src={`https://image.tmdb.org/t/p/w200${movie?.poster_path}`}
              className="scaleImg"
              alt=""
              onClick={() => {
                showSearchHandler(movie.id);
                setDetailSearch(movie);
              }}
            />
          </li>
        ))}
      </ul>
    </>
  );
};
export default ResultsList;
