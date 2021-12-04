import { inventoryContainsSet } from "./utils";

describe("User Details utils", () => {
  // describe("equalsIgnoreOrder()", () => {
  //   it("should return true if collections are equal", () => {
  //     const a = [1, 2, 3];
  //     const b = [1, 2, 3];
  //     const actual = listsAreEqual(a, b);
  //     expect(actual).toEqual(true);
  //   });
  //   it("should return false if collections have same length but not equal", () => {
  //     const a = [1, 2, 3];
  //     const b = [1, 2, 4];
  //     const actual = listsAreEqual(a, b);
  //     expect(actual).toEqual(false);
  //   });
  //   it("should return false if collections does not have same length", () => {
  //     const a = [1, 2, 3];
  //     const b = [1, 2];
  //     const actual = listsAreEqual(a, b);
  //     expect(actual).toEqual(false);
  //   });
  //   it("should not ignore order of collections", () => {
  //     const a = [3, 2, 1];
  //     const b = [1, 2, 3];
  //     const actual = listsAreEqual(a, b);
  //     expect(actual).toEqual(false);
  //   });
  //   it("a", () => {
  //     // set[(4, 5, 6)];
  //     // inventory[(4, 4, 5, 6)];
  //     // true
  //   });
  //   it("b", () => {
  //     // set[(4, 4, 5, 6)];
  //     // inventory[(4, 4, 5, 6)];
  //     // true
  //   });
  // });

  describe("inventoryContainsSet()", () => {
    it("inventory is smaller than set", () => {
      const actual = inventoryContainsSet([1, 2, 3], [1, 2, 3, 4]);
      expect(actual).toEqual(false);
    });
    it("inventory contains only some elements in set", () => {
      const actual = inventoryContainsSet([1, 2, 3, 5], [1, 2, 3, 4]);
      expect(actual).toEqual(false);
    });
    it("inventory contains all elements in set", () => {
      const actual = inventoryContainsSet([1, 2, 3, 4], [1, 2, 3, 4]);
      expect(actual).toEqual(true);
    });
    it("set must be sorted numerically", () => {
      const actual = inventoryContainsSet([1, 2, 3, 4], [4, 2, 3, 1]);
      expect(actual).toEqual(false);
    });
    it("inventory must be sorted numerically", () => {
      const actual = inventoryContainsSet([2, 3, 1, 4], [1, 2, 3, 4]);
      expect(actual).toEqual(false);
    });
  });
});
