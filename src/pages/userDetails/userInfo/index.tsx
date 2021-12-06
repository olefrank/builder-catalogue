import React, { ReactElement } from "react";
import { mapNumOccurrences } from "../utils";
import { FullUser } from "../../../models/User";

export type Props = {
  user: FullUser;
};

export default function UserInfo({ user }: Props): ReactElement {
  return (
    <div>
      <h2 className="mt-5">
        <span className="mr-2">{user?.name}</span>
        <span className="text-gray-400 italic font-normal">
          ({user?.username})
        </span>
      </h2>
      <h3>Pieces in your inventory:</h3>
      <p>
        {JSON.stringify(mapNumOccurrences(user.inventory.pieceIds), null, 2)}
      </p>
    </div>
  );
}
