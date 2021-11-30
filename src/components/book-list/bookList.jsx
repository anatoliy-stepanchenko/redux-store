import React, { Component } from 'react';
import BookListItem from '../book-list-item/bookListItem'
import { connect } from 'react-redux';
import { withBookstoreService } from '../hoc/with-bookstore-service'
import { booksLoaded, booksRequested, booksError } from '../../action/index'
import Spiner from '../spiner/spiner'
import ErrorIndicator from '../error-indicator/errorIndicator';
import './bookList.css'

class BookList extends Component {

    componentDidMount() {
        const {bookstoreService, 
            booksLoaded, 
            booksRequested, 
            booksError} = this.props;

        booksRequested();

        bookstoreService.getBooks()
            .then((data) => booksLoaded(data))
            .catch((err) => booksError(err))
    }

    render() {
        const {books, loading, error} = this.props;
        if (loading) {
            return <Spiner />
        }

        if (error) {
            return <ErrorIndicator />
        }

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

const mapStateToProps = ({books, loading, error}) => {
    return {books, loading, error}
}

const mapDispatchToProps = {
    booksLoaded,
    booksRequested,
    booksError
}


export default withBookstoreService()(
    connect(mapStateToProps, mapDispatchToProps)(BookList));
