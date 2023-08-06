import express from "express";
import { bookConttroller } from "./book.conttroller";

const route = express.Router();

route.get("/", bookConttroller.addNewBook);
route.post("/", bookConttroller.addNewBook);

export default route;
