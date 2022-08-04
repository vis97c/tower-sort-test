/**
 * Minimal cost to balance towers
 * Tower sort(kinda)
 */
export function minCost(count: number, heights: number[], costs: number[]): number {
	let result = 0;
	function getCount(current: number, next: number = current, previous: number = 0): number {
		let result = 0;
		while (previous <= current && current <= next) {
			current++;
			result++;
		}
		return result;
	}
	for (let i = 0; i < count; i++) {
		if (heights[i + 1] && heights[i] === heights[i + 1]) {
			// They are equal, compare them
			const currentCount = getCount(heights[i], heights[i + 1]);
			const currentCost = currentCount * costs[i];
			const nextCount = getCount(heights[i + 1], heights[i + 2], heights[i]);
			const nextCost = nextCount * costs[i + 1];
			if (currentCost < nextCost) {
				heights.splice(i, 1, heights[i] + currentCount);
				result += currentCost;
			} else {
				heights.splice(i + 1, 1, heights[i + 1] + nextCount);
				result += nextCost;
			}
		}
	}
	return result;
}
