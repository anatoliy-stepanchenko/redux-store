import React from 'react';
import BookList from '../book-list/bookList';
import ShoppingCartTable from '../shopping-cart-table/shopping-cart-table'

const HomePage = () => {
    return (
        <div>
            <BookList />
            <ShoppingCartTable />
        </div>
    );
};

export default HomePage;