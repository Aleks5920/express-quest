const database = require("./database");

const getUsersById = (req, res) => {
  const id = parseInt(req.params.id);
};

const getUsers = (req, res) => {
  database.query("select * from users").then(([users]) => {
    res.status(200);
    res.json(users);
  });
};

const postUsers = (req, res) => {
  const { firstname, lastname, email, city, language } = req.body;
  database
    .query(
      "INSERT INTO users(firstname, lastname, email, city, language) VALUES (?, ?, ?, ?, ?)",
      [firstname, lastname, email, city, language]
    )
    .then(([result]) => {
      res.location(`/api/users/${result.insertId}`).sendStatus(201);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error saving the users");
    });
};

module.exports = {
  getUsers,
  getUsersById,
  postUsers,
};
