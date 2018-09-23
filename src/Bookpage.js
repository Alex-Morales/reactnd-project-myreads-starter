import React, { Component } from 'react';
import Shelf from './Shelf'

export default class Bookpage extends Component {

  putBooksOnShelf = (books) => {
    const currentlyReading= books.filter(books=> books.shelf==='currentlyReading')
    const wantToRead= books.filter(books=> books.shelf==='wantToRead')
    const read= books.filter(books=> books.shelf==='read')

    return [
      {type:'Currently Reading', books:currentlyReading},
      {type:'Want to Read', books:wantToRead},
      {type:'Read', books:read}
    ]
  }

  render() {
    const {showSearchPageClick, books, changeShelf} = this.props;
    const shelves = this.putBooksOnShelf(books);
    return (
      //Start of Bookpage
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>

        {/*Start of bookshelf*/}
        <div className="list-books-content">
          <div>
            {/*MAPS to create each shelf.*/}
            {shelves.map(shelf=> <Shelf shelf={shelf} key = {shelf.type} changeShelf={changeShelf}/>)}
          </div>
        </div>
        <div className="open-search">
          <a onClick={showSearchPageClick}>Add a book</a>
        </div>
      </div>
      //End of Bookpage
    )
  }
}
