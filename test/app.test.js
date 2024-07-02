const myApp = require('../src/app');

function getRandomInt(max) {
	return Math.floor(Math.random() * max);
}

// Test sum
test('adds 2 integer and the result is valid', () => {
	let number1 = getRandomInt(10);
	let number2 = getRandomInt(10);
	let total = myApp.sum(number1, number2);

	expect(total).toBe(number1 + number2);
});

// Test isPalindrome
describe('string is ', () => {
	beforeAll(() => {
		console.log("before test palindrome");
	});

	afterAll(() => {
		console.log("after test palindrome");
	});

	test('a palindrome', () => {
		let string1 = "ab";
		let string2 = "aaaa";
		let string3 = "laval";
		let string4 = "racecar";
		expect(myApp.isPalindrome(string1)).toBeTruthy();
		expect(myApp.isPalindrome(string2)).toBeTruthy();
		expect(myApp.isPalindrome(string3)).toBeTruthy();
		expect(myApp.isPalindrome(string4)).toBeTruthy();
	});

	test('not a palindrome', () => {
		let string1 = "ab";
		let string2 = "launchcode";
		let string3 = "abA";
		let string4 = "so many dynamos";
		expect(myApp.isPalindrome(string1)).toBeFalsy();
		expect(myApp.isPalindrome(string2)).toBeFalsy();
		expect(myApp.isPalindrome(string3)).toBeFalsy();
		expect(myApp.isPalindrome(string4)).toBeFalsy();
	});
});

// Test functions fromEuro...
describe('accurate conversion from Euros to ', () => {
	beforeAll(() => {
		console.log("before test conversions");
	});

	afterAll(() => {
		console.log("after test conversions");
	});

	test('Dollars', () => {
		let value = getRandomInt(10);
		let conversionResult = myApp.fromEuroToDollar(value);
		expect(conversionResult).toBe(value *  myApp.oneEuroIs.USD);
	});

	test('Yens', () => {
		let value = getRandomInt(10);
		let conversionResult = myApp.fromEuroToJapanYen(value);
		expect(conversionResult).toBe(value *  myApp.oneEuroIs.JPY);
	});

	test(
		'Pounds', () => {
		let value = getRandomInt(10);
		let conversionResult = myApp.fromEuroToBritish(value);
		expect(conversionResult).toBe(value *  myApp.oneEuroIs.GBP);
	});
});


