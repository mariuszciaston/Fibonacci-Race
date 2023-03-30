function fibonacci(n) {
	let first = 0;
	let second = 1;

	if (n < 0) {
		console.log(`n < 0, use a positive number`);
	}

	if (n >= 0) {
		console.log(`fibonacci(${first}) = ${first}`);
	}

	if (n >= 1) {
		console.log(`fibonacci(${second}) = ${second}`);
	}

	function delay(i) {
		setTimeout(() => {
			const next = first + second;
			console.log(`fibonacci(${i}) = ${next}`);
			first = second;
			second = next;
		}, 100 * i);
	}
	for (let i = 2; i <= n; i += 1) {
		delay(i);
	}
}

fibonacci(64);
