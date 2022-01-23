//External Imports
const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const path = require("path");
const cookieParser = require("cookie-parser");

//internal imports
const { notFound, errorFound } = require("./middleware/common/errorHandler");
const loginRouter = require("./router/loginRouter");
const usersRouter = require("./router/usersRouter");
const inboxRouter = require("./router/inboxRouter");

const app = express();
dotenv.config();

//Datatabase Connection
mongoose
  .connect(process.env.MONGO_CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Database connection has establishe successfully"))
  .catch((err) => console.log(err));

//request parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//set view engine
app.set("view engine", "ejs");

//set static folder

app.use(express.static(path.join(__dirname, "public")));

//Parse cookies
app.use(cookieParser(process.env.COOKIE_SECRET));

//Routing Setup
app.use("/", loginRouter);
app.use("/users", usersRouter);
app.use("/inbox", inboxRouter);

//Error Handler-1 (404 not found handler)
app.use(notFound);

//Commonerror Handler-2 (for all error)
app.use(errorFound);
//Listening Port
app.listen(process.env.PORT, () => {
  console.log(`App listening to porrt ${process.env.PORT}`);
});
