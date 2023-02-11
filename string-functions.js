export function reverseString(string) {
    return string.split("").reverse().join("");
}

export function uppercaseString(string) {
    return string.toUpperCase()
}

export function removeVowels(string) {
    return string.replace(/[aeiou]/gi, "");
}