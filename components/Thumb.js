import Image from "next/image";
import { ThumbUpIcon } from "@heroicons/react/outline";

const Thumb = ({ result }) => {
  const BASE_URL = "https://image.tmdb.org/t/p/original";

  console.log(result)

  return (
    <div
      className="p-2 group cursor-pointer"
    >
      <Image
        src={
          `${BASE_URL}${result.backdrop_path || result.poster_path}` ||
          `${BASE_URL}${result.poster_path}`
        }
        alt={result.poster_path}
        height={1080}
        width={1920}
      />
      <div className="p-2">
        <p className="truncate max-w-md">{result.overwiew}</p>
      </div>
      <h2 className="mt-1 text-2xl text-white">
        {result.title || result.original_name}
      </h2>
      <div className="flex items-center text-xl py-3">
        <p className="flex gap-4">
          Popularity {result.popularity && `${result.popularity}`}
          <span>
            Date: {result.release_date || result.first_air_date}
          </span>
        </p>
        <ThumbUpIcon className="h-5 mx-2" />
        {result.vote_count}
      </div>
      <p>{result.overview}</p>
    </div>
  );
};

export default Thumb;
