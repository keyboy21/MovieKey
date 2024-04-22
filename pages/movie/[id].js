import Image from "next/image";
import { ThumbUpIcon } from "@heroicons/react/outline";
import Header from "../../components/Header";

export default function Movie({ result }) {
  console.log(result)
  const BASE_URL = "https://image.tmdb.org/t/p/original";

  return (
    <>
      <Header />
      <div
        className="py-10"
      >
        <Image
          src={
            `${BASE_URL}${result.backdrop_path || result.poster_path}` ||
            `${BASE_URL}${result.poster_path}`
          }
          className="mx-auto"
          alt={result.poster_path}
          height={900}
          width={900}
        />
        <div className="p-2">
          <p className="truncate max-w-md">{result.overwiew}</p>
        </div>
        <h2 className="mt-1 text-2xl text-white text-center">
          {result.title || result.original_name}
        </h2>
        <div className="flex items-center justify-center text-xl py-3">
          <p className="flex gap-4">
            Popularity {result.popularity && `${result.popularity}`}
            <span>
              Date: {result.release_date || result.first_air_date}
            </span>
          </p>
          <ThumbUpIcon className="h-5 mx-2" />
          {result.vote_count}
        </div>
        <p className="text-center mx-auto max-w-6xl">{result.overview}</p>
      </div>
    </>
  )
}


export async function getServerSideProps(context) {
  const id = context.query.id;

  const API_KEY = process.env.API_KEY;

  const request = await fetch(
    `https://api.tmdb.org/3/movie/${id}?api_key=${API_KEY}`
  ).then((res) => res.json());

  return { props: { result: request } };
}