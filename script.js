const myLibrary = [];

const form = document.querySelector('form');
const table = document.querySelector('table');

document.querySelector('#new-book').onclick = function () {
    showOrHide();
}

document.querySelector('form').onsubmit = function (event) {
    event.preventDefault();
    addBook(form.title.value, form.author.value, form.pages.value, form.read.checked);
    displayBooks();
    form.reset();
    showOrHide();
}

function Book(id, title, author, pages, read) {
    if (!new.target)
        return 'Please use the "new" keyword';
    this.id = id;
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBook(title, author, pages, read) {
    const randomId = crypto.randomUUID();
    const newBook = new Book(randomId, title, author, pages, read);
    myLibrary.push(newBook);
}

function removeBook(id) {
    myLibrary.forEach((book, index) => {
        if (book.id === id) {
            myLibrary.splice(index, 1);
        }
    })
}

function displayBooks() {
    document.querySelectorAll('tr').forEach((tr, index) => {
        if (index > 0) tr.remove();
    })
    myLibrary.forEach(book => {
        const tr = document.createElement('tr');
        tr.innerHTML =
        `
        <td>${book.id}</td>
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.pages}</td>
        <td>${(book.read) ? 'Yes' : 'No'}</td>
        <td>
        <button class="delete-button" data-id="${book.id}">Delete book</button>
        </td>
        `;
        document.querySelector('table').appendChild(tr);
    })
    document.querySelectorAll('.delete-button').forEach(button => {
        button.onclick = function () {
            removeBook(button.dataset.id);
            button.parentElement.parentElement.remove();
        }
    })
}

function showOrHide() {
    form.style.display = (form.style.display === 'block') ? 'none' : 'block';
    table.style.display = (table.style.display === 'none') ? 'table' : 'none';
    document.querySelector('#new-book').textContent = (form.style.display === 'block') ? 'Back to table' : 'Add new book';
}