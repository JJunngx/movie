const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());

const movies = require("./routes/movies");
const authMiddleware = require("./middleware/movie");
app.use(authMiddleware);
app.use("/api/movies", movies);
app.get('/', (req, res) => {
  res.send("Welcome to the home page!");
});
app.use((req, res, next) => {
  res.status(404).send("<h1>Route not Found</h1>");
});
app.get("/", (req, res) => {
  res.send("Welcome to the home page!");
});

app.listen(5000, () => {
  console.log("server node.js");
});
