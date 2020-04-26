import React from 'react';
import {withBookstoreService} from '../hoc'

class App extends React.Component {
    render() {
        const {bookstoreService} = this.props;

        console.log(bookstoreService.getBooks());

        return (
            <div>Hello world</div>
        )
    }
}

export default withBookstoreService()(App);
