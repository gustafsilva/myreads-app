const getShelfBook = (book, myBooks) => {
  const filterBook = myBooks.filter(myBook => myBook.id === book.id);

  if (filterBook.length > 0) {
    return filterBook[0].shelf;
  }
  return 'none';
};

const setShelfBook = (book, books, newShelf) => {
  const newBooks = books.map((myBook) => {
    // Percorre por toda lista dos MyBooks já cadastrados para mudar shelf do livro atualizado
    if (myBook.id === book.id) {
      const newMyBook = myBook;
      newMyBook.shelf = newShelf;

      return newMyBook;
    }
    return myBook;
  });

  return newBooks;
};

export const checkMyBooksHaveChanged = (resultUpdate, myBooks) => {
  const currentLengthMyBooks = myBooks.length;

  const { currentlyReading, wantToRead, read } = resultUpdate;
  const newLengthMyBooks = currentlyReading.length + wantToRead.length + read.length;

  return currentLengthMyBooks !== newLengthMyBooks;
};

export const addShelfBooksSearch = (booksSearch, myBooks) => {
  let newBooksSearch = [];
  if (booksSearch.length > 0) {
    newBooksSearch = booksSearch.map((bookSearch) => {
      const book = bookSearch;
      book.shelf = getShelfBook(book, myBooks);

      return book;
    });
  }

  return { books: newBooksSearch };
};

export const addBook = (book, newShelf, myBooks) => {
  const newBook = book;
  newBook.shelf = newShelf;

  return { myBooks: myBooks.concat([newBook]) };
};

export const movBookShelf = (book, newShelf, myBooks) => ({
  myBooks: setShelfBook(book, myBooks, newShelf),
});

export const delBook = (book, myBooks) => ({
  myBooks: myBooks.filter(myBook => myBook.id !== book.id),
});
