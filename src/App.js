import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import ArticlesList from "./Components/ArticlesList";
import ArticleByID from "./Components/ArticleById";
import { UserContext } from "./context/UserContext";
import { useState } from "react";
import ErrorPage from "./Components/ErrorPage";

function App() {
  const [loggedIn, setLoggedIn] = useState({
    username: "jessjelly",
    avatar_url:
      "https://vignette.wikia.nocookie.net/mrmen/images/4/4f/MR_JELLY_4A.jpg/revision/latest?cb=20180104121141",
    name: "jess",
  });
  return (
    <UserContext.Provider value={{ loggedIn, setLoggedIn }}>
      <BrowserRouter>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={<ArticlesList />} />
            <Route path="/articles" element={<ArticlesList />} />
            <Route path="/articles/:topic" element={<ArticlesList />} />
            <Route path="/article/:articleId" element={<ArticleByID />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
