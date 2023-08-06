import { IBookType } from "./book.interface";
import Book from "./book.model";

const addNewBook = async (data: IBookType) => {
  try {
    const newBook = await Book.create(data);
    return newBook;
  } catch (error) {
    console.log(error);
  }
};

export const bookService = {
  addNewBook,
};
