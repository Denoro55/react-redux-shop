import React from 'react';
import './style.css'

const BookListItem = ({book, onAddToCart}) => {
    return (
        <div className="book-list-item">
            <div className="book-list-item__left">
                <img src={book.imageUrl} alt=""/>
            </div>
            <div className="book-list-item__right">
                <div className="book-list-item__title">
                    {book.title}
                </div>
                <div className="book-list-item__author">
                    {book.author}
                </div>
                <div className="book-list-item__price">
                    ${book.price}
                </div>
                <div className="book-list-item__add">
                    <button onClick={() => onAddToCart(book.id)} className="btn btn-info">Add to cart</button>
                </div>
            </div>
        </div>
    )
};

export default BookListItem;
