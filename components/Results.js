import Thumbnail from "./Thumbnail";
import FlipMove from "react-flip-move";
function Results({ requests }) {
  return (
    <FlipMove
      className="px-5 my-10 sm:grid md:grid-col-2 xl:grid-col-3 3xl:flex flex-wrap
     justify-center"
    >
      {requests.map((result) => {
        <Thumbnail key={result.id} result={result} />;
      })}
    </FlipMove>
  );
}

export default Results;
