import React from 'react';
import {Link} from 'react-router-dom';
var ForgetCss = require('./forget.css');
export default class ForgetPage extends React.Component {
    render(){
        return(
            <div>
                <div className={ForgetCss.z1}>
                    <a className={ForgetCss.z2}></a>
                    <div className={ForgetCss.z3}>欢迎找回旅行网密码</div>
                </div>
                <div className={ForgetCss.z4}>
                    <div className={ForgetCss.z5}>
                        <div className={ForgetCss.z5_z6}>
                            <div className={ForgetCss.z6}>
                                <label for="userName">&nbsp;&nbsp;用&nbsp;&nbsp;户&nbsp;&nbsp;名&nbsp;</label>
                                <input type="text" id="userName" placeholder="请输入您的账户名或登录名" />

                            </div>
                        </div>
                        <div className={ForgetCss.z5_z6}>
                            <div className={ForgetCss.z6}>
                                <label for="pwd">身 份 证 号</label>
                                <input type="password" id="pwd" placeholder="请输入您的身份证号" />

                            </div>
                        </div>
                        <div className={ForgetCss.z5_z6}>
                            <div className={ForgetCss.z6}>
                                <label for="pwd2">输 入 密 码</label>
                                <input type="password" id="pwd2" placeholder="请输入您的密码" />
                            </div>
                        </div>
                        <div className={ForgetCss.z5_z6}>
                            <div className={ForgetCss.z6}>
                                <label for="email">确 认 密 码</label>
                                <input type="text" id="email" placeholder="请再次输入您的密码" />
                            </div>
                        </div>
                        <div className={ForgetCss.z5_z6,ForgetCss.xieyi}>
                            <div className={ForgetCss.z6,ForgetCss.default}>
                                <input type="checkbox" id="ck" />
                                <span>
                                    "我已经阅读并同意"
                                    <a herf="##">《旅行用户找回密码协议》</a>
                                </span>
                            </div>
                        </div>
                        <h3><button id="btn" ><Link className={ForgetCss.nxl1} to='/login'>确认</Link></button></h3>
                    </div>
                </div>
                <div className={ForgetCss.nxl2}>
                    <p>
                        <a href="https://www.qunar.com/" target="_blank">一起去旅行吧</a>
                    </p>
                </div>
            </div>
        )
    }
}