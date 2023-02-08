import fizzBuzz from "./fizzBuzz"
import {describe, expect, it, test} from "vitest";

describe("#fizzBuzz", () => {
    it('should return fizzbuzz/fizz/buzz as expected', function () {
        let result = fizzBuzz(1000)
        for (let i = 0; i < 1000; i++) {
            switch (true) {
                case (i + 1) % 3 === 0 && (i + 1) % 5 === 0:
                    expect(result[i]).toEqual("fizzbuzz");
                    break;
                case (i + 1) % 3 === 0:
                    expect(result[i]).toEqual("fizz");
                    break;
                case (i + 1) % 5 === 0:
                    expect(result[i]).toEqual("buzz");
                    break;
                default:
                    expect(result[i]).toEqual(i + 1);
            }
        }
    });
})