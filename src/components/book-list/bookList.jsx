import React, { Component } from 'react';
import BookListItem from '../book-list-item/bookListItem'
import { connect } from 'react-redux';
import { withBookstoreService } from '../hoc/with-bookstore-service'
import { bookAddedToCart, fetchBooks } from '../../action/index'
import Spiner from '../spiner/spiner'
import ErrorIndicator from '../error-indicator/errorIndicator';
import './bookList.css'


const BookList = ({books, onAddedToCart}) => {
    return (
        <ul className='book-list'>
            {
                books.map((book) => {
                    return (
                        <li key={book.id}><BookListItem 
                            book={book}
                            onAddedToCart={() => onAddedToCart(book.id)}/>
                        </li>
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
        const {books, loading, error, onAddedToCart} = this.props;
        if (loading) {
            return <Spiner />
        }

        if (error) {
            return <ErrorIndicator />
        }

        return <BookList 
                    books={books}
                    onAddedToCart={onAddedToCart}/>
 
    }
};

const mapStateToProps = ( {bookList:{books, loading, error}} ) => {
    return {books, loading, error}
}

const mapDispatchToProps = (dispatch, {bookstoreService}) => {
    return {
        fetchBooks: fetchBooks(bookstoreService, dispatch),
        onAddedToCart: (id) => dispatch(bookAddedToCart(id)) 
    }
}

export default withBookstoreService()(
    connect(mapStateToProps, mapDispatchToProps)(BookListContainer));