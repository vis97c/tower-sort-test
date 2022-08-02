const { minCost } = require("../dist");

describe("Min Cost", () => {
	it("Should cost 2", () => {
		expect(minCost(3, [2, 2, 3], [4, 1, 5])).toBe(2);
	});
});
