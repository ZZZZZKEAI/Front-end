import React from 'react';
import Header from './../Header/header';
import Footer from './../Footer/footer'
import Register from './../Register/register';
import {BrowserRouter,Route,Link} from 'react-router-dom';
import BuyPage from './Buy/buy';
import SalePage from './Sale/sale';
export default class HomePage extends React.Component {
    render() {
        return ( 
        <div >
            <Header/>
            <div>
            <button shape='round' type='danger' icon='forward'>Button</button>
            </div>
            <BrowserRouter basename='homepage'> 
            <Link to='/buy'>我要买</Link>
            <br></br>
            <Link to='/sale'>我要卖</Link>
            <br></br>
            <a href='/login'>登陆</a>
            <br></br>
            <a href='/register'>注册</a>
            <Route path='/buy' component={BuyPage}></Route>
            <Route path='/sale' component={SalePage}></Route>
            
            </BrowserRouter>
            <Footer/>
            </div>
        )
    }
}