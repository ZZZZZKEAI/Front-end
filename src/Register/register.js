import React from 'react';
import {Link} from 'react-router-dom';
var RegisterCss = require('./register.css');
export default class RegisterPage extends React.Component {
    render() {
        return (
            <div>
                <div className={RegisterCss.z1}>
                    <a className={RegisterCss.z2}></a>
                    <div className={RegisterCss.z3}>欢迎注册旅行网</div>
                </div>
                <div className={RegisterCss.z4}>
                    <div className={RegisterCss.z5}>
                        <div className={RegisterCss.z5_z6}>
                            <div className={RegisterCss.z6}>
                                <label for="userName">&nbsp;&nbsp;用&nbsp;&nbsp;户&nbsp;&nbsp;名&nbsp;</label>
                                <input type="text" id="userName" placeholder="请输入您的账户名或登录名" />

                            </div>
                        </div>
                        <div className={RegisterCss.z5_z6}>
                            <div className={RegisterCss.z6}>
                                <label for="pwd">设 置 密 码</label>
                                <input type="password" id="pwd" placeholder="请输入您的密码" />

                            </div>
                        </div>
                        <div className={RegisterCss.z5_z6}>
                            <div className={RegisterCss.z6}>
                                <label for="pwd2">确 认 密 码</label>
                                <input type="password" id="pwd2" placeholder="请再次输入您的密码" />
                            </div>
                        </div>
                        <div className={RegisterCss.z5_z6}>
                            <div className={RegisterCss.z6}>
                                <label for="mobile">身 份 证 号</label>
                                <input type="text" id="mobile" placeholder="请输入您的身份证号" />
                            </div>
                        </div>
                        <div className={RegisterCss.z5_z6,RegisterCss.xieyi}>
                            <div className={RegisterCss.z6,RegisterCss.default}>
                                <input type="checkbox" id="ck" />
                                <span>
                                    "我已经阅读并同意"
                                    <a herf="##">《旅行用户注册协议》</a>
                                </span>
                            </div>
                        </div>
                        <h3><button id="btn" ><Link className={RegisterCss.nxl1} to='/login'>注册</Link></button></h3>
                    </div>
                </div>
                <div className={RegisterCss.nxl2}>
                    <p>
                        <a href="https://www.qunar.com/" target="_blank">一起去旅行吧</a>
                    </p>
                </div>
            </div>

        )
    }
}