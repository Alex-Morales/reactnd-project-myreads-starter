import React from 'react'
import Book from './Book'

const Shelf = (props) => {
  const { shelf } = props;
  return (
    <div>
    {/*Start of shelf*/}
    <div className="Bookshelf">
      <h2 className="bookshelf-title">{shelf.type}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
        {shelf.books.map(books=> <Book books={books} key = {books.id}/>)}
        </ol>
      </div>
    </div>
    {/*End of shelf*/}
    </div>
  )
}

export default Shelf
