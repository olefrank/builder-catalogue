import React from "react";
import "./App.css";
import { SWRConfig } from "swr";
import UsersPage from "./pages/users";
import HomePage from "./pages/home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <SWRConfig
      value={{
        fetcher: (resource, init) =>
          fetch(resource, init).then((res) => res.json()),
      }}
    >
      <Router>
        <Routes>
          <Route path="/users" element={<UsersPage />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Router>
    </SWRConfig>
  );
}

export default App;
