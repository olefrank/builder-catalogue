// /**
//  * Compares items in two lists
//  * @param a number[] sorted list
//  * @param b number[] sorted list
//  * @returns Boolean, true if arrays are equal
//  */
// export function listsAreEqual(a: number[], b: number[]): boolean {
//   if (a.length !== b.length) {
//     return false;
//   }

//   // first occurrence of different values
//   const different = a.find((value, index) => value !== b[index]);

//   return different === undefined;
// }

// export function inventoryIncludesSet(
//   inventory: number[],
//   set: number[]
// ): boolean {
//   // set contains more pieces than inventory has
//   if (set.length > inventory.length) {
//     return false;
//   }
//   const intersect = listsIntersect(inventory, set);
//   return Boolean(intersect);
// }

// export function listsIntersect(a: number[], b: number[]): number[] {
//   // return a.filter((value) => b.includes(value));
//   return a.filter((value) => b.includes(value));
// }

/**
 * Determine if sorted inventory contains all elements of a sorted set
 * @param inventory must be sorted numerically
 * @param set must be sorted numerically
 * @returns Boolean
 */
export function inventoryContainsSet(
  inventory: number[],
  set: number[]
): boolean {
  if (inventory.length < set.length) {
    return false;
  }

  let result: number[] = [];
  let fromIndex = 0;

  // iterate set until element not contained in inventory
  set.some((id) => {
    fromIndex = inventory.indexOf(id, fromIndex);

    // set element not found in inventory
    if (fromIndex === -1) {
      return true;
    }

    result.push(inventory[fromIndex]);
    return false;
  });

  // whole set was found in inventory
  return result.length === set.length;
}
