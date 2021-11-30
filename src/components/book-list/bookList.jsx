import React, { Component } from 'react';
import BookListItem from '../book-list-item/bookListItem'
import { connect } from 'react-redux';
import { withBookstoreService } from '../hoc/with-bookstore-service'
import { fetchBooks } from '../../action/index'
import Spiner from '../spiner/spiner'
import ErrorIndicator from '../error-indicator/errorIndicator';
import './bookList.css'


const BookList = ({books}) => {
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
class BookListContainer extends Component {

    componentDidMount() {
        this.props.fetchBooks();
    }

    render() {
        const {books, loading, error} = this.props;
        if (loading) {
            return <Spiner />
        }

        if (error) {
            return <ErrorIndicator />
        }

        return <BookList books={books}/>
 
    }
};

const mapStateToProps = ({books, loading, error}) => {
    return {books, loading, error}
}

const mapDispatchToProps = (dispatch, {bookstoreService}) => {
    return {
        fetchBooks: fetchBooks(bookstoreService, dispatch)
    }
}

export default withBookstoreService()(
    connect(mapStateToProps, mapDispatchToProps)(BookListContainer));