import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header>
      <div id="head-bar">
        <div className="head-bar">
          <Link to={`/`}>
            <img
              className="head-bar-button-img"
              src="https://cdn-icons-png.flaticon.com/512/21/21601.png"
            ></img>
          </Link>
        </div>
        <div className="head-bar" id="head-bar-center"></div>
        <div className="head-bar" id="head-bar-right">
          <div className="profile">
            <img
              className="head-bar-button-img"
              src="https://cdn0.iconfinder.com/data/icons/set-ui-app-android/32/8-512.png"
            ></img>
            <img
              className="head-bar-button-img"
              id="head-bar-button-arrow"
              src="https://cdn-bnogf.nitrocdn.com/aWZedTmOfQOvZtJlWuPorsweqUqMoGnA/assets/static/optimized/rev-977aead/wp-content/uploads/menu-arrow-down.png"
            ></img>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;