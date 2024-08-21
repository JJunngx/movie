const moviesModels = require("../models/Movie");
const paginate = require("../utils/paging");
const movies = moviesModels.all("../backend/data/movieList.json");
const genres = moviesModels.all("../backend/data/genreList.json");
const videoList = moviesModels.all("../backend/data/videoList.json");

const itemsPerPage = 20;
const totalPages = Math.ceil(movies.length / itemsPerPage);

const getDataSatisfy = (property, req, res) => {
  const moviesList = movies.sort((a, b) => b[property] - a[property]);

  const page = parseInt(req.query.page) || 1;
  // Sử dụng utility function để phân trang danh sách phim
  const results = paginate(moviesList, itemsPerPage, page);

  res.status(200).json({
    results,
    page,
    total_pages: totalPages,
  });
};
exports.trending = (req, res, next) => {
  getDataSatisfy("popularity", req, res);
};
exports.topRate = (req, res, next) => {
  getDataSatisfy("vote_average", req, res);
};

// genre_ids
exports.discover = (req, res, next) => {
  const page = parseInt(req.query.page) || 1;
  const genreQuery = parseInt(req.query.genre);

  if (!genreQuery) {
    return res.status(400).json({ error: "NOt found genre param" });
  }
  const genreSatisfy = genres.find((genre) => genre.id === genreQuery);

  if (!genreSatisfy) {
    return res.status(400).json({ error: "Not found that genre id" });
  }
  const filterMovies = movies.filter((movie) =>
    movie.genre_ids.includes(genreQuery)
  );

  const results = paginate(filterMovies, itemsPerPage, page);
  res.status(200).json({
    results,
    page,
    total_pages: Math.ceil(results.length / itemsPerPage),
    genre_name: genreSatisfy.name,
  });
};
exports.postVideo = (req, res, next) => {
  const filmId = parseInt(req.body.filmId);

  if (!filmId) {
    return res.status(400).json({ message: "Not found film_id param" });
  }
  const movieVideos = videoList.find((movie) => movie.id === filmId);

  if (!movieVideos) return;
  const filterVideos = movieVideos.videos
    .filter(
      (video) =>
        video.official === true &&
        video.site === "YouTube" &&
        (video.type === "Trailer" || video.type === "Teaser")
    )
    .sort((a, b) => new Date(b.published_at) - new Date(a.published_at));

  const lasestVideo = filterVideos[0];
  if (!lasestVideo) {
    return res.status(400).json({ message: "Not found video" });
  }

  return res.status(200).json(lasestVideo);
};
exports.postSearch = (req, res, next) => {
  const { keyword } = req.body;
  if (!keyword) {
    res.status(400).json({ message: "Not found keyword parram" });
  }
  const filteredMovies = movies.filter(
    (movie) =>
      movie.overview.toLowerCase().includes(keyword) ||
      (movie.title ? movie.title.toLowerCase().includes(keyword) : "")
  );

  res.status(200).json(filteredMovies);
};
