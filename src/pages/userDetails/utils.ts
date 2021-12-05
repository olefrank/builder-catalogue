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

  // map keys with number of occurrences
  const inventoryMap = mapNumOccurrences(inventory);
  const setMap = mapNumOccurrences(set);

  // diff for each key in set
  const diffMap = diffSetKeys(inventoryMap, setMap);

  // find first key in set not present in inventory
  const missingValue = Object.values(diffMap).find((val: number) => val < 0);

  return missingValue === undefined;
}

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
