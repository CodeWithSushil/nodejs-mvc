import express from "express";
import { Routes } from "./routes/router.js";

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");
// app.set("views", "./views")

// express router
app.use(Routes);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
