import React from 'react';
import BookListItem from "../book-list-item";
import {connect} from 'react-redux';
import {compose} from '../../utils/';
import {withBookstoreService} from '../hoc';
import {fetchBooks, addBookToCart} from "../../actions";

import './style.css';
import Spinner from "../spinner";
import ErrorIndicator from "../error-indicator";

const BookList = ({books, onAddToCart}) => {
    return (
        <ul className="book-list">
            { books.map(book => {
                return (
                    <li key={book.id}>
                        <BookListItem book={book} onAddToCart={onAddToCart} />
                    </li>
                )
            }) }
        </ul>
    )
};

class BookListContainer extends React.Component {
    componentDidMount() {
        this.props.fetchBooks();
    }

    render() {
        const {books, loading, error, onAddToCart} = this.props;

        if (loading) return (
            <div className="mb-4">
                <Spinner/>
            </div>
        );

        if (error) return (
            <div className="mb-5">
                <ErrorIndicator />
            </div>
        );

        return (
            <ul className="book-list">
                <BookList books={books} onAddToCart={onAddToCart} />
            </ul>
        )
    }
}

const mapStateToProps = ({books, loading, error}) => {
    return {
        books,
        loading,
        error
    }
};

const mapDispatchToProps = (dispatch, {bookstoreService}) => {
    return {
        fetchBooks: fetchBooks(bookstoreService, dispatch),
        onAddToCart: (id) => dispatch(addBookToCart(id))
    }
};

export default compose(
    withBookstoreService(),
    connect(mapStateToProps, mapDispatchToProps)
)(BookListContainer);
