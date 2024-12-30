import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BackButton from "../component/BackButton";
import Spinner from "../component/Spinner";

const ShowBook = () => {
  const [book, setBook] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:5000/books/${id}`)
      .then((response) => {
        setBook(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, [id]);

  return (
    <div className="flex justify-center items-center min-h-screen p-4">
      <div>
        <BackButton />
        <h1 className="text-3xl my-4 text-center">Show Book</h1>
        {loading ? (
          <Spinner />
        ) : (
          <div className="flex flex-col border-2 border-sky-400 rounded-xl w-fit p-4">
            <div className="my-4">
              <span className="text-xl text-gray-500">Id </span>
              <span>{book?.id || "N/A"}</span>
            </div>
            <div className="my-4">
              <span className="text-xl text-gray-500">Title </span>
              <span>{book?.title || "N/A"}</span>
            </div>
            <div className="my-4">
              <span className="text-xl text-gray-500">Author </span>
              <span>{book?.author || "N/A"}</span>
            </div>
            <div className="my-4">
              <span className="text-xl text-gray-500">Published Year </span>
              <span>{book?.publishedYear || "N/A"}</span>
            </div>
            <div className="my-4">
              <span className="text-xl text-gray-500">Create Time </span>
              <span>
                {book?.createdAt ? new Date(book.createdAt).toString() : "N/A"}
              </span>
            </div>
            <div className="my-4">
              <span className="text-xl text-gray-500">Last Update Time </span>
              <span>
                {book?.updatedAt ? new Date(book.updatedAt).toString() : "N/A"}
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ShowBook;
