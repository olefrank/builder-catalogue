import React, { ReactElement } from "react";
import { Link } from "react-router-dom";
import useUsers from "../../api/useUsers";

export default function UsersPage(): ReactElement | null {
  const { users } = useUsers();

  if (!users) {
    return null;
  }

  return (
    <div className="m-10">
      <img className="h-16 mx-auto" src="/lego-logo-512.png" alt="logo" />
      <h1>Builder Catalogue Challenge</h1>
      <h2>Users</h2>
      <ul>
        {users.map(({ username, id }) => (
          <li key={id}>
            <Link to={`/users/${id}`}>{username}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
