require("dotenv").config();

const express = require("express");
const massive = require("massive");
const session = require("express-session");

//controllers
const auth = require("./controllers/auth");

const { PORT, SESSION_SECRET } = process.env;

const app = express();

app.use(express.json());

app.get("/test/rawr/", auth.addUser);

// Authentication endpoints

app.use(
  session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 7 * 52,
    },
  })
);

app.listen(PORT, () => console.log(`Server running on port` + " " + PORT));
