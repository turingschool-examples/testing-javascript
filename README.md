# Introduction to Unit Testing in JavaScript

## Installation

First, clone this repository. Once, you have it on your computer, navigate to the directory in the terminal and run the following command:

```
npm install
```

## Starting Up

Run the following from your terminal:

```
npm start
```

## Getting Started

We'll be modifying two files as we complete these exercises:

- `implentation.js`
- `test.js`

Just to verify that everything works, there should be a first example in place.

```js
// implementation.js
function square(n) {
  return n * n;
}
```

```js
// test.js
describe('square', function () {

  it('returns the square of a number', function () {
    assert.equal(square(2), 4);
  });

});
```

## Together

Let's write a few simple cases together. We'll revisit our old friends from last week.

- `addTwo()`
- `multiply()`
- `subtract()`
- `multiply()`
- `divide()`

## Your Turn: FizzBuzz

FizzBuzz is a classic programming program that a lot of programmers [apparently can't do][atwood].

[atwood]: https://blog.codinghorror.com/why-cant-programmers-program/

We're going to write a function called `fizzBuzz()` that will behave as follows with the each rule taking precendence over all previous rules:

- If we pass it a number, it will return that number.
- If we pass a number that is a multiple of 3, it will return 'Fizz'.
- If we pass it a number that is a multiple of 5, it will return 'Buzz'.
- If we pass it a number that is a multiple of both 3 and 5, it will return 'FizzBuzz'.


