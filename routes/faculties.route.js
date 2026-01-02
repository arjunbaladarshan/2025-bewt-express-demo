import { Router } from "express";

const routerFaculty = Router();

routerFaculty.get("/", (req, res) => {
  res.send("get all faculties");
});

routerFaculty.get("/:id", (req, res) => {
  res.send("get faculty by id");
});

routerFaculty.post("/add", (req, res) => {
  res.send("create faculty");
});

routerFaculty.put("/edit/:id", (req, res) => {
  res.send("edit faculty");
});

routerFaculty.delete("/:id", (req, res) => {
  res.send("delete faculty");
});

export default routerFaculty;
