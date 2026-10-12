
const express = require("express");

const app = express();

app.use(express.json());

let books = [
  { id: 1, title: "Tamil Book" },
  { id: 2, title: "English Book" }
];

// GET: All books
app.get("/books", (req, res) => {
  res.json(books);
});

// GET: One book
app.get("/books/:id", (req, res) => {
  const book = books.find(
    (b) => b.id === Number(req.params.id)
  );

  if (!book) {
    return res.status(404).json({
      message: "Book not found"
    });
  }

  res.json(book);
});

// POST: Add a new book
app.post("/books", (req, res) => {
  if (
    typeof req.body.title !== "string" ||
    !req.body.title.trim()
  ) {
    return res.status(400).json({
      message: "Title is required"
    });
  }

  const newBook = {
    id: books.length
      ? Math.max(...books.map((b) => b.id)) + 1
      : 1,
    title: req.body.title.trim()
  };

  books.push(newBook);

  res.status(201).json(newBook);
});

app.listen(3000, () => {
  console.log("REST API running on port 3000");
});
