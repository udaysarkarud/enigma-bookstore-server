import express from "express";
import cors from "cors";
import bookRoute from "./app/module/book/boo.route";

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1", bookRoute);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

export default app;
