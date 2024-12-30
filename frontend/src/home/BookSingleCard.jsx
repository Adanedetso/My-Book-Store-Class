import React, { useState } from "react";
import { Link } from "react-router-dom";
import { PiBookOpenTextLight } from "react-icons/pi";
import { BiUserCircle, BiShow } from "react-icons/bi";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineDelete } from "react-icons/md";
import BookModel from "./BookModel";

const BookSingleCard = ({ book }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div
      key={book._id}
      className="border-2 border-gray-500 rounded-lg px-4 py-2 m-4 relative hover:shadow-xl"
    >
      <h2 className="absolute top-1 right-2 px-4 py-1 bg-red-300 rounded-lg">
        {book.publishedYear}
      </h2>
      <h4 className="my-2 text-gray-500">{book._id}</h4>

      <div className="flex justify-start items-center gap-x-2">
        <PiBookOpenTextLight className="text-red-300 text-2xl" />
        <h2 className="my-1">{book.title}</h2>
      </div>

      <div className="flex justify-start items-center gap-x-2">
        <BiUserCircle className="text-red-300 text-2xl" />
        <h2 className="my-1">{book.author}</h2>
      </div>

      {/* Updated container to ensure equal gap between icons */}
      <div className="flex justify-start items-center gap-4 mt-4 p-4">
        {/* Individual icons */}
        <BiShow
          className="text-3xl text-blue-800 hover:text-black cursor-pointer"
          onClick={() => {
            setShowModal(true);
          }}
        />
        <Link to={`/books/${book._id}`} className="text-blue-500">
          <BsInfoCircle className="text-2xl text-green-700 hover:text-black" />
        </Link>
        <Link to={`/books/${book._id}`} className="text-blue-500">
          <AiOutlineEdit className="text-2xl text-yellow-700 hover:text-black" />
        </Link>
        <Link to={`/books/${book._id}`} className="text-blue-500">
          <MdOutlineDelete className="text-2xl text-red-700 hover:text-black" />
        </Link>
      </div>

      {showModal && (
        <BookModel book={book} onClose={() => setShowModal(false)} />
      )}
    </div>
  );
};

export default BookSingleCard;
