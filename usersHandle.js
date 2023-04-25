const database = require("./database");

const getUsersById = (req, res) => {
  const id = parseInt(req.params.id);

  database
    .query("select * from users where id = ?", [id])
    .then(([users]) => {
      if (users[0] != null) {
        res.json(users[0]);
      } else {
        res.status(404).send("Not found");
      }
    })
    .catch((er) => {
      console.err(err);
      res.status(500).send("Error retrieving data from database");
    });
};

const getUsers = (req, res) => {
  database.query("select * from users").then(([users]) => {
    res.status(200);
    res.json(users);
  });
};

module.exports = {
  getUsers,
  getUsersById,
};
