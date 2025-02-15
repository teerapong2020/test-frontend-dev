import { Link } from "react-router-dom";

export default function App() {
  return (
    <div>
      <div className="flex flex-col h-screen items-center justify-center text-5xl gap-8 font-black">
        <Link
          to={"/formvalidate"}
          className="w-64 text-center  bg-blue-300 p-5 rounded-xl hover:bg-black hover:text-white break-words"
        >
          form validate
        </Link>
        <Link
          to={"/theme"}
          className="w-64 text-center bg-blue-300 p-5 rounded-xl hover:bg-black hover:text-white break-words"
        >
          theme
        </Link>
        <Link
          to={"/CRUD"}
          className="w-64 text-center bg-blue-300 p-5 rounded-xl hover:bg-black hover:text-white break-words"
        >
          CRUD
        </Link>
        <Link
          to={"/Cart"}
          className="w-64 text-center bg-blue-300 p-5 rounded-xl hover:bg-black hover:text-white break-words"
        >
          Cart
        </Link>
        <Link
          to={"/inf"}
          className="w-64 text-center bg-blue-300 p-5 rounded-xl hover:bg-black hover:text-white break-words whitespace-normal"
        >
          Infinite Scroll
        </Link>
      </div>
    </div>
  );
}
