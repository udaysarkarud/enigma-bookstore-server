import { RequestHandler } from "express";
import { bookService } from "./book.service";
import { z } from "zod";
const addNewBook: RequestHandler = async (req, res, next) => {
  try {
    console.log("cont");
  } catch (error) {
    console.log(error);
  }
  // const bookDetails = req.body;
  // const result = await bookService.addNewBook(bookDetails);
  // res.send(result);
};

export const bookConttroller = {
  addNewBook,
};
