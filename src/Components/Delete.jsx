import { useContext } from "react";
import { UserContext } from "../context/UserContext";

const Delete = ({ createdBy, apiDelete, setDeleted, id }) => {
  const { loggedIn } = useContext(UserContext);

  const handleClick = () => {
    setDeleted(true);
    apiDelete(id);
  };
  return (
    <div
      className={
        createdBy !== loggedIn.username
          ? "hidden"
          : "comment-card-owner comment-card-owner-img-container"
      }
      onClick={handleClick}
    >
      <img
        src="https://www.transparentpng.com/thumb/red-cross/BtjHkS-symbol-clip-art-image-american-red-cross.png"
        className="comment-card-owner-delete"
      ></img>
    </div>
  );
};

export default Delete;
