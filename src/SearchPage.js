import React, { Component } from 'react';
import * as BooksAPI from './BooksAPI'
import Book from './Book'


export default class SearchPage extends Component {

  constructor(props) {
    super(props);
    //DON'T CALL this.setState() here!
    this.state = {
      books: [],
      query: ''
    }
  }

  inputChange = (event) => {
    const query = event.target.value;
    this.setState({query});
    BooksAPI.search(query)
    .then(response => this.setState({books: response}))
  }

  render() {
    const {clickBack} = this.props;
    const {books} = this.state;
    console.log({books})
    return (
      // Start of search page
      <div className="search-books">
        <div className="search-books-bar">
          <a className="close-search" onClick={clickBack}>Close</a>
          <div className="search-books-input-wrapper">
            {/*
              NOTES: The search from BooksAPI is limited to a particular set of search terms.
              You can find these search terms here:
              https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

              However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
              you don't find a specific author or title. Every search is limited by search terms.
            */}
            <input
              value={this.state.query}
              onChange={this.inputChange}
              type="text"
              placeholder="Search by title or author"
            />

          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
          {books.map(books => <Book books={books} key = {books.id}/>)}
          </ol>
        </div>
      </div>
      //End of Search page
    )
  }
}
