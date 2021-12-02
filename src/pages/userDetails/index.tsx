import React, { ReactElement } from "react";
import { useParams } from "react-router-dom";
import useSets from "../../api/useSets";
import useUserFull from "../../api/useUserFull";
import { Set } from "../../models/Set";
import { equalsIgnoreOrder } from "./utils";

export default function UserDetailsPage(): ReactElement {
  const { userId } = useParams();

  const { user } = useUserFull(userId);
  const { sets } = useSets();

  if (!user) {
    return <h1>User not found...</h1>;
  }

  // sets that can be built
  const setsToBuild: Set[] | undefined = sets?.filter((set) =>
    equalsIgnoreOrder(user.inventory.pieces, set.pieces)
  );

  return (
    <div className="UserDetails">
      <h1>{user?.name}</h1>
      {setsToBuild ? (
        <>
          <h3>You can build these sets:</h3>
          <ul>
            {setsToBuild.map((set) => (
              <li key={set.id}>{set.name}</li>
            ))}
          </ul>
        </>
      ) : (
        <h3>Sorry, you can't build anything... 😔</h3>
      )}
    </div>
  );
}
