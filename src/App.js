import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import SearchPage from './SearchPage'
import Bookpage from './Bookpage'
import { Route } from 'react-router-dom'

class BooksApp extends React.Component {

  constructor(props) {
    super(props);
    //DON'T CALL this.setState() here!
    this.state = {
      books:[]
    }
  }

  componentDidMount = () => {
    BooksAPI.getAll()
    .then(response => this.setState({books: response}))
    .catch(error => console.log(error));
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
        <Route path="/search" render={() => (
          <SearchPage
            books={books}
            changeShelf={this.changeShelf}
          />
        )}/>
        <Route exact path="/" render={() => (
          <Bookpage
            books={books}
            changeShelf={this.changeShelf}
          />
        )}/>
      </div>
    )
  }
}

export default BooksApp
