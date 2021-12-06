import React, { ReactElement } from "react";
import { Link } from "react-router-dom";
import { getUsersWithPieces, missingPieces } from "../utils";
import { Set } from "../../../models/Set";
import { FullUser } from "../../../models/User";
import useUsers from "../../../api/useUsers";

export type Props = {
  sets: Set[];
  user: FullUser;
};

export default function SetsToCollaborate({ sets, user }: Props): ReactElement {
  const { users } = useUsers();

  return (
    <ul>
      {sets.map((set) => {
        const missing = missingPieces(user.inventory.pieceIds, set.pieceIds);
        const usersToCollaborate = getUsersWithPieces(missing, users);

        return (
          <li key={set.id}>
            <div className="mr-4 line-through">{set.name}</div>
            <div className="text-gray-500">
              Missing {JSON.stringify(missing, null, 2)}
            </div>

            {usersToCollaborate.length > 0 ? (
              <ul>
                {usersToCollaborate.map((u: FullUser) =>
                  u.id !== user.id ? (
                    <li key={user.id + "id"}>
                      <span>
                        <Link to={`/users/${u.id}`}>{u.username}</Link>
                        {` can help`}
                      </span>
                    </li>
                  ) : null
                )}
              </ul>
            ) : null}
          </li>
        );
      })}
    </ul>
  );
}
