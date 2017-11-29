function getTriangleArea(a, h) {
var a,
	h;
if (a <= 0 || h <= 0) {
	console.log('Nieprawidłowe dane');
} else {
	value = a * h / 2;
}
return value;
}
getTriangleArea();

var triangle1Area = getTriangleArea(20, 5),
	triangle2Area = getTriangleArea(10, 8),
	triangle3Area = getTriangleArea(2, 5);

console.log(triangle1Area);
console.log(triangle2Area);
console.log(triangle3Area);