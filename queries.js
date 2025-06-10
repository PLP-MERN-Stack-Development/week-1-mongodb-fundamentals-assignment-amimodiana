//Find all books in a specific genre
db.books.find({ genre: "Fiction" });


//Find books published after 1950;
db.books.find({ publishedYear: { $gt: 1950 } });

//Find books by a specific author George Orwell
db.books.find({ author: "George Orwell" });

//Update the price of a specific book The Hobbit
db.books.updateOne(
  { title: "The Hobbit" },
  { $set: { price: 12.99 } }
);
