import React, { useEffect } from "react";
import YouTube from "react-youtube";
import useHttp from "../hooks/useHttp";
// import ContextMovies from "../hooks/ContextMovies";

const MovieDetail = ({ movie }) => {
  const {
    id,
    title,
    name,
    release_date,
    first_air_date,
    vote_average,
    overview,
    backdrop_path,
  } = movie ?? {}; //info trailer

  const { trailerMovies, fetchDataTrailer } = useHttp();
  useEffect(() => {
    fetchDataTrailer(id); //id -> api trailer youtube
  }, [id]);

  const imagePath = `https://image.tmdb.org/t/p/w200${backdrop_path}`;
  const opts = {
    height: "400",
    width: "100%",
    playerVars: {
      autoplay: 0,
    },
  };

  return (
    <>
      <div className="row bg-black w-100 m-0 py-4 px-2 h-50">
        <div className="col">
          <h2 className="fw-bold border-bottom border-white pb-3">
            {title || name}
          </h2>

          <p className="fw-medium fs-5 mb-0 mt-3">
            Release Date: {release_date || first_air_date}
          </p>
          <p className="fw-medium fs-5">vote:{vote_average}/10</p>

          <p>{overview}</p>
        </div>
        <div className="col">
          {trailerMovies?.key ? (
            <YouTube videoId={trailerMovies?.key} opts={opts} />
          ) : (
            <img src={imagePath} alt="" className="w-100 h-100" />
          )}
        </div>
      </div>
    </>
  );
};

export default MovieDetail;
