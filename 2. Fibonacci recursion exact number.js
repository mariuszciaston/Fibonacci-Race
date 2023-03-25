function fibonacci(n) {
	switch (n) {
		case 0:
			return 0;
		case 1:
		case 2:
			return 1;
		default:
			return fibonacci(n - 1) + fibonacci(n - 2);
	}
}

const n = 12;

if (n < 0) {
	console.log(`n < 0, use a positive number`);
} else {
	console.log(`fibonacci(${n}) = ${fibonacci(n)}`);
}
