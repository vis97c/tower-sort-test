function sum(current: number, next: number): number {
	let result = 0;
	while (current <= next) {
		current++;
		result++;
	}
	return result;
}

/**
 * Minimal cost to balance towers
 * Tower sort(kinda)}
 * TODO: clarify propper input format (..args?)
 */
export function minCost(count: number, heights: number[], costs: number[]): number {
	// console.log("minCost");
	let result = 0;
	for (let i = 0; i < count; i++) {
		// console.log(heights);
		if (heights[i + 1] && heights[i] === heights[i + 1]) {
			// they are equal
			const currentCount = sum(heights[i], heights[i + 1]);
			const currentCost = currentCount * costs[i];
			const nextCount = heights[i + 2] && sum(heights[i + 1], heights[i + 2]);
			const nextCost = nextCount * costs[i + 1];
			// console.log(currentCount, nextCount);
			if (currentCost < nextCost) {
				// console.log("current");
				heights.splice(i, 1, heights[i] + currentCount);
				// heights[i] += currentCost / costs[i];
				result += currentCost;
			} else {
				// console.log("next");
				heights.splice(i + 1, 1, heights[i + 1] + nextCount);
				// heights[i + 1] += nextCost / costs[i + 1];
				result += nextCost;
			}
		}
	}
	return result;
}
