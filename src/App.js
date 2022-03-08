import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import ArticlesList from "./Components/ArticlesList";
import ArticleByID from "./Components/ArticleById";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<ArticlesList />} />
          <Route path="/articles" element={<ArticlesList />} />
          <Route path="/articles/:topic" element={<ArticlesList />} />
          <Route path="/article/:articleId" element={<ArticleByID />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
