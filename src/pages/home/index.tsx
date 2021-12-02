import React, { ReactElement } from "react";
import { Link } from "react-router-dom";
import { SummaryUser } from "../../models/User";
import useUserFull from "../../api/useUserFull";
import { equalsIgnoreOrder } from "./utils";
import useSets from "../../api/useSets";
import { Set } from "../../models/Set";

export default function HomePage(): ReactElement {
  const loggedIn: SummaryUser = {
    id: 1,
    username: "brickfan35",
    name: "Nmae here",
    age: 35,
  };

  // fetch logged in full user
  const { user } = useUserFull(loggedIn.id);

  // fetch all sets
  const { sets } = useSets();

  // sets that can be built
  const setsToBuild: Set[] | undefined =
    user &&
    sets &&
    sets.filter((set) => equalsIgnoreOrder(user.inventory.pieces, set.pieces));

  if (!setsToBuild) {
    return <h3>Sorry, you can't build anything... 😔</h3>;
  }

  return (
    <div className="Home">
      <div>
        <h1>Hi {loggedIn.username}</h1>
        <h3>You can build these sets:</h3>
        <ul>
          {setsToBuild.map((set) => (
            <li key={set.id}>{set.name}</li>
          ))}
        </ul>
      </div>
      <div>
        <Link to="/users">Users</Link>
      </div>
    </div>
  );
}
