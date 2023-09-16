let newbookForm = document.getElementById("newbook-form");
let newbookBtn = document.getElementById("newbook-btn");
let libraryEL = document.getElementById("library");

let myLibrary = [];

function Book(title, author, pages, read) {
   this.title = title;
   this.author = author;
   this.pages = pages;
   this.read = read;
}

Book.prototype.toggleRead = function() {
  this.read = !this.read;
}

function toggleRead(index) {
  myLibrary[index].toggleRead();
  render();
}

function render() {
    libraryEL.innerHTML = "";
  for (let i = 0; i < myLibrary.length; i++) {
    let book = myLibrary[i];
    let bookEl = document.createElement("div");
    bookEl.setAttribute("class", "book-card");
    bookEl.innerHTML = `
    <div class="card-header">
        <h3 class="title">${book.title}</h3>
        <h5 class="author">By ${book.author}</h5>
    </div>
    <div class="card-body">
        <p>${book.pages} pages</p>
        <p class="read-status">${book.read ? "Read" : "Not Read Yet"}</p>
        <button class = "remove-btn" onclick = "removeBook(${i})">Remove</button>
        <button class = "toggle-read-btn" onclick = "toggleRead(${i})">Toggle Read</button>
    </div>`;
    libraryEL.appendChild(bookEl);

  }


}

function removeBook(index) {
  myLibrary.splice(index, 1);
  render();
}

function addBookToLibrary() {
   let title = document.getElementById("title").value;
   let author = document.getElementById("author").value;
   let pages = document.getElementById("pages").value;
   let read = document.getElementById("read").checked;
   let newBook = new Book(title, author, pages, read);
   myLibrary.push(newBook)
   render();
}




newbookBtn.addEventListener("click", function() {
    newbookForm.style.display = "block";
})

newbookForm.addEventListener("submit", function(event) {
    event.preventDefault();
    addBookToLibrary();
    newbookForm.reset();
})