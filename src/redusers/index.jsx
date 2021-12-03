import updateBookList from '../redusers/book-list'
import updateShoppingCart from '../redusers/shopping-cart'

const reducer = (state, action) => {
    return {
        bookList: updateBookList(state, action),
        shoppingCart: updateShoppingCart(state, action)
    }
};

export default reducer;