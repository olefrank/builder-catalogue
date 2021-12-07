import React, { ReactElement } from "react";
import { Set } from "../../../models/Set";

export type Props = {
  sets: Set[];
};

export default function SetsToBuild({ sets }: Props): ReactElement {
  return (
    <ul>
      {sets.map((set) => (
        <li key={`set-${set.id}`}>
          <span>{set.name}</span>
        </li>
      ))}
    </ul>
  );
}
