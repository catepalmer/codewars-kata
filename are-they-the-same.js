function comp(a, b) {
	if (a == null || b == null) return false
	a = a.map(num => Math.pow(num, 2)).sort((c, d) => c - d)
	b = b.sort((c, d) => c - d)
	return a.every((num, i) => {
		return num === b[i]
	})
}