import React, { ReactElement } from "react";
import { Set } from "../../../models/Set";

export type Props = {
  sets: Set[];
};

export default function SetsToBuild({ sets }: Props): ReactElement | null {
  if (sets.length === 0) {
    return null;
  }

  return (
    <div>
      <h3 className="mt-5">You can build these sets</h3>
      <ul>
        {sets.map((set) => (
          <li key={set.id}>
            <span>{set.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
