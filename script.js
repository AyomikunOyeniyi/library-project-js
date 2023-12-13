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
const cardHolder = document.querySelector('#card-holder')

function displayBook () {
    for(i = 0;i < newLibrary.length; i++) {
        const bookCard = document.createElement('div');
        
        for (let value in newLibrary[i]) {
            console.log(newLibrary[i][value]);
        }
        cardHolder.appendChild(bookCard);
    }

    
}

displayBook();
