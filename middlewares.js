function checkLogin(req, res, next) {
  if (req.body.un === "arjun" && req.body.pw === "bala") {
    next();
  } else {
    res.status(401).send("Unauthorized");
  }
}

export { checkLogin };
