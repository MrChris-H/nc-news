import { Link } from "react-router-dom";

const ErrorPage = ({ status, msg }) => {
  console.log(status, msg);
  return (
    <div>
      <p>{`${status || 404}, ${msg || "Looks like you're lost"}`}</p>
      <Link to="/articles">Back to Saftey</Link>
    </div>
  );
};

export default ErrorPage;
