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

// creates a new book object from the form info
// adds book to the library
function addBookToLibrary() {
  const newBook = new Book(document.querySelector('#title').value, document.querySelector('#author').value, document.querySelector('#pages').value, document.querySelector('.yesno').value);
  myLibrary.push(newBook);
}

// opens the form
add.addEventListener('click', () => {
  bookform.style.display = 'block';
});

// displays the shelf
function shelfDisplay() {
  bookOnShelf.textContent = myLibrary[0].info();
  shelf.appendChild(bookOnShelf);
}

// after the form is filled and user pushes submit
// calls addBookToLibrary and clears the form
submitbook.addEventListener('click', (e) => {
  e.preventDefault();
  addBookToLibrary();
  bookform.style.display = 'none';
  shelfDisplay();
  // console.log(myLibrary[0].info());
  bookform.reset();
});
