const { JSDOM } = require('jsdom')
const { gcd, solveWaterJug } = require('../src/index')

describe('GCD Function', () => {
	it('should return the greatest common divisor of two numbers', () => {
		expect(gcd(48, 18)).toBe(6)
		expect(gcd(101, 103)).toBe(1)
	})
})

describe('Solve Water Jug Problem', () => {
	let dom
	let document

	beforeEach(() => {
		dom = new JSDOM(`
            <!DOCTYPE html>
            <html>
                <body>
                    <input id="jugX" value="3" />
                    <input id="jugY" value="5" />
                    <input id="target" value="4" />
                    <div id="solution"></div>
                    <ul id="steps"></ul>
                </body>
            </html>
        `)
		document = dom.window.document
		global.document = document
	})

	it('should solve the water jug problem', () => {
		solveWaterJug()

		const solutionElement = document.getElementById('solution')
		const stepsElement = document.getElementById('steps')

		expect(solutionElement.textContent).toBe('Solution Found')
		expect(stepsElement.children.length).toBeGreaterThan(0)
	})
})
