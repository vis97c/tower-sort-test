const { minCost } = require("../dist");

describe("Min Cost", () => {
	describe("Own tests", () => {
		it("Should cost 2", () => {
			expect(minCost(4, [2, 3, 3, 4], [4, 5, 1, 1])).toBe(2);
		});

		it("Should cost 1 instead", () => {
			expect(minCost(3, [2, 2, 3], [1, 4, 5])).toBe(1);
		});
	});

	describe("Challenge tests", () => {
		it("Should cost 0", () => {
			expect(minCost(4, [1, 3, 2, 1000000000], [7, 3, 6, 2])).toBe(0);
		});
		it("Should cost 9", () => {
			expect(minCost(3, [2, 2, 2], [3, 10, 6])).toBe(9);
		});
		it("Should cost 2", () => {
			expect(minCost(3, [2, 2, 3], [4, 1, 5])).toBe(2);
		});
	});
});
