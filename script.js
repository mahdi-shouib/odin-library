const myLibrary = [];

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

function displayBooks() {
    myLibrary.forEach(book => {
        const tr = document.createElement('tr');
        tr.innerHTML = 
        `
        <td>${book.id}</td>
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.pages}</td>
        <td>${(book.read)? 'Yes' : 'No'}</td>
        `;
        document.querySelector('table').appendChild(tr);
    })
}