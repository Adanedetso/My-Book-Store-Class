import React from "react";
import BookSingleCard from "./BookSingleCard";

const BookCard = ({ books }) => {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {books.map((item) => (
        <BookSingleCard key={item._id} book={item} />
      ))}
    </div>
  );
};

export default BookCard;

// import React from "react";
// import { Link } from "react-router-dom";
// import { PiBookOpenTextLight } from "react-icons/pi";
// import { BiUserCircle } from "react-icons/bi";
// import { AiOutlineEdit } from "react-icons/ai";
// import { BsInfoCircle } from "react-icons/bs";
// import { MdOutlineAddBox } from "react-icons/md";

// const BookCard = ({ books }) => {
//   return (
//     <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
//       {books.map((item) => (
//         <div
//           key={item._id}
//           className="border-2 border-gray-500 rounded-lg px-4 py-2 m-4 relative hover:shadow-xl"
//         >

//           <div className="text-center">
//             <img
//               src={item.image || "https://via.placeholder.com/150"}
//               alt={item.title}
//               className="w-full h-64 object-cover rounded-lg"
//             />
//           </div>

//           <div className="mt-2">
//             <h3 className="text-xl font-semibold">{item.title}</h3>
//             <p className="text-sm text-gray-600">{item.author}</p>
//             <p className="text-lg font-bold text-gray-900 mt-2">
//               ${item.price}
//             </p>
//           </div>

//           <div className="absolute top-2 right-2 flex space-x-2">
//             <Link to={`/books/${item._id}`} className="text-blue-500">
//               <BsInfoCircle className="text-2xl" />
//             </Link>
//             <Link to={`/books/edit/${item._id}`} className="text-yellow-500">
//               <AiOutlineEdit className="text-2xl" />
//             </Link>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default BookCard;
