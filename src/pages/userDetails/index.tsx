import React, { ReactElement } from "react";
import { useParams } from "react-router-dom";
import useSets from "../../api/useSets";
import useUserFull from "../../api/useUserFull";
import Navbar from "../../components/navbar";
import { inventoryContainsSet, mapNumOccurrences } from "./utils";

export default function UserDetailsPage(): ReactElement {
  const { userId } = useParams();

  const { user } = useUserFull(userId);
  const { sets } = useSets();

  if (!user) {
    return <h1>User not found...</h1>;
  }

  // sets that can be built
  const setsToBuild = sets?.filter((set) =>
    inventoryContainsSet(user.inventory.pieceIds, set.pieceIds)
  );

  return (
    <div>
      <Navbar />
      <h2>{user?.name}</h2>
      <h3>Pieces in your inventory:</h3>
      <p>
        {JSON.stringify(mapNumOccurrences(user.inventory.pieceIds), null, 2)}
      </p>
      {setsToBuild && setsToBuild.length > 0 ? (
        <>
          <h3>You can build these sets:</h3>
          <ul>
            {setsToBuild.map((set) => (
              <li key={set.id}>
                <span className="mr-4">{set.name}</span>
                <span>
                  {JSON.stringify(mapNumOccurrences(set.pieceIds), null, 2)}
                </span>
              </li>
            ))}
          </ul>
        </>
      ) : (
        <h3>Sorry, you can't build anything... 😔</h3>
      )}
    </div>
  );
}
