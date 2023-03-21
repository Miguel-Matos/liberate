/* eslint-disable consistent-return */
/* eslint-disable no-else-return */
/* eslint-disable no-plusplus */
const myLibrary = [];
const add = document.querySelector('#add');
const bookform = document.querySelector('#bookform');
const submitbook = document.querySelector('#submitbook');
const shelf = document.querySelector('#shelf');
const bookOnShelf = document.createElement('div');
bookform.style.display = 'none';

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

// adds the info function to Book constructor
Book.prototype.info = function () {
  return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`;
};

// Selects and adds appropriate whether book was read
function radio() {
  if (document.getElementById('read').checked) {
    return 'Read';
  } else if (document.getElementById('notread').checked) {
    return 'Not Read';
  }
}

// creates a new book object from the form info
// adds book to the library
function addBookToLibrary() {
  const newBook = new Book(document.querySelector('#title').value, document.querySelector('#author').value, document.querySelector('#pages').value, radio());
  myLibrary.push(newBook);
}

// opens the form
add.addEventListener('click', () => {
  bookform.style.display = 'block';
});

// displays the shelf
function shelfDisplay() {
  for (let i = 0; i < myLibrary.length; i++) {
    bookOnShelf.textContent = myLibrary[i].info();
  }
  shelf.appendChild(bookOnShelf);
}
// after the form is filled and user pushes submit
// calls addBookToLibrary and clears the form
submitbook.addEventListener('click', (e) => {
  e.preventDefault();
  addBookToLibrary();
  bookform.style.display = 'none';
  shelfDisplay();
  console.log(myLibrary);
  bookform.reset();
});
