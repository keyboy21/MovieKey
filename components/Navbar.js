import requests from "../utils/requests";
import Link from "next/link";
function Navbar() {

  return (
    <nav className="relative">
      <ul
        className="flex px-10 sm:px-20 text-2xl whitespace-nowrap 
        space-x-10 sm:space-x-20 overflow-auto-scroll overflow-y-hidden"
      >
        {Object.entries(requests).map(([key, { title, url }]) => (
          <Link
            key={url}
            href={`/?genre=${key}`}
            className=" last:pr-24 cursor-pointer transition 
           duration-90 transform hover:scale-125 hover:text-white 
           active:text-red-500"
          >
            {title}
          </Link>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
