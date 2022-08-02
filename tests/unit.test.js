const { minCost } = require("../dist");

describe("Min Cost", () => {
	it("Should cost 2", () => {
		expect(minCost(3, [2, 2, 3], [4, 1, 5])).toBe(2);
	});

	it("Should cost 2 as well", () => {
		expect(minCost(4, [2, 3, 3, 4], [4, 5, 1, 1])).toBe(2);
	});

	it("Should cost 1 instead", () => {
		expect(minCost(3, [2, 2, 3], [1, 4, 5])).toBe(1);
	});
});
