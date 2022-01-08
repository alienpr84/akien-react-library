import sum from '../../dist/utils/sum';

test('sum of 1 + 1 = 2', () => {
	expect(sum(1, 1)).toBe(2);
});
