// Importing the Chai library to use its assert method, which offers more features than the built-in Node.js assertions
import { assert } from "chai";
//We are importing our Functions from src/index.js
import {
  helloWorld,
  addition,
  subtraction,
  multiplication,
  division,
  remainder,
  exponentiation,
} from "../src/index.js";

describe ("helloWorld Function", () => {
  it("should return a string", () => {
    const result = helloWorld();
    assert.typeOf(result, "string", "the return value should be a string")
  });
  it ('should return "Hello World"', () => {
    const result = helloWorld();
    assert.equal(result, "Hello World", "The result should be 'Hello World'");
  });
});

describe ("addition", () => {
  it("should return the sum of two numbers", () => {
    const result = addition(5, 10);
    assert.equal(result, 15, "5 + 10 should equal 15");
  });
});

describe ("subtraction", () => {
  it("should return the subtraction of two numbers", () => {
    const result = subtraction(10, 5);
    assert.equal(result, 5, "10 - 5 should equal 5");
  });
});

describe ("multiplication", () => {
  it("should return the multiplication of two numbers", () => {
    const result = multiplication(5, 5);
    assert.equal(result, 25, "5 * 5 should equal 25");
  });
});

describe ("division", () => {
  it("should return the division of two numbers", () => {
    const result = division(10, 5);
    assert.equal(result, 2, "10 / 5 should equal 2");
  });
});

describe ("remainder", () => {
  it("should return the remainder of two numbers", () => {
    const result = remainder(10, 5);
    assert.equal(result, 0, "10 % 5 should equal 0");
  });
});

describe ("exponentiation", () => {
  it("should return the exponent of two numbers", () => {
    const result = exponentiation(2, 2);
    assert.equal(result, 4, "2 to the power of 2 should equal 4");
  });
});