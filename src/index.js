import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import HomePage from './HomePage/homepage';
import Register from './Register/register';
import {BrowserRouter, Route , Switch, Redirect,Link} from 'react-router-dom';
import LoginPage from './Login/login';
import RegisterPage from './Register/register';
import ForgetPage from './Forget/forget';
class IndexPage extends React.Component {

    render() {
        return ( 
            <div > 
                <BrowserRouter>
                    <Switch>
                    <Route path='/' exact component={HomePage}></Route>
                    <Route path='/homepage' exact component={HomePage}></Route>
                    <Route path='/login' exact component={LoginPage}></Route>
                    <Route path='/register' component={RegisterPage}></Route>
                    <Route path='/forget' component={ForgetPage}></Route>
                    </Switch>
                </BrowserRouter>
            </div>
        )
    }
}

ReactDOM.render( < IndexPage/> , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();