const express = require("express");
const mongoose = require("mongoose");

const users = require("./routers/api/users");
const profile = require("./routers/api/profile");
const posts = require("./routers/api/posts");

// mongo DB config
const dbUrI = require("./config/keys").mongoURI;

// Connect to MongoDB
mongoose
  .connect(
    dbUrI,
    { useNewUrlParser: true }
  )
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

const app = express();

app.get("/", (req, res) => res.send("hello"));

// Use Routes
app.use("/api/users", users);
app.use("/api/profile", profile);
app.use("/api/posts", posts);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
