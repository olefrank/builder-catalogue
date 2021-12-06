import React from "react";
import { SWRConfig } from "swr";
import UsersPage from "./pages/users";
import UserDetailsPage from "./pages/userDetails";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

function App() {
  return (
    <div className="prose">
      <SWRConfig
        value={{
          fetcher: (resource, init) =>
            fetch(resource, init).then((res) => res.json()),
        }}
      >
        <Router>
          <Routes>
            <Route path="/" element={<Navigate replace to="/users" />} />
            <Route path="/users" element={<UsersPage />} />
            <Route path="/users/:userId" element={<UserDetailsPage />} />
            <Route path="*" element={<h1>404 Page not found</h1>} />
          </Routes>
        </Router>
      </SWRConfig>
    </div>
  );
}

export default App;
