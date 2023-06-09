require("dotenv").config();

const express = require("express");

const app = express();

app.use(express.json());

const port = process.env.APP_PORT ?? 5000;

const welcome = (req, res) => {
  res.send("Welcome to my favourite movie list");
};

app.get("/", welcome);

const movieHandlers = require("./movieHandlers");

app.get("/api/movies", movieHandlers.getMovies);
app.get("/api/movies/:id", movieHandlers.getMovieById);

const users = require("./usersHandle");

app.get("/api/users", users.getUsers);
app.get("/api/users/:id", users.getUsersById);

app.listen(port, (err) => {
  if (err) {
    console.error("Something bad happened");
  } else {
    console.log(`Server is listening on ${port}`);
  }
});

app.put("/api/movies/:id", movieHandlers.updateMovie);
app.post("/api/movies", movieHandlers.postMovie);
app.post("/api/users", users.postUsers);
app.put("/api/users/:id", users.updateUsers);

app.delete("/api/movies/:id", movieHandlers.deleteMovie);
app.delete("/api/users/:id", users.deleteUsers);
