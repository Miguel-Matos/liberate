let myLibrary = [];
let index = 0;
let add = document.querySelector("#add");
let bookform = document.querySelector('#bookform')
bookform.style.display = "none;"

function Book(title, author, pages, read) {
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read
}

Book.prototype.info = function() {
  return this.title + " by " + this.author + ", " + this.pages + " pages, " + this.read;
}
// const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, false);

// console.log(theHobbit.info());
function addBookToLibrary () {
  console.log("What is e?");
}

add.addEventListener("click", (e) => {
  
  addBookToLibrary();
  console.log(e);
});



