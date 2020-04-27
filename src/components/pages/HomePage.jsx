import React from 'react';
import BookList from "../book-list";
import Order from "../order";

const HomePage = () => {
    const books = [
        {id: 1, author: 'Jon Stokes', title: 'INSIDE THE MACHINE: AN ILLUSTRATED INTRODUCTION TO MICROPROCESSORS AND COMPUTER ARCHITECTURE'},
        {id: 2, author: 'Harold Abelson, Gerald Jay Sussman, Julie Sussman', title: 'STRUCTURE AND INTERPRETATION OF COMPUTER PROGRAMS'},
        {id: 3, author: 'Charles Petzold ', title: 'CODE: THE HIDDEN LANGUAGE OF COMPUTER HARDWARE AND SOFTWARE'},
    ];

    return (
        <div className="page container">
            <BookList/>
            <Order/>
        </div>
    )
};

export default HomePage;
