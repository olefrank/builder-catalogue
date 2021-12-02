/**
 * Compare items T in 2 arrays ignoring their order
 * @param a T[]
 * @param b T[]
 * @returns arrays are equal Boolean
 */
export function equalsIgnoreOrder<T>(a: T[], b: T[]): boolean {
  if (a.length !== b.length) {
    return false;
  }

  // unique values from both arrays
  const uniqueValues = new Set([...a, ...b]);

  uniqueValues.forEach((v) => {
    // count how many of each item in both arrays
    const aCount = a.filter((item) => item === v).length;
    const bCount = b.filter((item) => item === v).length;

    if (aCount !== bCount) {
      return false;
    }
  });

  return true;
}
