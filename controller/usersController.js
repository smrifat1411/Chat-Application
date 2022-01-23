// make a handler for generate/ render html page

function getUsers(req, res, next) {
  res.render("users");
}

module.exports = {
  getUsers,
};
