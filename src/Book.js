import React, { Component } from 'react';

export default class Book extends Component {

  render () {
    const { books } = this.props;
    const { imageLinks, authors, title, shelf } = books;
    // console.log(books)
    return(
      <li>
        <div className="book">
          <div className="book-top">
            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${imageLinks.thumbnail})` }}></div>
            <div className="book-shelf-changer">
              <select value={shelf} onChange={()=>{}}>
                <option value="move" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
              </select>
            </div>
          </div>
          <div className="book-title">{title}</div>
          {authors.map(authors => (<div key={authors} className="book-authors">{authors}</div>))}
        </div>
      </li>

    )
  }
}
