import express from "express";
import { bookConttroller } from "./book.conttroller";
import validationMiddleware from "../../middleware/validationMiddleware";

const route = express.Router();

route.get("/", bookConttroller.addNewBook);
route.post("/", validationMiddleware, bookConttroller.addNewBook);

export default route;
