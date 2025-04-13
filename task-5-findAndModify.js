const user = [
  { name: "Hridoy", age: 22 },
  { name: "Debika", age: 21 },
  { name: "Prodeep", age: 23 },
];

const updateAgeByName = (userArray, userName, newAge) => {
  const user = userArray.find((p) => p.name === userName);
  if (user) {
    user.age = newAge;
  }
  return userArray;
};

const updateduser = updateAgeByName(user, "Debika", 2333);
console.log(updateduser);
