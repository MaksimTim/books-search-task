import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./routes/home-page/home-page.component";
import BookPage from "./routes/book-page/book-page.component";

function App() {
  return (
    <Routes>
      <Route path={"/"} element={<HomePage />} />
      <Route path={"/book/:id"} element={<BookPage />} />
    </Routes>
  );
}

export default App;
