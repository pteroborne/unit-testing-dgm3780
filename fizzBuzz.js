export default function fizzBuzz(number) {
    let array = []
    for (let i = 1; i <= number; i++) {
        switch (true) {
            case i % 3 === 0 && i % 5 === 0:
                array.push("fizzbuzz");
                break;
            case i % 3 === 0:
                array.push("fizz");
                break;
            case i % 5 === 0:
                array.push("buzz");
                break;
            default:
                array.push(i);
        }
    }
    return array
}