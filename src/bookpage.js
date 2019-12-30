import React, { useState } from 'react';

import useFetch from './hooks/useFetch';
import AutoComplete from './components/autocomplete';
import Book from './components/book';

const BookPage = () => {
  const [books, loading] = useFetch('/api/books');
  const [book, setBook] = useState(null);
  const selectBook = ( bookId ) => setBook(books.get(bookId));
  const filterBook = (book, term) => book.id.toLowerCase().includes(term) ||
                                     book.title.toLowerCase().includes(term) ||
                                     book.description.toLowerCase().includes(term) ||
                                     book.publisher.toLowerCase().includes(term);
  const displayBook = (book) => `${book.id} - ${book.title} - ${book.publisher}`;
  const clearSelectedBook = () => setBook(null);
  if (loading)
    return <div>Loading....</div>;
  return (
    <>
      <AutoComplete
        items={books}
        filterItem={filterBook}
        selectItem={selectBook}
        displayItem={displayBook}
        clearItem={clearSelectedBook}
      /> 
      { book && <Book book={book} />}
    </>
  );
}

export default BookPage;