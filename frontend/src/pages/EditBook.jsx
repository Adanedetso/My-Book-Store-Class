import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import BackButton from "../component/BackButton";
import Spinner from "../component/Spinner"; // Import Spinner
import { useSnackbar } from "notistack";

const EditBook = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publishedYear, setPublishedYear] = useState("");
  const [loading, setLoading] = useState(false); // Use boolean
  const navigate = useNavigate();
  const { id } = useParams(); // Get the book ID from the URL
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    setLoading(true); // Start loading
    axios
      .get(`http://localhost:5000/books/${id}`) // Fetch book details by ID
      .then((response) => {
        // Populate form with fetched data
        setTitle(response.data.title);
        setAuthor(response.data.author);
        setPublishedYear(response.data.publishedYear);
        setLoading(false); // Stop loading
      })
      .catch((error) => {
        setLoading(false); // Stop loading even on error
        alert("An error happened. Please check the console!");
        console.log(error); // Log the error
      });
  }, [id]); // Add `id` as a dependency

  const handleSaveBook = () => {
    const data = {
      title,
      author,
      publishedYear,
    };

    setLoading(true); // Start loading
    axios
      .put(`http://localhost:5000/books/${id}`, data) // Use PUT for updating
      .then(() => {
        setLoading(false); // Stop loading
        enqueueSnackbar("Book edited Success fully!", { variant: "succeess" });
        navigate("/"); // Redirect to home
      })
      .catch((error) => {
        setLoading(false); // Stop loading even on error
        // alert("An error happened. Please check the console!");
        enqueueSnackbar("Error", { variant: "error" });
        console.log(error); // Log the error
      });
  };

  return (
    <div className="p-4">
      <BackButton /> {/* Navigate to previous page */}
      <h1 className="text-3xl my-4 text-center">Edit Book</h1>
      {loading ? <Spinner /> : null} {/* Show spinner while loading */}
      <div className="flex flex-col border-2 border-sky-400 rounded-xl w-fit p-4 mx-auto">
        {/* Title Input */}
        <div className="my-4">
          <label className="text-xl text-gray-500">Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2 w-full"
          />
        </div>
        {/* Author Input */}
        <div className="my-4">
          <label className="text-xl text-gray-500">Author:</label>
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2 w-full"
          />
        </div>
        {/* Published Year Input */}
        <div className="my-4">
          <label className="text-xl text-gray-500">Published Year:</label>
          <input
            type="text"
            value={publishedYear}
            onChange={(e) => setPublishedYear(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2 w-full"
          />
        </div>
        {/* Save Button */}
        <button className="p-2 bg-sky-300 m-8" onClick={handleSaveBook}>
          Save Book {/* Add button text */}
        </button>
      </div>
    </div>
  );
};

export default EditBook;
