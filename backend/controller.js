const { phoneLetters } = require("./data");

class Controller {
    constructor() {
        this.phoneLetters = phoneLetters;
    }

    convertNumber(number) {
        return new Promise((resolve) => {
            const numbers = number.split('');
            const numberLetters = numbers.map((number) => this.phoneLetters[number]);

            const concat = (letters, current, ...args) => {
                if (numberLetters[current]) {
                    const part = letters.map((letter, idx) => {
                        return (
                            (idx === 0 ? letter : args.join("") + letter) +
                            concat(numberLetters[current + 1], current + 1, ...args, letter)
                        );
                    });

                    return part.join(",");
                }

                return "";
            };

            const result = concat(numberLetters[0], 0, "");

            resolve(result.split(','));
        })
    }
}

module.exports = { Controller };
