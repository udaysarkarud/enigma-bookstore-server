import { Schema, model } from "mongoose";
import { IBookType } from "./book.interface";

const bookSchema = new Schema<IBookType>(
  {
    isbn: { type: Number, required: true, unique: true },
    title: { type: String, required: true },
    subtitle: { type: String, required: true },
    authors: { type: String, required: true },
    publisher: { type: String, required: true },
    language: { type: String, required: true },
    pages: { type: Number, required: true },
    year: { type: Date, required: true },
    rating: { type: Number, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    image: { type: String, required: true },
    url: { type: String, required: true },
    pdf: { type: String, required: true },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const Book = model<IBookType>("Book", bookSchema);
export default Book;
