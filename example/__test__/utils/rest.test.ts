import rest from '../../../dist/utils/rest';

describe('Utils', () => {
	
	test('rest of 2 - 1 = 1', () => {
		expect(rest(2, 1)).toBe(1);
	});
});