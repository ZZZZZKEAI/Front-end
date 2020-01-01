import React from 'react'
import {Link} from 'react-router-dom';
var LoginCss = require('./login.css');

export default class LoginPage extends React.Component {

    render() {
        return (
            <div className={LoginCss.body}>
                <div className={LoginCss.login}>
                    <h2>一起去旅行吧</h2>
                    <div className={LoginCss.login_top}>
                        <h1>账户登录</h1>
                        <form>
                            <input type="text" placeholder="手机号/身份证/用户名"/>
                            <input type="password" placeholder="请输入密码" />
                        </form>
                        <div className={LoginCss.forgot}>
                        <Link to='/forget'>忘记密码?</Link>
                            <input type="submit" value="登录"/>
                        </div>
                    </div>
                    <div className={LoginCss.login_bottom}>
                        <h3>新用户<Link to='/register'>注册</Link>&nbsp;这里</h3>
                    </div>
                </div>
            </div>
        )
    }
}