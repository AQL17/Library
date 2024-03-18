const mylibrary = [];
const showbtn = document.getElementById('show-dialog');
const dialog = document.getElementById('dialog');
const closebtn = document.getElementById('form-submit');
const container = document.querySelector('.container');
const inputs = document.querySelectorAll('form input');


console.log(inputs);



function book (title , author , pages,  read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}


showbtn.onclick = () => {
    dialog.showModal();
}

closebtn.onclick = (event) => {
    // Prevent form from submitting.
    event.preventDefault();
    getFormData();
    dialog.close();
    // Update the display
    display();
}

function getFormData(){
    let bookData = [];
    for(let input of inputs){
        if(input.value === 'read'){
            bookData.push(input.checked);
            continue;
        }
        bookData.push(input.value);
        input.value = "";
        
    }
    console.log(bookData);
    const book3 = new book(bookData[0] , bookData[1] , bookData[2] ,bookData[3]);
    addBookToLibrary(book3);
}
function addBookToLibrary(book){
    mylibrary.push(book);
}

function display(){
    container.innerHTML = " ";

    for(let i = 0; i < mylibrary.length; i++){
        const bookhtml = `
        <div class="card">
        <h2>Title:  ${mylibrary[i].title}</h2>
        <h3>Author:  ${mylibrary[i].author}</h3>
        <h3>Pages:  ${mylibrary[i].pages}</h3>
        <h3>Read:  ${mylibrary[i].read ? "Yes" : "No"}</h3>
        <button class = "removebtn" onclick=removebook(${i})> Remove </button>
        <button class = "removebtn" onclick=toggleRead(${i})> Toggle Read </button>

    </div>
        `
    container.innerHTML += bookhtml;
    }        
   
}
function removebook(i){
    mylibrary.splice(i , 1);
    display();
}
function toggleRead(i){
    mylibrary[i].read ? mylibrary[i].read = false : mylibrary[i].read = true;
    display();
}

const book1 = new book("Harry potter" , "JK", 45 , false );
addBookToLibrary(book1);
display();













