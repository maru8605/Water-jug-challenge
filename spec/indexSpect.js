const { gcd, solveWaterJug } = require('../src/script')

describe('Water Jug Problem', () => {
	it('should return the correct gcd', () => {
		expect(gcd(8, 12)).toBe(4)
		expect(gcd(14, 21)).toBe(7)
		expect(gcd(37, 600)).toBe(1)
	})

	it('should solve the water jug problem', () => {
		let solution = solveWaterJug(3, 5, 4)
		expect(solution).not.toBe('No Solution')
		expect(solution[solution.length - 1]).toEqual([4, 0])

		solution = solveWaterJug(2, 6, 5)
		expect(solution).toBe('No Solution')
	})
})
