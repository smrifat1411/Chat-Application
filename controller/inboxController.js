// make a handler for generate/ render html page

function getInbox(req, res, next) {
  res.render("inbox");
}

module.exports = {
  getInbox,
};
