import React from 'react';
import {withBookstoreService} from '../hoc'
import {Switch, Route} from 'react-router-dom'
import {CartPage, HomePage} from '../pages';
import Header from "../header";
import './style.css';

class App extends React.Component {
    render() {
        return (
            <main className="main">
                <Header/>
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route path="/cart" component={CartPage} />
                </Switch>
            </main>
        )
    }
}

export default App;
