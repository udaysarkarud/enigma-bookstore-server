import { RequestHandler } from "express";
import { bookService } from "./book.service";
import { z } from "zod";
const addNewBook: RequestHandler = async (req, res, next) => {
  const bookZodSchema = z.object({
    isbn: z.number(),
    title: z.string(),
    subtitle: z.string(),
    authors: z.string(),
    publisher: z.string(),
    language: z.string(),
    pages: z.number(),
    year: z.date(),
    rating: z.number(),
    description: z.string(),
    price: z.number(),
    image: z.string(),
    url: z.string(),
    pdf: z.string(),
  });
  try {
    bookZodSchema.parse(req.body);
  } catch (error) {
    console.log(error.message);
  }
  // const bookDetails = req.body;
  // const result = await bookService.addNewBook(bookDetails);
  // res.send(result);
};

export const bookConttroller = {
  addNewBook,
};
