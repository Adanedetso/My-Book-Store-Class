import axios from "axios";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import BackButton from "../component/BackButton";
import Spinner from "../component/Spinner"; // Import Spinner
import { useSnackbar } from "notistack";

const DeleteBook = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null); // To store error message if needed
  const navigate = useNavigate();
  const { id } = useParams(); // Get the book ID from the URL
  const { enqueueSnackbar } = useSnackbar();

  const handleDeleteBook = () => {
    setLoading(true); // Start loading

    axios
      .delete(`http://localhost:5000/books/${id}`) // Send DELETE request to delete the book
      .then(() => {
        setLoading(false); // Stop loading
        enqueueSnackbar("Book deleted Success fully!", { variant: "succeess" });

        navigate("/"); // Redirect to the home or books list page
      })
      .catch((error) => {
        setLoading(false); // Stop loading even on error
        enqueueSnackbar("Error", { variant: "error" });
        console.log(error); // Log the error
      });
  };

  return (
    <div className="p-4">
      <BackButton /> {/* Navigate to previous page */}
      <h1 className="text-3xl my-4 text-center">Delete Book</h1>
      {loading ? <Spinner /> : null} {/* Show spinner while loading */}
      {error && <p className="text-red-500 text-center">{error}</p>}{" "}
      {/* Show error if any */}
      <div className="flex flex-col border-2 border-sky-400 rounded-xl w-fit p-4 mx-auto">
        <p className="my-4 text-lg text-gray-500">
          Are you sure you want to delete this book?
        </p>
        <button
          className="p-2 bg-red-500 text-white m-8"
          onClick={handleDeleteBook} // Trigger delete
        >
          Delete Book
        </button>
      </div>
    </div>
  );
};

export default DeleteBook;
