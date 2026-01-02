const express = require("express");
const { default: routerStudent } = require("./routes/students.route");
const app = express();

app.use("/student", routerStudent);

app.listen(3000, () => {
  console.log(`Server started @ 3000`);
});
