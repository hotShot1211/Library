let myLibrary = [];
let display = document.querySelector(".book-display")

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function () {
        return `${this.title} by ${this.author}, ${this.pages}, ${this.read}`;
    }
}

let theHobbit = new Book('The Hobbit', 'J.R.R. Tolkein', '256', "Not Yet Read");

let harryPotter = new Book('Harry Potter', 'J.K. Rowling', '250', 'read');
function addBookToLibrary(newBook) {
    myLibrary.push(newBook);
}

addBookToLibrary(theHobbit);
addBookToLibrary(harryPotter);
console.log(myLibrary[1]);


console.log(harryPotter.info());

myLibrary.forEach(book => {
    console.log(book);
})

let form = document.querySelector("form");
let val;
console.log(form);
let newBook;
let read;
form.addEventListener("submit", function (event) {
    val = []
    display.innerHTML = "";
    for (let i = 0; i < form.length; i++) {
        val.push(form.elements[i].value);
    }
    console.log(val);
    read = (val[3] == "on" ? "read" : "not yet");
    newBook = new Book(val[0], val[1], val[2], read);
    addBookToLibrary(newBook);
    let i = 0;
    myLibrary.forEach(book => {
        let div = document.createElement("div");
        div.classList.add("book-1");
        div.setAttribute("data-number", i)
        div.innerHTML = `
    <div class="close"><button>X</button></div>
    <div class="details">
        <div class="title">${book.title}</div>
        <div class="author">author: ${book.author}</div>
        <div class="pages">pages: ${book.pages}</div>
        <div class="read">${book.read}</div>

    </div>`
        display.append(div);
        i++;

    })
    for (let i = 0; i < form.length; i++) {
        form.elements[i].value = "";
    }
    event.preventDefault();
})



