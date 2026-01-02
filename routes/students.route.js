// in routes folder

import bodyParser from "body-parser";
import { Router } from "express";

const routerStudent = Router();

const data = ["arjun", "bala", "darshan", "university"];

routerStudent.use(bodyParser.json());

routerStudent.get("/", (req, res) => {
  res.send(data);
});

routerStudent.get("/:id", (req, res) => {
  res.send(data[req.params.id]);
});

routerStudent.post("/add", (req, res) => {
  const studentName = req.body.studentName;
  data.push(studentName);
  res.send("student created!");
});
routerStudent.put("/edit/:id", (req, res) => {
  const studentName = req.body.studentName;
  data[req.params.id] = studentName;
  res.send("student edited!");
});
routerStudent.delete("/:id", (req, res) => {
  data.splice(req.params.id, 1);
  res.send("student deleted!");
});

export default routerStudent;
