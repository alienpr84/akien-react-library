function sum(...args: number[]): number {
	return args.reduce(
		(total: number, current: number) => total += current
	);
}

export default sum;