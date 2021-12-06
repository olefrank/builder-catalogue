import React, { ReactElement } from "react";
import { useParams } from "react-router-dom";
import useSets from "../../api/useSets";
import useUserFull from "../../api/useUserFull";
import Navbar from "../../components/navbar";
import { inventoryContainsSet } from "./utils";
import { Set } from "../../models/Set";
import UserInfo from "./userInfo";
import SetsToBuild from "./setsToBuild";
import SetsToCollaborate from "./setsToCollaborate";

export default function UserDetailsPage(): ReactElement {
  const { userId } = useParams();
  const { user } = useUserFull(userId);
  const { sets } = useSets();

  if (!user) {
    return <h1>User not found...</h1>;
  }

  // list of sets user has inventory to build
  const setsToBuild: Set[] = [];

  // list of sets user doesn't have inventory to build
  const setsForCollaboration: Set[] = [];

  sets?.forEach((set) => {
    if (inventoryContainsSet(user.inventory.pieceIds, set.pieceIds)) {
      setsToBuild.push(set);
    } else {
      setsForCollaboration.push(set);
    }
  });

  return (
    <div>
      <Navbar />
      <div className="flex flex-col">
        <div className="card mb-4">
          <UserInfo user={user} />
        </div>
        <div className="flex flex-row">
          <div className="card flex-1 mr-4">
            <SetsToBuild sets={setsToBuild} />
          </div>
          <div className="card flex-1">
            <SetsToCollaborate sets={setsForCollaboration} user={user} />
          </div>
        </div>
      </div>
    </div>
  );
}
