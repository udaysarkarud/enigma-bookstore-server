import { z } from "zod";

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

export const validation = {
  bookZodSchema,
};
