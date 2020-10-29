const express = require("express");
const cors = require("cors");
require("../mongodb/mongodb");
const Users = require("../mongodb/models/users");

const app = express();
app.use(express.json()); // it parses an upcoming json into an object
app.use(cors()); // used this as our server ran on diff port and our client on diff port

app.post("/apis/addUser", (req, res) => {
  const newUser = new Users(req.body);
  newUser
    .save()
    .then(() => {
      res.send({
        phone: newUser.phone,
        userAdded: true,
      });
    })
    .catch((e) => {
      res.status(400).send(e);
    });
});

app.post("/apis/allUsers", (req, res) => {
  const enteredPhone = req.body.phone;
  let userList = [];
  Users.find({})
    .then((users) => {
      users.forEach((user) => userList.push(user.phone));
      return userList.includes(enteredPhone)
      ? res.send({ validUser: false })
      : res.send({ validUser: true });
    })
    .catch((e) => {
      res.status(500).send();
    });
});

app.listen(3333, () => {
  console.log("Server is UP and RUNNING on port 3333");
});
