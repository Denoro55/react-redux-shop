import React from 'react';
import ReactDOM from 'react-dom';

import {Provider} from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';
import {BookstoreServiceProvider} from './components/bookstore-service-context';
import ErrorBoundry from "./components/error-boundry";

import bookstoreService from "./services/bookstore-service";
const bookService = new bookstoreService();

import store from "./store";

import App from "./components/app/App";

ReactDOM.render(
    <Provider store={store}>
        <ErrorBoundry>
            <BookstoreServiceProvider value={bookService}>
                <Router>
                    <App />
                </Router>
            </BookstoreServiceProvider>
        </ErrorBoundry>
    </Provider>,
    document.querySelector('#root')
);
