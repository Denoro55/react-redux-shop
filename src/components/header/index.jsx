import React from 'react';
import './style.css';
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <header className="header">
            <div className="header__container container">
                <div className="header__logo">
                    <Link to="/">Book's store</Link>
                </div>
                <div className="header__right">
                    <Link to="/cart" className="header-cart">
                        <i className="fa fa-shopping-cart"/>
                        <div className="header-cart__content">
                            5 items ($250)
                        </div>
                    </Link>
                </div>
            </div>
        </header>
    )
};

export default Header;
