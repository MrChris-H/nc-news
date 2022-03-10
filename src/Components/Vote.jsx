import { useEffect, useState } from "react";
import ArticleByID from "./ArticleById";

const Votes = ({ votes, apiUpdate, id }) => {
  const [displayVotes, setDisplayVotes] = useState(0);

  const handleVote = (increment, oldVotes) => {
    if (increment === displayVotes) {
      setDisplayVotes(0);
      increment = -increment;
    } else {
      setDisplayVotes(increment);
    }
    apiUpdate(id, increment).catch(() => {
      setDisplayVotes(oldVotes);
    });
  };

  return (
    <>
      <div
        className="votes-arrow-container-top"
        onClick={() => {
          handleVote(1, displayVotes);
        }}
      >
        <button className="votes-arrow arrow up"></button>
      </div>

      <span className="votes-number">{votes + displayVotes}</span>
      <div
        className="votes-arrow-container-bottom"
        onClick={() => {
          handleVote(-1, displayVotes);
        }}
      >
        <button className="votes-arrow arrow down"></button>
      </div>
    </>
  );
};

export default Votes;
