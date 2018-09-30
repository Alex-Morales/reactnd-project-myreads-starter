import React, { Component } from 'react';

export default class Book extends Component {

  constructor(props) {
    super(props);
    //DON'T CALL this.setState() here!
    this.state = {
      shelf: ''
    }
  }

  componentDidMount = () => {
    this.setState({shelf: this.props.books.shelf})
  }

  changeShelf = (event) => {
    const shelf = event.target.value;
    this.props.changeShelf(this.props.books, shelf);
    this.setState({shelf});
  }

  render () {
    const { books } = this.props;
    const { shelf = 'none' } = this.state;
    const { imageLinks = [''], authors = ['Unknown'], title } = books;

    return(
      <li>
        <div className="book">
          <div className="book-top">
            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${imageLinks.thumbnail})` }}></div>
            <div className="book-shelf-changer">
              <select value={shelf} onChange={this.changeShelf}>
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
