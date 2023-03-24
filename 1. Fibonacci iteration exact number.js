function fibonacci(n) {
	let first = 0;
	let second = 1;

	if (n < 0) {
		console.log(`n < 0, use a positive number`);
	}
	if (n === 0 || n === 1) {
		console.log(`fibonacci(${n}) = ${n}`);
	}

	for (let i = 2; i <= n; i += 1) {
		const next = first + second;
		if (n === i) console.log(`fibonacci(${i}) = ${next}`);
		first = second;
		second = next;
	}
}

fibonacci(12);
