/**
 * Captura um livro dado o livro e a lista de livros.
 *
 * @param {array(Book)} book - Livro a ser pesquisado.
 * @param {array(Book)} myBooks - Lista com todos os livros.
 */

const getShelfBook = (book, myBooks) => {
  const filterBook = myBooks.filter(myBook => myBook.id === book.id);

  if (filterBook.length > 0) {
    return filterBook[0].shelf;
  }
  return 'none';
};

/**
 * Modifica a prateleira de um livro.
 *
 * @param {Book} book - Livro a ser modificado a prateleira.
 * @param {array(Book)} books - Lista conténdo todos os livros.
 * @param {string} newShelf - Nova prateleira do livro passado.
 */
export const setShelfBook = (book, books, newShelf) => {
  const newBooks = books.map((myBook) => {
    // Percorre por toda lista dos MyBooks já cadastrados para mudar shelf do livro atualizado
    if (myBook.id === book.id) {
      return {
        ...myBook,
        shelf: newShelf,
      };
    }
    return myBook;
  });

  return newBooks;
};

/**
 * Verifica se um livro foi adicionado em uma prateleira.
 *
 * @param {object} resultUpdate - Resultado da API para uma modificação
 *                                em uma prateleira de um livro.
 * @param {array(Book)} myBooks - Lista com todos os livros.
 */
export const checkMyBooksHaveChanged = (resultUpdate, myBooks) => {
  const currentLengthMyBooks = myBooks.length;

  const { currentlyReading, wantToRead, read } = resultUpdate;
  const newLengthMyBooks = currentlyReading.length + wantToRead.length + read.length;

  return currentLengthMyBooks !== newLengthMyBooks;
};

/**
 * Adiciona a prateleira correta para os livros encontrados em uma pesquisa.
 *
 * @param {array(Book)} booksSearch - Lista com livros encontrados em uma pesquisa.
 * @param {array(Book)} myBooks - Lista com livros cadastrados atualmente nas prateleiras.
 */
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

/**
 * Adiciona um livro a uma prateleira.
 *
 * @param {Book} book - Livro a ser adicionado a uma prateleira.
 * @param {string} newShelf - Nova prateleira que o livro será adicionado.
 * @param {array(Book)} myBooks - Lista com todos os livros cadastrados atualmente nas prateleiras.
 */
export const addBook = (book, newShelf, myBooks) => {
  const newBook = book;
  newBook.shelf = newShelf;

  return { myBooks: myBooks.concat([newBook]) };
};

/**
 * Move um livro de prateleira.
 *
 * @param {Book} book - Livro a ser modificado a prateleira.
 * @param {string} newShelf - Nova prateleira que o livro se encontrará.
 * @param {array(Book)} myBooks - Lista com todos os livros cadastrados atualmente nas prateleiras.
 */
export const movBookShelf = (book, newShelf, myBooks) => ({
  myBooks: setShelfBook(book, myBooks, newShelf),
});

/**
 * Remove um livro de uma prateleira.
 *
 * @param {Book} book - Livro a ser removido da prateleira.
 * @param {array(Book)} myBooks - Lista com todos os livros cadastrados atualmente nas prateleiras.
 */
export const delBook = (book, myBooks) => ({
  myBooks: myBooks.filter(myBook => myBook.id !== book.id),
});
