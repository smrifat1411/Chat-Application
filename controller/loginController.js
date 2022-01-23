// make a handler for generate/ render html page

function getLogin(req, res, next) {
  res.render("index");
}

module.exports = {
  getLogin,
};
