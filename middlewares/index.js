exports.whichRole = (req, res, next) => {
  if (req.isAuthenticated()) {
    if (req.user.role === "Needy") {
      req.app.locals.isNeedy = true;
    } else {
      req.app.locals.isNeedy = false;
    }
  } else {
    req.app.locals.isNeedy = false;
  }
  next();
};

exports.isAuth = (req, res, next) =>
  req.isAuthenticated() ? next() : res.redirect("/");

exports.canLogin = (req, res, next) =>
  !req.isAuthenticated()
    ? next()
    : res.redirect(`/profile`);
//aqui un /