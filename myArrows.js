// this is just a different way of making js functions, You should know

function printMyName(name) {
    console.log(name);
}

printMyName("taz");


// however arrows work like show below

const printMyName2 = (name) => {
    console.log(name);
}

printMyName2("taz");

// now if you don't have something to pass inside the function, you still got remember the ()

const printMyName3 = () => {
    console.log("taz");
}

printMyName3();

// remember you can have more than 1 input

const printMyName4 = (name, age) => {
    console.log(name, age);
}

printMyName4("taz", "11");