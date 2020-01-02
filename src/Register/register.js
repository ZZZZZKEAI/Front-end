import React from 'react';
import {Link} from 'react-router-dom';
import {Input,Button,message} from 'antd';
var RegisterCss = require('./register.css');
export default class RegisterPage extends React.Component {
    constructor(props){
        super(props);
        this.state={}
    }
    changeValue=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    upload = ()=>{
        var data ={
        "username":this.state.username,
        "password":this.state.password,
        "uid":this.state.uid,
        }
        fetch("user/users",{
            method:"post",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(data) 
        }).then(response=>response.json())
        .then(result=>{
            if(result.state==2){
                message.info("注册失败或者注册信息为空")
            }else if(result.state==1){
                message.info("注册成功")
            }
        }).catch(e=>{
            message.error(e);
        })
    }
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
                                <label for="usename">&nbsp;&nbsp;用&nbsp;&nbsp;户&nbsp;&nbsp;名&nbsp;</label>
                                <Input type="text" name="username" placeholder="输入您的用户名" value={this.state.username} onChange={e=>this.changeValue(e)}/>

                            </div>
                        </div>
                        <div className={RegisterCss.z5_z6}>
                            <div className={RegisterCss.z6}>
                                <label for="uid">账 号 号 码</label>
                                <Input type="text" name="uid" placeholder="输入您的账号号码"  value={this.state.uid} onChange={e=>this.changeValue(e)}  />
                            </div>
                        </div>
                        <div className={RegisterCss.z5_z6}>
                            <div className={RegisterCss.z6}>
                                <label for="password">设 置 密 码</label>
                                <Input type="password" name="password" placeholder="输入您的密码" value={this.state.password} onChange={e=>this.changeValue(e)} />

                            </div>
                        </div>
                        <div className={RegisterCss.z5_z6}>
                            <div className={RegisterCss.z6}>
                                <label for="password2">确 认 密 码</label>
                                <Input type="password2" name="password2" placeholder="再次输入您的密码" value={this.state.password2} onChange={e=>this.changeValue(e)} />
                            </div>
                        </div>
                        <div className={RegisterCss.z5_z6,RegisterCss.xieyi}>
                            <div className={RegisterCss.z6,RegisterCss.default}>
                                <Input type="checkbox" id="ck" />
                                <span>
                                    "我已经阅读并同意"
                                    <a herf="##">《旅行用户注册协议》</a>
                                </span>
                            </div>
                        </div>
                        <h3><Button onClick={this.upload}>注册</Button></h3>
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