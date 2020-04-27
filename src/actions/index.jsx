const booksLoaded = (newBooks) => {
      return {
          type: 'FETCH_BOOKS_SUCCESS',
          payload: newBooks
      }
};

const booksLoadRequest = () => {
    return {
        type: 'FETCH_BOOKS_REQUEST',
    }
};

const booksLoadError = (err) => {
    return {
        type: 'FETCH_BOOKS_FAILURE',
        payload: err
    }
};

const addBookToCart = (id) => {
    return {
        type: 'ADD_BOOK_TO_CART',
        payload: id
    }
};

const removeBookFromCart = (id) => {
    return {
        type: 'REMOVE_BOOK_FROM_CART',
        payload: id
    }
};

const removeAllBooksFromCart = (id) => {
    return {
        type: 'REMOVE_ALL_BOOKS_FROM_CART',
        payload: id
    }
};

const fetchBooks = (bookstoreService, dispatch) => () => {
    dispatch(booksLoadRequest());

    bookstoreService.getBooks().then(data => {
        dispatch(booksLoaded(data));
    }).catch(err => {
        dispatch(booksLoadError(err));
    })
};

export {
    fetchBooks,
    addBookToCart,
    removeAllBooksFromCart,
    removeBookFromCart
}
