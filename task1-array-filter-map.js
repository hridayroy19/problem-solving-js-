const user = [
  { name: "Hridoy", age: 22, gender: "male" },
  { name: "Debika", age: 21, gender: "female" },
  { name: "Prodeep", age: 23, gender: "male" },
  { name: "Tithi", age: 25, gender: "female" },
];

function getMaleNames(usersArray) {
    const females = usersArray.filter(user => user.gender === "female");
    const names = females.map(user => user.name);
    return names;
}

const result = getMaleNames(user);
console.log(result);
