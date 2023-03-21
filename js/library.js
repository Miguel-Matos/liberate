/* eslint-disable consistent-return */
/* eslint-disable no-else-return */
/* eslint-disable no-plusplus */
const myLibrary = [];
const add = document.querySelector('#add');
const bookform = document.querySelector('#bookform');
const submitbook = document.querySelector('#submitbook');
const shelf = document.querySelector('#shelf');
const cancel = document.querySelector('#cancel');
let readCheck = false;
bookform.style.display = 'none';

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

// closes and clears the form
cancel.addEventListener('click', (e) => {
  e.preventDefault();
  bookform.style.display = 'none';
  bookform.reset();
});
// adds the info function to Book constructor
Book.prototype.info = function () {
  return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`;
};

// Selects and adds appropriate whether book was read
function radio() {
  if (document.getElementById('read').checked) {
    readCheck = true;
    return 'Read';
  } else if (document.getElementById('notread').checked) {
    readCheck = false;
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
  const remove = document.createElement('button');
  const bookRead = document.createElement('button');
  bookRead.classList.add('bg-blue-300', 'rounded-lg', 'px-3', 'py-2');
  bookRead.innerText = 'Read';
  remove.classList.add('bg-red-300', 'rounded-lg', 'px-3', 'py-2');
  remove.innerText = 'Remove';
  const bookOnShelf = document.createElement('div');
  bookOnShelf.classList.add('bg-slate-100', 'p-5', 'rounded-lg', 'max-w-sm', 'text-center');
  for (let i = 0; i < myLibrary.length; i++) {
    bookOnShelf.textContent = myLibrary[i].info();
  }
  if (readCheck === false) {
    bookOnShelf.appendChild(bookRead);
  }
  bookOnShelf.appendChild(remove);
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
