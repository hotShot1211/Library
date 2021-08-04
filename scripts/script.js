
let close = document.querySelector('.close button');
let formCntnr = document.querySelector('.form-cntnr');
let display = document.querySelector(".book-display")
let add = document.querySelector('img');
let myLibrary = [];
let form = document.querySelector("form");
let val;
let newBook;
let read;


function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function(){
        return `${this.title} by ${this.author}, ${this.pages}, ${this.read}`;
    }
}

function bookDisplay(myLibrary){
    display.innerHTML = "";
    let i = 0;
    myLibrary.forEach(book => {
        let div = document.createElement("div");
        div.classList.add("book-1");
        // div.setAttribute("data-number", i)
        div.innerHTML = `
    <div class="delete"><button id="${i}">X</button></div>
    <div class="details">
        <div class="title">${book.title}</div>
        <div class="author">author: ${book.author}</div>
        <div class="pages">pages: ${book.pages}</div>
        <div class="read">${book.read}</div>

    </div>`
        display.append(div);
        i++;


    })
}

function deleteBook(){
    let del = document.querySelectorAll(".delete button");
    del.forEach(delButton => {
        delButton.addEventListener("click", () =>  {
            let number = delButton.id;
            myLibrary.splice(number, 1);
            bookDisplay(myLibrary);
        })
    })

}
close.addEventListener('click', () => {
    formCntnr.style.display = 'none';
    add.style.display = 'block';
});

add.addEventListener('click', () => {
    formCntnr.style.display = 'block';
    add.style.display = 'none';
})



form.addEventListener("submit", function (event) {
    val = []
    for (let i = 0; i < form.length; i++) {
        val.push(form.elements[i].value);
    }
    console.log(val);
    read = (val[3] == "on" ? "read" : "not yet");
    newBook = new Book(val[0], val[1], val[2], read);
    addBookToLibrary(newBook);
    bookDisplay(myLibrary);
    for (let i = 0; i < form.length; i++) {
        console.log(form.elements[i]);
        form.elements[i].value = "";
    }
    formCntnr.style.display = 'none';
    add.style.display = 'block';
    event.preventDefault();
    display.click();

})
display.addEventListener('click', deleteBook)
let theHobbit = new Book('The Hobbit', 'J.R.R. Tolkein', '256', "Not Yet Read");

let harryPotter = new Book('Harry Potter', 'J.K. Rowling', '250', 'read');
function addBookToLibrary(newBook){
    myLibrary.push(newBook);
}

addBookToLibrary(theHobbit);
addBookToLibrary(harryPotter);










