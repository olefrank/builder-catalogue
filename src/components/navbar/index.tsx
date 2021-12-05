import React, { ReactElement } from "react";
import { Link } from "react-router-dom";

export default function Navbar(): ReactElement | null {
  return (
    <div className="flex items-center">
      <Link className="m-0 mr-4" to="/users">
        <img className="h-16" src="/lego-logo-512.png" alt="logo" />
      </Link>
      <h1 className="m-0">Builder Catalogue Challenge</h1>
    </div>
  );
}
