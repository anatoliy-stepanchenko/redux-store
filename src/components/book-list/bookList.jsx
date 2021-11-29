import React, { Component } from 'react';
import BookListItem from '../book-list-item/bookListItem'
import { connect } from 'react-redux';
import { withBookstoreService } from '../hoc/with-bookstore-service'
import { booksLoaded } from '../../action/index'
import './bookList.css'

class BookList extends Component {

    componentDidMount() {
        const {bookstoreService} = this.props;
        const data = bookstoreService.getBooks();
        this.props.booksLoaded(data);
    }

    render() {
        const {books} = this.props;
        return (
            <ul className='book-list'>
                {
                    books.map((book) => {
                        return (
                            <li key={book.id}><BookListItem 
                                book={book}/></li>
                        )
                    })
                }
            </ul>
        ); 
    }
};

const mapStateToProps = ({books}) => {
    return {books}
}

const mapDispatchToProps = {
    booksLoaded
}


export default withBookstoreService()(
    connect(mapStateToProps, mapDispatchToProps)(BookList));