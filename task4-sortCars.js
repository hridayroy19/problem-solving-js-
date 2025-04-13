const cars = [
  { make: "Toyota", model: "Corolla", year: 2030 },
  { make: "Honda", model: "Civic", year: 2016 },
  { make: "Ford", model: "Focus", year: 2021 },
  { make: "Mazda", model: "3", year: 2018 },
];

const sortCarsByYear = (carsArray) => {
  return carsArray.sort((a, b) => a.year - b.year);
};

const sortedCars = sortCarsByYear(cars);
console.log(sortedCars);
