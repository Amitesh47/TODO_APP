const express = require("express");
const cors = require("cors");
require("../mongodb/mongodb");
const Users = require("../mongodb/models/users");
const Tasks = require("../mongodb/models/tasks");

const app = express();
app.use(express.json()); // it parses an upcoming json into an object
app.use(cors()); // used this as our server ran on diff port and our client on diff port

app.post("/apis/addUser", (req, res) => {
  const newUser = new Users(req.body);
  const newUserTaskList = new Tasks({ userPhone: req.body.phone });
  newUser
    .save()
    .then(() => {
      newUserTaskList.save();
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
  Users.findOne({ phone: enteredPhone })
    .then((user) => {
      if (user) {
        return res.send({
          validUser: false,
        });
      }
      return res.send({
        validUser: true,
      });
    })
    .catch(() => {
      res.status(500);
    });
});

app.post("/apis/login", (req, res) => {
  const enteredPhone = req.body.phone;
  const password = req.body.password;
  Users.findOne({ phone: enteredPhone })
    .then((user) => {
      if (user && user.password === password) {
        return res.send({
          loginStatus: true,
          phone: user.phone,
        });
      }
      return res.send({
        loginFailed: true,
      });
    })
    .catch(() => {
      res.status(500);
    });
});

app.post("/apis/fetchAllTasks", (req, res) => {
  Tasks.findOne({ userPhone: req.body.phone })
    .then((task) => {
      if (task) {
        return res.send({
          userPhone: task.userPhone,
          taskList: task.taskList,
          taskCount: task.taskCount,
        });
      }
    })
    .catch(() => {
      res.status(500);
    });
});

app.post("/apis/addNewTask", (req, res) => {
  Tasks.findOneAndUpdate(
    { userPhone: req.body.userPhone },
    req.body,
    { new: true },
    (err, updatedTask) => {
      if (err) {
        return res.status(500);
      } else {
        return res.send({
          userPhone: updatedTask.userPhone,
          taskList: updatedTask.taskList,
          taskCount: updatedTask.taskCount,
        });
      }
    }
  );
});

app.post("/apis/editTask", (req, res) => {
  Tasks.findOneAndUpdate(
    { userPhone: req.body.userPhone, taskList: req.body.prevTaskValue },
    { "taskList.$": req.body.newTaskValue },
    { new: true },
    (err, updatedTask) => {
      if (err) {
        return res.status(500);
      } else {
        return res.send({
          userPhone: updatedTask.userPhone,
          taskList: updatedTask.taskList,
          taskCount: updatedTask.taskCount,
        });
      }
    }
  );
});

app.post("/apis/deleteTask", (req, res) => {
  Tasks.findOneAndUpdate(
    { userPhone: req.body.userPhone },
    { $pull: { taskList: req.body.taskName }, $inc: { taskCount: -1 } },
    { new: true },
    (err, updatedTask) => {
      if (err) {
        return res.send(500);
      } else {
        return res.send({
          userPhone: updatedTask.userPhone,
          taskList: updatedTask.taskList,
          taskCount: updatedTask.taskCount,
        });
      }
    }
  );
});

app.listen(3333, () => {
  console.log("Server is UP and RUNNING on port 3333");
});
