import express from "express";
import morgan from "morgan";
import * as dotenv from "dotenv";

import jobRouter from "./routes/jobRouter.js";
const app = express();

app.use(express.json());

if (process.env.NODE_ENV == "development") {
  app.use(morgan("dev"));
}

app.use("/api/v1/jobs", jobRouter);

app.use("*", (req, res) => {
  res.status(404).json({ message: "Route not found" });
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Something went wrong!" });
});

const port = process.env.PORT || 5100;

app.listen(port, () => {
  console.log(`server running on port ${port}....`);
});
