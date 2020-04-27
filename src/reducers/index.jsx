const initialState = {
    books:  [],
    loading: true,
    error: null,
    cartItems: [],
    totalPrice: 200
};

const updateCart = (state, bookId, quantity = 1) => {
    const {books, cartItems} = state;

    const book = books.find(({id}) => id === bookId);
    const bookIndex = cartItems.findIndex(({id}) => id === bookId);
    const bookInCart = cartItems[bookIndex];
    const newBook = updateCartItem(book, bookInCart, quantity);

    return {
        ...state,
        cartItems: updateCartItems(cartItems, newBook, bookIndex)
    };
};

const updateCartItem = (book, item = {}, quantity = 1) => {
    const {id = book.id, title = book.title, price = 0, count = 0} = item;

    return {
        id,
        title,
        price: price + quantity * book.price,
        count: count + quantity
    }
};

const updateCartItems = (items, newBook, index) => {
    if (newBook.count <= 0) {
        return [
            ...items.slice(0, index),
            ...items.slice(index + 1)
        ]
    }

    if (index < 0) {
        return [...items, newBook]
    } else {
        return [
            ...items.slice(0, index),
            newBook,
            ...items.slice(index + 1)
        ]
    }
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_BOOK_TO_CART': {
            return updateCart(state, action.payload);
        }

        case 'REMOVE_BOOK_FROM_CART': {
            return updateCart(state, action.payload, -1);
        }

        case 'REMOVE_ALL_BOOKS_FROM_CART': {
            const item = state.cartItems.find(b => b.id === action.payload);
            return updateCart(state, action.payload, -item.count);
        }

        case 'FETCH_BOOKS_REQUEST':
            return {
                ...state,
                books:  [],
                loading: true,
                error: null
            };

        case 'FETCH_BOOKS_SUCCESS':
            return {
                ...state,
                books: action.payload,
                loading: false,
                error: null
            };

        case 'FETCH_BOOKS_FAILURE':
            return {
                ...state,
                books: [],
                loading: false,
                error: action.payload
            };

        default:
            return state
    }
};

export default reducer;
