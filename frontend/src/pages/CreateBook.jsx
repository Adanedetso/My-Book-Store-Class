import axios from "axios";
import React, { useState } from "react";
import BackButton from "../component/BackButton";
import Spinner from "../component/Spinner"; // Import Spinner
import { useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack";

const CreateBook = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publishedYear, setPublishedYear] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const handleSaveBook = () => {
    if (!title || !author || !publishedYear) {
      enqueueSnackbar("All fields are required!", { variant: "warning" });
      return;
    }

    if (!/^\d{4}$/.test(publishedYear)) {
      enqueueSnackbar("Published Year must be a valid 4-digit year!", {
        variant: "error",
      });
      return;
    }

    const data = { title, author, publishedYear };
    setLoading(true);

    axios
      .post(`http://localhost:5000/books`, data)
      .then(() => {
        setLoading(false);
        enqueueSnackbar("Book Created successfully!", { variant: "success" });
        navigate("/");
      })
      .catch((error) => {
        setLoading(false);
        enqueueSnackbar("An error occurred while creating the book.", {
          variant: "error",
        });
        console.log(error);
      });
  };

  return (
    <div className="p-4">
      <BackButton />
      <h1 className="text-3xl my-4 text-center">Create Books</h1>
      {loading && <Spinner />} {/* Simplified Spinner rendering */}
      <div className="flex flex-col border-2 border-sky-400 rounded-xl w-fit p-4 mx-auto">
        <div className="my-4">
          <label className="text-xl text-gray-500">Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2 w-full"
          />
        </div>
        <div className="my-4">
          <label className="text-xl text-gray-500">Author:</label>
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2 w-full"
          />
        </div>
        <div className="my-4">
          <label className="text-xl text-gray-500">Published Year:</label>
          <input
            type="text"
            value={publishedYear}
            onChange={(e) => setPublishedYear(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2 w-full"
          />
        </div>
        <button
          className="p-2 bg-sky-300 m-8 disabled:bg-gray-300"
          onClick={handleSaveBook}
          disabled={loading} // Disable button during loading
        >
          {loading ? "Saving..." : "Save Book"} {/* Dynamic button text */}
        </button>
      </div>
    </div>
  );
};

export default CreateBook;
