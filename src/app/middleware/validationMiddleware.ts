import { RequestHandler } from "express";
import { validation } from "../module/book/book.validation";

const validationMiddleware: RequestHandler = async (req, res, next) => {
  try {
    await validation.bookZodSchema.parse(req.body);
    next();
  } catch (error) {
    next(error);
  }
};

export default validationMiddleware;
