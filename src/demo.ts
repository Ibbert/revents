// This file serves no purpose for this project.
// It is only meant to test out TypeScript

// Testing out variable of typescript
let data: string | number = 42;
data = 4;
console.log(data);

// Testing out car (wroom wroom)
type car = {
    name: string;
    year: number;
    color?: string;
}

const car1: car = {
    name: "BMW",
    year: 2024
}

const car2: car = {
    name: "Toyota",
    year: 2024,
    color: "blue"
}

car1.color = 'blue';
car2.color = 'green';

// Create a test function
function multiply(x: number, y: number) {
    return x * y;
}

multiply(2, 3)