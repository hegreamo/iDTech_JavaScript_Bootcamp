var utils  = require('course-utilities');
var Greet = utils.load('./unitTestingActivity.js', 'Greet');

test('works with a single name', () => {
    expect(Greet("Elizabeth")).toBe("Hello, Elizabeth");
});

test('works with a null value', () => {
    expect(Greet(null)).toBe("Hello there!");
});

test('shouts with an uppercase name', () => {
    expect(Greet("JOSE")).toBe("HELLO JOSE!");
});

test('works with two inputs', () => {
    expect(Greet(["Jose","Pep"])).toBe("Hello, Jose, Pep");
});

test('works with more than two inputs', () => {
    expect(Greet(["Alex","Arsene","Jose","Zidane"])).toBe("Hello, Alex, Arsene, Jose, Zidane");
});