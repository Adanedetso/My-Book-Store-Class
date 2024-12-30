import mongoose from "mongoose";

// Define the book schema
const bookSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    publishedYear: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true, // Automatically adds createdAt and updatedAt fields
  }
);

// Create and export the 'Book' model using the bookSchema
export const Book = mongoose.model("Book", bookSchema);
