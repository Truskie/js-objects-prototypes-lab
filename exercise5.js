const vehicle = {
    wheels: 4,
    describe(){
        return `The vehicle has ${this.wheels} wheels`;
    }
};

const car = Object.create(vehicle);

car.make = 'Toyota';
car.model = 'Camry';
car.year = 2024;

console.log(car.describe());

console.log(Object.hasOwn(car, 'make'));
console.log(Object.hasOwn(car, 'model'));
console.log(Object.hasOwn(car, 'year'));
console.log(Object.hasOwn(car, 'wheels'));
console.log(Object.hasOwn(car, 'describe'));

console.log(car.wheels);
