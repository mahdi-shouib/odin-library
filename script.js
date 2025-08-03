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