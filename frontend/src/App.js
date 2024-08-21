import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Browse from "./pages/browser/Browse";
import Search from "./pages/search/Search";
import { ContextMoviesProvider } from "./pages/hooks/ContextMovies";

function App() {
  return (
    <ContextMoviesProvider>
      <BrowserRouter>
        <div className="position-fixed top-0 left-0 w-100 h-100 bg-black z-n1" />
        <Routes>
          <Route path="/" element={<Browse />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </BrowserRouter>
    </ContextMoviesProvider>
  );
}

export default App;
