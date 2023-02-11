// String functions
// A function that reverses a string. (eg. "Hello" becomes "olleH")
// A function that uppercases a string.
// A function that removes all vowels.

import {describe, expect, it, test} from "vitest";
import {reverseString, uppercaseString, removeVowels} from "./string-functions";

describe("#reverseString", () => {
    it("should reverse a string", () => {
        const input = Math.random().toString(36).substring(2);
        const expected = input.split("").reverse().join("");
        expect(reverseString(input)).toEqual(expected);
    });
});

describe("#uppercaseString", () => {
    it("should convert a string to uppercase", () => {
        const input = Math.random().toString(36).substring(2);
        const expected = input.toUpperCase();
        expect(uppercaseString(input)).toEqual(expected);
    });
});

describe("#removeVowels", () => {
    it("should remove all vowels from a string", () => {
        const input = Math.random().toString(36).substring(2);
        const expected = input.replace(/[aeiou]/gi, "");
        expect(removeVowels(input)).toEqual(expected);
    });
});

