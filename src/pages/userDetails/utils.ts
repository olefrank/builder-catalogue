import { UseUsers } from "../../api/useUsers";
import { FullUser } from "../../models/User";

/**
 * Map values in list with how many times the value occurs in list
 * @param list list of numbers
 * @returns Record<number, number>
 */
export function mapNumOccurrences(list: number[]): Record<number, number> {
  return list.reduce((acc: Record<number, number>, current) => {
    const currentValue = acc[current];
    return {
      ...acc,
      [current]: currentValue === undefined ? 1 : currentValue + 1,
    };
  }, {});
}

/**
 *
 * @param inventoryMap map of keys in inventory
 * @param setMap map of keys in set
 * @returns Record<number, number>
 */
export function diffSetKeys(
  inventoryMap: Record<number, number>,
  setMap: Record<number, number>
): Record<number, number> {
  return Object.keys(setMap).reduce((acc: Record<number, number>, current) => {
    const inventoryValue = inventoryMap[+current];
    const setValue = setMap[+current];
    return {
      ...acc,
      [current]:
        inventoryValue !== undefined
          ? inventoryValue - setValue
          : setValue * -1,
    };
  }, {});
}

/**
 * Mapped diff of each piece id between two lists of piece ids
 * @param inventory list of piece ids
 * @param set list of piece ids
 * @returns Record<number, number>
 */
export function diffInventoryAndSet(
  inventory: number[],
  set: number[]
): Record<number, number> {
  // map keys with number of occurrences
  const inventoryMap = mapNumOccurrences(inventory);
  const setMap = mapNumOccurrences(set);

  // diff for each key in set
  return diffSetKeys(inventoryMap, setMap);
}

/**
 * Determine if inventory contains all pieces in set
 * @param inventory list of piece id's
 * @param set list of piece id's
 * @returns boolean
 */
export function inventoryContainsSet(
  inventory: number[],
  set: number[]
): boolean {
  if (inventory.length < set.length) {
    return false;
  }

  // diff for each key in set
  const diffMap = diffInventoryAndSet(inventory, set);

  // find first key in set not present in inventory
  const missingValue = Object.values(diffMap).find((val: number) => val < 0);

  return missingValue === undefined;
}

/**
 * Mapped missing pieces of set in inventory (piece id / number of missing pieces)
 * @param inventory list of piece ids
 * @param set list of piece ids
 * @returns Record<number, number>
 */
export function missingPieces(
  inventory: number[],
  set: number[]
): Record<number, number> {
  const diff = diffInventoryAndSet(inventory, set);

  return Object.keys(diff).reduce((acc, current) => {
    return {
      ...acc,
      ...(diff[+current] < 0 && { [current]: diff[+current] }),
    };
  }, {});
}

/**
 * Get list of users that has soem of the specified pieces in their inventory
 * @param missingPieces map of piece id and number of pieces
 * @param users list of users
 * @returns list of users
 */
export function getUsersWithPieces(
  missingPieces: Record<number, number>,
  users: UseUsers["users"]
): FullUser[] {
  return users
    ? users.filter((user) => {
        return Object.keys(missingPieces).some((key) =>
          user.inventory.pieceIds.includes(+key)
        );
      })
    : [];
}
