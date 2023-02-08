import fizzBuzz from "./fizzBuzz"
import {describe, expect, it, test} from "vitest";

describe("#fizzBuzz", () => {
    it('should always return 1 as the first index', () => {
        expect(fizzbuzz(1)).toEqual([1])
    });
    it('should return fizzbuzz/fizz/buzz as expected', function () {
        for (let i = 1; i <= 1000; i++) {
            const result = fizzBuzz(i);
            switch (true) {
                case i % 3 === 0 && i % 5 === 0:
                    expect(result[i - 1]).toEqual("fizzbuzz");
                    break;
                case i % 3 === 0:
                    expect(result[i - 1]).toEqual("fizz");
                    break;
                case i % 5 === 0:
                    expect(result[i - 1]).toEqual("buzz");
                    break;
                default:
                    expect(result[i - 1]).toEqual(i);
            }
        }
    });
})