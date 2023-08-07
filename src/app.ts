import express from "express";
import cors from "cors";
import bookRoute from "./app/module/book/boo.route";
import globalErrorhandler from "./app/middleware/globalErrorhandler";

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1", bookRoute);

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.all("*", globalErrorhandler);
app.use(globalErrorhandler);
export default app;
