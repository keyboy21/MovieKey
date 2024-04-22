import Thumb from "./Thumb";
import Link from "next/link";

function Results({ results }) {
  return (
    <>
      <div
        className="px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3 3xl:flex flex-wrap
      justify-center"
      >
        {results.map((result) => (
          <Link
            href={`/movie/${result.id}`}
            key={result.id}>
            <Thumb key={result.id} result={result} />
          </Link>
        ))}
      </div>
    </>
  );
}

export default Results;
