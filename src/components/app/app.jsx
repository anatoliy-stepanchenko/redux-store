import React from 'react';
import './app.css'
import withBookstoreService from '../hoc/with-bookstore-service'

const App = ({bookstoreService}) => {
    console.log(bookstoreService.getBooks());
    return (
        <div>
            App
        </div>
    );
};

export default withBookstoreService()(App);