/**
 * @file index.js is the root file for this example app
 * @author Larissa Ramos
 * @see <a href="https://www.youtube.com/watch?v=YK-GurROGIg&t=848s">JSDOC TIPS</a>
 */

/**
 * Student Name
 * @type {string}
 */
const studentName = "John Doe";

/**
 * Array of grades
 * @type {Array <number>}
 */
const grades = [9, 1, 15, 5, 95];

const todo = {
    id: 1,
    text: "listen to music",
};

const calculateTax = (amount, tax) => {
    return `$${amount + tax * amount}`;
};

const employee = {
    id: 1,
    name: "John Doe",
    age: 27,
    isActive: true,
};

/**
 * Class to create a person object
 */
class Person {
    /**
     *
     * @param {Object} personInfo Information about the person
     */
    constructor(personInfo) {
        /**
         * @property {string} name Persons name
         */
        this.name = personInfo.name;
        /**
         * @property {string} age Persons age
         */
        this.age = personInfo.age;
    }

    /**
     * @property {Function} greet A greeting with the name and age
     * @returns void
     */
    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age}`);
    }
}
