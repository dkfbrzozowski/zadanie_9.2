function getTriangleArea(a, h) {
	if (a <= 0 || h <= 0) {
		console.log('Nieprawidłowe dane');
	} else {
		return a * h / 2;
	}
}
getTriangleArea();

var triangle1Area = getTriangleArea(20, 5),
	triangle2Area = getTriangleArea(10, 8),
	triangle3Area = getTriangleArea(2, 5);

console.log(triangle1Area);
console.log(triangle2Area);
console.log(triangle3Area);