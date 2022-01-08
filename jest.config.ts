export default {
	transformIgnorePatterns: [
		//"dist/(?!@ngrx|(?!deck.gl)|ng-dynamic)"
	],
	transform: { '^.+\\.(ts?|js)$': 'ts-jest',},
	clearMocks: true,
	collectCoverage: true,
	coverageDirectory: "coverage",
	testEnvironment: "jsdom",
};
