let myLibrary = [];
let display = document.querySelector(".display")
let frmCntnr = document.querySelector(".frm-cntnr");
let frmClose = document.querySelector(".close-cntnr button");
let frmOpen = document.querySelector(".btn-cntnr img");
let submitBtn = document.querySelector("form button");
let form = document.querySelector("form");

function setLocalStorage(){
    localStorage.setItem("books", JSON.stringify(myLibrary));
}




//constructor to create book object
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function () {
        return `${this.title} by ${this.author}, ${this.pages}, ${this.read}`;
    }
}


//function to add book in library
function addBookToLibrary(newBook) {
    myLibrary.push(newBook);
}


//function to display books on the screen
function bookDisplay(){
    display.innerHTML = "";
    let i = 0;
    myLibrary.forEach(book => {
        if(book.title != "" || book.author != "" || book.pages != ""){
            
            let div =  document.createElement("div");
            div.classList.add("book-detail");
            div.innerHTML = ` <h1>${book.title}</h1>
            <div>Author: ${book.author}</div>
            <div>Pages: ${book.pages}</div>
            <button class="read-status ${book.read}" data-num="${i}">${book.read}</button>
            <button class="delete" button id="${i}">Delete</button>`;
            display.append(div);
            i++;
        }
    });
    delBtns = document.querySelectorAll(".delete");
    deleteBook();
}

//function to change read status
function changeReadStatus(){
    let num;
    readStatus.forEach(but => {
        but.addEventListener("click", () => {
            num = but.getAttribute("data-num");
            console.log(num);
            let readClass = but.getAttribute("class");
            let classList = readClass.split(" ");
            console.log(classList);
            classList.forEach(element => {
                if(element == "read"){
                    but.classList.remove("read");
                    but.classList.add("not-read");
                    but.innerText = "not-read";
                    myLibrary[num].read = "not-read";
                }
                else{
                    but.classList.remove("not-read");
                    but.classList.add("read");
                    but.innerText = "read";
                    myLibrary[num].read = "read";
                }
                setLocalStorage();
            });
        })
    })
}

//function to delete books

function deleteBook(){
    delBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            console.log(btn.id);
            let num = btn.id;
            myLibrary.splice(num, 1);
            bookDisplay();
            readStatus = document.querySelectorAll(".read-status");
            changeReadStatus();
        })
    })
    setLocalStorage();
}

//closes form
frmClose.addEventListener("click", () => {
    frmCntnr.style.display ="none";
    
});

//opens form
frmOpen.addEventListener("click", () => {
    frmCntnr.style.display = "flex";
});


let theHobbit = new Book('The Hobbit', 'J.R.R. Tolkein', '256', "not-read");

let harryPotter = new Book('Harry Potter', 'J.K. Rowling', '250', 'read');

if(localStorage.getItem("books") == null){
    addBookToLibrary(theHobbit);
    addBookToLibrary(harryPotter);

}
else{
    myLibrary = JSON.parse(localStorage.getItem("books"));
}


//form fill and submit and displayand
submitBtn.addEventListener("click", (e) => {
    let val = [];
   
    for(let i =0; i < form.length; i++){
        val.push(form.elements[i].value);
    }
    console.log(form.elements[3].checked);
    let read = "not-read";
    if(form.elements[3].checked){
        read = "read"
    }
    let newBook = new Book(val[0], val[1], val[2],read);
    addBookToLibrary(newBook);
    setLocalStorage()
    bookDisplay();
    readStatus = document.querySelectorAll(".read-status");
    changeReadStatus();
    delBtns = document.querySelectorAll(".delete");
    deleteBook();
    //sets all input valus to empty
    for (let i = 0; i < form.length; i++) {
        console.log(form.elements[i]);
        form.elements[i].value = "";
    }
    frmCntnr.style.display = "none";
    e.preventDefault();
})

let delBtns = document.querySelectorAll(".delete");
bookDisplay();
let readStatus = document.querySelectorAll(".read-status");
changeReadStatus();



