let myLibrary = [];

function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function(){
        return `${this.title} by ${this.author}, ${this.pages}, ${this.read}`;
    }
}

let theHobbit = new Book('The Hobbit', 'J.R.R. Tolkein', '256', "Not Yet Read");

let harryPotter = new Book('Harry Potter', 'J.K. Rowling', '250', 'read');
function addBookToLibrary(newBook){
    myLibrary.push(newBook);
}

addBookToLibrary(theHobbit);
addBookToLibrary(harryPotter);
console.log(myLibrary[1]);


console.log(harryPotter.info());

myLibrary.forEach(book => {
    console.log(book);
})