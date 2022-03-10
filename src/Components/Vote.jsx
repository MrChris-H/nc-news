import { useEffect, useState } from "react";
import ArticleByID from "./ArticleById";

const Votes = ({ votes, apiUpdate, id }) => {
  const [displayVotes, setDisplayVotes] = useState(0);

  useEffect(() => {
    setDisplayVotes(votes);
  }, []);

  const handleVote = (increment) => {
    setDisplayVotes(displayVotes + increment);
    apiUpdate(id, increment).catch(() => {
      setDisplayVotes(displayVotes - increment);
    });
  };

  return (
    <>
      <div
        className="votes-arrow-container-top"
        onClick={() => {
          handleVote(1);
        }}
      >
        <i className="votes-arrow arrow up"></i>
      </div>

      <span className="votes-number">{displayVotes}</span>
      <div
        className="votes-arrow-container-bottom"
        onClick={() => {
          handleVote(-1);
        }}
      >
        <i className="votes-arrow arrow down"></i>
      </div>
    </>
  );
};

export default Votes;
