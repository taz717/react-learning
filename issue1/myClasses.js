class Human { // This is the parent class
    gender = "male";

    printGender = () => {
        console.log(this.gender);
    }
}

class Person extends Human { // This is the bb class
    name = "taz";

    printMyName = () => {
        console.log(this.name);
    }
}

const person = new Person(); // almost exactly the same as python but feels easier?
person.printMyName();
person.printGender();
