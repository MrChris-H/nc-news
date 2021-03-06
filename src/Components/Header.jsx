import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { getTopics } from "../api";
import TopicCard from "./TopicCard";
const Header = () => {
  const { loggedIn } = useContext(UserContext);
  const [topics, setTopics] = useState([]);
  useEffect(() => {
    getTopics().then(({ topics }) => {
      setTopics(topics);
    });
  }, []);
  return (
    <header>
      <div id="head-bar">
        <div className="head-bar">
          <Link to={`/`}>
            <img
              className="head-bar-button-img"
              src="https://cdn-icons-png.flaticon.com/512/21/21601.png"
              alt="Logo/home button"
            ></img>
          </Link>
        </div>
        <div className="head-bar" id="head-bar-center">
          <nav id="monitor-nav">
            <Link to={`/articles`} className="monitor-nav-container">
              <p>Articles</p>
            </Link>
            {topics.map((topic) => {
              return <TopicCard key={topic.slug} topic={topic} />;
            })}
          </nav>
        </div>
        <div className="head-bar" id="head-bar-right">
          <div className="profile">
            <img
              className="head-bar-button-img head-bar-button-img-smaller hidden"
              src="https://cdn0.iconfinder.com/data/icons/set-ui-app-android/32/8-512.png"
              alt="account button"
            ></img>
            <img
              className="head-bar-button-img head-bar-button-img-smaller hidden"
              id="head-bar-button-arrow"
              src="https://cdn-bnogf.nitrocdn.com/aWZedTmOfQOvZtJlWuPorsweqUqMoGnA/assets/static/optimized/rev-977aead/wp-content/uploads/menu-arrow-down.png"
              alt="account button"
            ></img>
            <img
              className="head-bar-button-img rounded "
              src={loggedIn.avatar_url}
              alt="account button"
            ></img>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
