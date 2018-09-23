import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import SearchPage from './SearchPage'
import Bookpage from './Bookpage'

class BooksApp extends React.Component {

  constructor(props) {
    super(props);
    //DON'T CALL this.setState() here!
    this.state = {
      books:[],
      showSearchPage: false}
  }

  componentDidMount = () => {
    BooksAPI.getAll()
    .then(response => this.setState({books: response}))
    .catch(error => console.log(error));
  }

  clickBack = () => {
    this.setState({ showSearchPage: false })
  }
  showSearchPageClick = () => {
    this.setState({ showSearchPage: true })
  }

  changeShelf = (changeBook, newShelf) => {
    console.log(changeBook)
    console.log(newShelf)
    BooksAPI.update(changeBook, newShelf)
    .then(response => BooksAPI.getAll()
    .then(response => this.setState({books: response})));
  }

  render() {
    const { books } = this.state;

    return (
      <div className="app">
        {this.state.showSearchPage ? (
          <SearchPage clickBack={this.clickBack} />
        ) : (
          <Bookpage
            books={books}
            showSearchPageClick={this.showSearchPageClick}
            changeShelf={this.changeShelf}
          />
        )}
      </div>
    )
  }
}

export default BooksApp
