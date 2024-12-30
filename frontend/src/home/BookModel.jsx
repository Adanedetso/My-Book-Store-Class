import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { PiBookOpenTextLight } from "react-icons/pi";
import { BiUserCircle } from "react-icons/bi";
const BookModel = ({ book, onClose }) => {
  return (
    <div
      className="fixed bg-black bg-opacity-60 top-0 right-0 bottom-0 z-50 flex justify-center items-center
    "
      onClick={onClose}
    >
      <div
        onClick={(event) => event.stopPropagation()}
        className="w-[600px] max-w-full has-[400px] bg-white rounded-xl p-4 flex flex-col relative"
      >
        <AiOutlineClose
          className="abosolute right-6 top-6 text-3xl text-red-600 cursor-pointer"
          onClick={onClose}
        />
        <h2 className="w-fit px-4 py-1 bg-red-300 rounded-lg">
          {book.publishedYear}
        </h2>
        <h4 className="my-2 text-gray-500 ">{book._id}</h4>
        <div className="flex justify-start books-center gap-x-2 ">
          <PiBookOpenTextLight className="text-red-300 text-2xl" />
          <h2 className="my-1">{book.title}</h2>
        </div>
        <div className="flex justify-start books-center gap-x-2 ">
          <BiUserCircle className="text-red-300 text-2xl" />
          <h2 className="my-1">{book.author}</h2>
        </div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam recusandae
        distinctio magnam accusamus saepe eius quisquam molestiae tempore
        repellendus dolore ducimus, fuga porro commodi in quae exercitationem
        quos culpa nostrum dolorum autem a dicta! Nobis deserunt explicabo
        corrupti quae pariatur fugit quod itaque. Error sit, impedit
        reprehenderit mollitia earum voluptates hic illum natus, voluptate est
        esse magnam deserunt sapiente dolore a autem? Maxime fugiat, maiores
        doloribus blanditiis, iste officia odit labore, dolorum tenetur quae
        aperiam quisquam. Facere esse vel ad.
      </div>
    </div>
  );
};

export default BookModel;
