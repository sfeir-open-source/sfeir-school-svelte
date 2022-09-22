export const range = (min: number, max: number) => ({
	next: (x: number): number => (x === max ? min : x + 1),
	prev: (x: number): number => (x === min ? max : x - 1)
});
