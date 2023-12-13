const newLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
};

const theHobbit = new Book('The Hobbit','Tolkien','333','read');
const kiteRunner = new Book('Kite Runner', 'Hosseini', '784', 'unread');

function addBook() {
   newLibrary.push(theHobbit);
   newLibrary.push(kiteRunner);
};

addBook();

// DOM Manipulation for book cards
const cardHolder = document.querySelector('#card-holder');

//function to display book cards
function displayBook () {
    for(i = 0;i < newLibrary.length; i++) {
        const bookCard = document.createElement('div');
        bookCard.setAttribute('class', 'book-card');

        for (let value in newLibrary[i]) {
            const para = document.createElement('p');
            para.textContent = newLibrary[i][value];
            bookCard.appendChild(para);
        };
        
        cardHolder.appendChild(bookCard);
    };
}

//DOM Manipulation for dialog
const dialog = document.querySelector('dialog');
const openButton = document.querySelector('.add-button');
const closeButton = document.querySelector('.close-button');

openButton.addEventListener('click', () => {
    dialog.showModal();
});

closeButton.addEventListener('click', () => {
    dialog.close();
});
displayBook();
