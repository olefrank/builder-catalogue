import { Inventory } from "./Inventory";

export interface User {
  id: number;
  username: string;
}

export interface SummaryUser extends User {
  name: string;
  age: number;
}

export interface FullUser extends User, SummaryUser {
  inventory: Inventory;
}
