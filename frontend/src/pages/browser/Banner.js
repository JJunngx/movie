import React, { useContext } from "react";
import useHttp from "../hooks/useHttp";
import Button from "react-bootstrap/Button";
import classes from "./Banner.module.css";
import ContextMovies from "../hooks/ContextMovies";

const Banner = () => {
  const { trendMovies } = useHttp();
  const { setMovie, showTrailerHandler } = useContext(ContextMovies);
  //*tạo vị trí ngẫu nhiên  element phim
  const imgIndex = Math.abs(Math.floor(Math.random() * trendMovies.length - 1));

  const movieRandom = trendMovies[imgIndex]; //lấy vị trí ngẫu nhiên của phần tử

  return (
    <div className={classes.banner}>
      <img
        src={`https://image.tmdb.org/t/p/original${movieRandom?.backdrop_path}`}
        alt={movieRandom?.original_name}
        className={classes.imgBanner}
        onClick={() => {
          showTrailerHandler(movieRandom.id);
          setMovie(movieRandom);
          return;
        }}
      />

      <div className={classes.detailBanner}>
        <h2>{movieRandom?.name}</h2>
        <div className="mt-5 fs-6 ">
          <Button variant="dark" className="border-0 opacity-75">
            play
          </Button>

          <Button variant="dark" className="border-0 opacity-75 ms-2">
            My List
          </Button>
        </div>
        <p className="mt-4">{movieRandom?.overview}</p>
      </div>
    </div>
  );
};

export default React.memo(Banner);
