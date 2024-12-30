import express from "express";
import { Book } from "../model/bookModel.js";

const router = express.Router();

//********** */Main Route for Creating a Book on MongoDB/***************** */
router.post("/", async (request, response) => {
  try {
    // Validate required fields in the request body
    if (
      !request.body.title ||
      !request.body.author ||
      !request.body.publishedYear
    ) {
      return response.status(400).send({
        message:
          "Please send all required fields: title, author, publishedYear",
      });
    }

    // Create a new book object
    const newBook = {
      title: request.body.title,
      author: request.body.author,
      publishedYear: request.body.publishedYear,
    };

    // Save the new book to the database
    const book = await Book.create(newBook);

    // Send back the full book data in the response
    return response.status(201).send(book); // This sends the entire book object, including title, author, and publishedYear
  } catch (error) {
    // Catch any errors and respond with a 500 internal server error
    console.log(error.message);
    return response.status(500).send({ message: error.message });
  }
});

//********** */Route for Get All from database /***************** */

router.get("/", async (request, response) => {
  try {
    // Fetch all books from the database
    const books = await Book.find({});

    // Return the fetched books in the response
    return response.status(200).json({
      count: books.length, // Include the count of books
      data: books, // Include the fetched books
    });
  } catch (error) {
    // Log the error for debugging and send a 500 status with error message
    console.error("Error fetching books:", error);
    return response.status(500).send({ message: "Failed to fetch books." });
  }
});

//********** */Route for fetch Unique value from database by using ID /***************** */

router.get("/:id", async (request, response) => {
  try {
    const { id } = request.params;
    // Fetch unique books from the database
    const book = await Book.findById(id);

    // Return the fetched books in the response
    return response.status(200).json(book);
  } catch (error) {
    // Log the error for debugging and send a 500 status with error message
    console.log("Error fetching books:", error);
    return response.status(500).send({ message: "Failed to fetch books." });
  }
});

//********** */ Route for Update a Book /***************** */

router.put("/:id", async (request, response) => {
  try {
    if (
      !request.body.title ||
      !request.body.author ||
      !request.body.publishedYear
    ) {
      return response.status(400).send({
        message: `Send All required fields: title, author, publishedYear`,
      });
    }

    const { id } = request.params;

    const result = await Book.findByIdAndUpdate(id, request.body);
    if (!result) {
      return response.status(404).json({ message: "Book not found! " });
    }

    return response.status(200).send({
      message: "Book Updated successfully",
    });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

//********** */Route To Delete Bookfrom A MongoDB Database /***************** */

router.delete("/:id", async (request, response) => {
  try {
    const { id } = request.params;

    const result = await Book.findByIdAndDelete(id);
    if (!result) {
      return response.status(404).send({
        message: "Book not found!",
      });
    }

    return response.status(200).send({
      message: "Book Deleted successfully",
    });
  } catch (error) {
    consol.log(error.message);
    return response.status(500).send({
      messge: error.message,
    });
  }
});

export default router;
