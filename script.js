let newLibrary = [];

function Book(title, author, pages, status) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
};

// const theHobbit = new Book('The Hobbit','Tolkien','333','read');
// const kiteRunner = new Book('Kite Runner', 'Hosseini', '784', 'unread');

//function to add book to library
function addBookToLibrary() {
    //DOM Manipulation for dialog inputs
   const titleVal = document.querySelector('.b-title').value;
   const authorVal = document.querySelector('.b-author').value;
   const pagesVal = document.querySelector('.b-pages').value;

   //select the radio buttons themselves
   const readChecked = document.querySelector('#read');

   let statusVal;
   //if statement to check which radio button was selected
   if (readChecked.checked == true) {
    statusVal = document.querySelector('#read').value;
   } else {
    statusVal = document.querySelector('#unread').value;
   };

   const newBook = new Book(titleVal, authorVal, pagesVal, statusVal);
   newLibrary.push(newBook);
};

// addBookToLibrary();

// DOM Manipulation for book cards
const cardHolder = document.querySelector('#card-holder');

//function to display book cards
function createCard () {
    for(i = 0;i < newLibrary.length; i++) {
        const book = newLibrary[i];
        const bookCard = document.createElement('div');
        bookCard.setAttribute('class', 'book-card');

        for (let value in book) {
            const para = document.createElement('p');
            para.textContent = newLibrary[i][value];
            bookCard.appendChild(para);
        };

        //to create remove buttons on all cards
        const rmvButton = document.createElement('button');
        rmvButton.textContent = 'Remove';
        rmvButton.addEventListener('click', () => {
            newLibrary = newLibrary.filter(item => item.title !== book.title);
            cardHolder.innerHTML = '';
            createCard();
            console.log(newLibrary);
        });
        bookCard.appendChild(rmvButton)
    
        cardHolder.appendChild(bookCard);
    };
}


//DOM Manipulation for dialog & form
const form = document.querySelector('form');
const dialog = document.querySelector('dialog');
const openButton = document.querySelector('.add-btn');
const submitButton = document.querySelector('.submit-btn');

openButton.addEventListener('click', () => {
    dialog.showModal();
});

submitButton.addEventListener('click', (event) => {
    event.preventDefault();
    addBookToLibrary();
    cardHolder.innerHTML = '';
    createCard();

    form.reset();
    dialog.close();
});

