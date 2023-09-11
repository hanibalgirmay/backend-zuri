import express from "express";
import apiRoute from "./routes/index.js";
import dotenv from 'dotenv';

dotenv.config();
const app = express();
const port = process.env.PORT || 5500;

// Redirect to the "/api/" route
app.use((req, res, next) => {
  if (req.originalUrl === "/") {
    res.redirect("/api/");
  } else {
    next();
  }
});
app.use("/api", apiRoute);

app.listen(port, () => {
  console.log(`server is running on http://localhost:${port}`);
});
