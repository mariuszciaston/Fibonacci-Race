function run(n) {
	switch (n) {
		case 0:
			return 0;
		case 1:
		case 2:
			return 1;
		default:
			return run(n - 1) + run(n - 2);
	}
}

function fibonacci(n) {
	if (n < 0) {
		console.log(`n < 0, use a positive number`);
	} else {
		for (let i = 0; i <= n; i += 1) {
			setTimeout(() => {
				console.log(`fibonacci(${i}) = ${run(i)}`);
			}, i * 100);
		}
	}
}

fibonacci(32);
