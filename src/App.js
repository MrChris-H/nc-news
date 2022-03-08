import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import ArticlesList from "./Components/ArticlesList";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <ArticlesList />
      </div>
    </BrowserRouter>
  );
}

export default App;
