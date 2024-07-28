function gcd(a, b) {
	return b === 0 ? a : gcd(b, a % b)
}

function solveWaterJug() {
	const jugX = parseInt(document.getElementById('jugX').value)
	const jugY = parseInt(document.getElementById('jugY').value)
	const target = parseInt(document.getElementById('target').value)
	const solutionElement = document.getElementById('solution')
	const stepsElement = document.getElementById('steps')

	solutionElement.textContent = ''
	stepsElement.innerHTML = ''

	if (target > Math.max(jugX, jugY) || target % gcd(jugX, jugY) !== 0) {
		solutionElement.textContent = 'No Solution'
		return
	}

	let queue = [[0, 0]]
	let visited = new Set()
	let found = false
	let path = []

	while (queue.length > 0) {
		let [x, y] = queue.shift()
		path.push([x, y])

		if (x === target || y === target) {
			found = true
			path.push([x, y])
			break
		}

		let state = `${x},${y}`
		if (visited.has(state)) continue
		visited.add(state)

		let actions = [
			[jugX, y], // Fill jug X
			[x, jugY], // Fill jug Y
			[0, y], // Empty jug X
			[x, 0], // Empty jug Y
			[x - Math.min(x, jugY - y), y + Math.min(x, jugY - y)], // Pour X to Y
			[x + Math.min(y, jugX - x), y - Math.min(y, jugX - x)], // Pour Y to X
		]

		for (let action of actions) {
			if (!visited.has(`${action[0]},${action[1]}`)) {
				queue.push(action)
			}
		}
	}

	if (found) {
		solutionElement.textContent = 'Solution Found'
		path.forEach((step) => {
			const li = document.createElement('li')
			li.textContent = `Jug X: ${step[0]} gallons, Jug Y: ${step[1]} gallons`
			stepsElement.appendChild(li)
		})
	} else {
		solutionElement.textContent = 'No Solution'
	}
}


module.exports = { gcd, solveWaterJug }