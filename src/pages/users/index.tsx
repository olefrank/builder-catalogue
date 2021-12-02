import React, { ReactElement } from "react";
import useUsers from "../../api/useUsers";

export default function UsersPage(): ReactElement | null {
  const { users } = useUsers();

  if (!users) {
    return null;
  }

  return (
    <ul>
      {users.map(({ username, id }) => (
        <li>
          <div>{username}</div>
          <div>{id}</div>
        </li>
      ))}
    </ul>
  );
}
