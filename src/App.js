import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import SearchPage from './SearchPage'
import Bookpage from './Bookpage'
import { APIBooks } from './BookData'

class BooksApp extends React.Component {

  constructor(props) {
    super(props);
    //DON'T CALL this.setState() here!
    this.state = {showSearchPage: false}
  }
  // state = {
  //   showSearchPage: false
  // }

  clickBack = () => {
    this.setState({ showSearchPage: false })
  }
  showSearchPageClick = () => {
    this.setState({ showSearchPage: true })
  }

  render() {
    const books = APIBooks;

    return (
      <div className="app">
        {this.state.showSearchPage ? (
          <SearchPage clickBack={this.clickBack} />
        ) : (
          <Bookpage books={books} showSearchPageClick={this.showSearchPageClick} />
        )}
      </div>
    )
  }
}

export default BooksApp
