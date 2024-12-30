import React, { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "../component/Spinner";
import { Link } from "react-router-dom";
import { MdOutlineAddBox } from "react-icons/md";
import BookCard from "../home/BookCard"; // Assuming BookCard component exists
import BookTable from "../home/BookTable"; // Assuming BookTable component exists
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";

const Home = () => {
  const [books, setBooks] = useState([]); // State to hold books data
  const [loading, setLoading] = useState(false); // State for loading indicator
  const [error, setError] = useState(null); // State for error message
  const [showType, setShowType] = useState("table"); // State for display type (table or card)

  useEffect(() => {
    setLoading(true); // Start loading when API call begins
    setError(null); // Reset error state before API call
    axios
      .get("http://localhost:5000/books")
      .then((response) => {
        setBooks(response.data.data); // Set books data from API response
        setLoading(false); // Stop loading
      })
      .catch((error) => {
        setError("Failed to fetch books. Please try again later."); // Handle API errors
        setLoading(false); // Stop loading
      });
  }, []); // Empty dependency array ensures this runs once on component mount

  return (
    <div className="p-4">
      <div className="flex justify-center items-center space-x-4 mb-4">
        {/* Button to toggle between table and card view */}
        <button
          className="bg-sky-400 hover:bg-sky-500 px-4 py-1 rounded-lg"
          onClick={() => setShowType("table")}
        >
          Table
        </button>
        <button
          className="bg-sky-400 hover:bg-sky-500 px-4 py-1 rounded-lg"
          onClick={() => setShowType("card")}
        >
          Card
        </button>
      </div>

      <div className="flex justify-between items-center">
        <h1 className="text-3xl my-8">Books List</h1>
        <Link to="/books/create">
          <MdOutlineAddBox className="text-sky-800 text-4xl" />
        </Link>
      </div>

      {/* Show spinner during loading */}
      {loading ? (
        <Spinner />
      ) : error ? (
        // Show error message if API call fails
        <p className="text-red-500">{error}</p>
      ) : books.length === 0 ? (
        // Show message if no books are available
        <p className="text-center">No books available.</p>
      ) : // Conditionally render the table or card view based on showType
      showType === "table" ? (
        <BookTable books={books} />
      ) : (
        <BookCard books={books} /> // Assuming BookCart is designed for a card layout
      )}
    </div>
  );
};

export default Home;
