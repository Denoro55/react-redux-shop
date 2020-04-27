import React from 'react';
import {connect} from 'react-redux'
import {removeBookFromCart, removeAllBooksFromCart, addBookToCart} from '../../actions';

import './style.css';

const Order = (props) => {
    const renderRow = (item, idx) => {
        return (
            <tr key={item.id}>
                <td>{idx + 1}</td>
                <td>{item.title}</td>
                <td>{item.count}</td>
                <td>${item.price}</td>
                <td>
                    <div className="d-flex">
                        <div onClick={() => props.onIncrease(item.id)} className="btn btn-outline-success btn-sm">
                            <i className="fa fa-plus-circle" />
                        </div>
                        <div onClick={() => props.onDecrease(item.id)} className="btn btn-outline-warning btn-sm ml-2">
                            <i className="fa fa-minus-circle" />
                        </div>
                        <div onClick={() => props.onDelete(item.id)} className="btn btn-outline-danger btn-sm ml-2">
                            <i className="fa fa-trash" />
                        </div>
                    </div>
                </td>
            </tr>
        )
    };

    return (
        <div className="order">
            <h4 className="order__title">
                Your order
            </h4>
            <div className="order__table">
                <table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Item</th>
                            <th>Count</th>
                            <th>Price</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        { props.cartItems.map(renderRow) }
                    </tbody>
                </table>
            </div>
            <div className="order__result pt-4 text-right">
                Total: 200$
            </div>
        </div>
    )
};

const mapStateToProps = ({cartItems, totalPrice}) => {
    return {
        cartItems,
        totalPrice
    }
};

const mapDispatchToProps = {
    onIncrease: addBookToCart,
    onDecrease: removeBookFromCart,
    onDelete: removeAllBooksFromCart
};

export default connect(mapStateToProps, mapDispatchToProps)(Order);
