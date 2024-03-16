const mylibrary = [];
const showbtn = document.getElementById('show-dialog');
const dialog = document.getElementById('dialog');
const closebtn = document.getElementById('form-submit');
const container = document.querySelector('.container');



function book (title , author , read){
    this.title = title;
    this.author = author;
    this.read = read;
}


showbtn.onclick = function () {
    dialog.showModal();
}

closebtn.onclick = function (){
    event.preventDefault();
    addBookToLibrary();
    dialog.close();
    display();
}

function addBookToLibrary(book){
    mylibrary.push(book);
}

function display(){
    container.innerHTML = " ";
    for(let i = 0; i < mylibrary.length; i++){
        let div = document.createElement('div');
        let p = document.createElement('p');
        div.classList = "card";
            container.appendChild(div);
            div.appendChild(p);
            p.innerHTML = mylibrary[i].title;
        }        
}


function remove(){
    
}




const book1 = new book("Harry potter" , "JK", 45 );
const book2 = new book("Harry " , "JK" , 13);
const book3 = new book("potter" , "JK" , 13);

addBookToLibrary(book1);
addBookToLibrary(book2);
addBookToLibrary(book3);











