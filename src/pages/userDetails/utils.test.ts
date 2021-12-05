import { diffSetKeys, inventoryContainsSet, mapNumOccurrences } from "./utils";

describe("User Details utils", () => {
  describe("inventoryContainsSet()", () => {
    it("inventory is smaller than set", () => {
      const actual = inventoryContainsSet([1, 2, 3], [1, 2, 3, 4]);
      expect(actual).toEqual(false);
    });
    it("inventory is equal length as set but contains only some elements", () => {
      const actual = inventoryContainsSet([1, 2, 3, 5], [1, 2, 3, 4]);
      expect(actual).toEqual(false);
    });
    it("inventory is larger than set but contains only some elements", () => {
      const actual = inventoryContainsSet(
        [1, 1, 3, 3, 4, 4, 5, 6],
        [3, 3, 3, 3, 4, 5, 5]
      );
      expect(actual).toEqual(false);
    });
    it("inventory contains all elements", () => {
      const actual = inventoryContainsSet([1, 2, 3, 4], [1, 2, 3, 4]);
      expect(actual).toEqual(true);
    });
  });
  describe("mapNumOccurrences()", () => {
    it("should sum up occurrences of all values in list", () => {
      const actual = mapNumOccurrences([1, 2, 3, 4, 1, 2, 3, 4]);
      expect(actual).toEqual({ 1: 2, 2: 2, 3: 2, 4: 2 });
    });
    it("list can contain both values occurring single and multiple times", () => {
      const actual = mapNumOccurrences([1, 2, 1, 3, 5, 1, 5]);
      expect(actual).toEqual({ 1: 3, 2: 1, 3: 1, 5: 2 });
    });
  });
  describe("diffSetKeys()", () => {
    it("should subtract set value from inventory value", () => {
      const map = { 1: 2, 3: 3, 4: 1 };

      const actual = diffSetKeys(map, map);
      expect(actual).toEqual({ 1: 0, 3: 0, 4: 0 });
    });
    it("if value is not in inventory it out negate set value", () => {
      const inventory = { 1: 2, 3: 3, 4: 4 };
      const set = { 1: 2, 2: 2, 3: 3 };

      const actual = diffSetKeys(inventory, set);
      expect(actual).toEqual({ 1: 0, 2: -2, 3: 0 });
    });
    it("should only include values present in set", () => {
      const inventory = { 1: 2, 3: 3, 4: 4 };
      const set = { 1: 2, 2: 2, 3: 3 };

      const actual = diffSetKeys(inventory, set);
      expect(actual).not.toHaveProperty("4");
    });
  });
});
