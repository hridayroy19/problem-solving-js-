const books = [
  { title: "Menager", author: "James Clear", year: 2018 },
  { title: "TLeader", author: "Paulo Coelho", year: 1988 },
  { title: "CEO", author: "Cal Newport", year: 2016 },
];

const getBooktitle = (bookArray) => {
  return bookArray?.map((books) => books.title);
};

const titles = getBooktitle(books);
console.log(titles);
