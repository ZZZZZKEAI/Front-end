import React from 'react';
import {Link} from 'react-router-dom';
import {Input,Button,message} from 'antd';
var ForgetCss = require('./forget.css');
export default class ForgetPage extends React.Component {
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
        "uid":this.state.userphone,
        }
        fetch("",{
            method:"post",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(data) 
        }).then(response=>response.json())
        .then(result=>{
            if(result.state==2){
                message.info("填写信息不正确，找回密码失败，请重试！")
            }else if(result.state==1){
                message.info("找回密码并修改成功！")
            } 
        }).catch(e=>{
            message.error(e);
        })
    } 
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
                                <Input type="text" name="username" placeholder="请输入您需要找回的用户名" value={this.state.username} onChange={e=>this.changeValue(e)} />

                            </div>
                        </div>
                        <div className={ForgetCss.z5_z6}>
                            <div className={ForgetCss.z6}>
                                <label for="phone">手 机 号 码</label>
                                <Input type="text" name="userphone" placeholder="请输入您注册所用的手机号码"  value={this.state.userphone} onChange={e=>this.changeValue(e)} />

                            </div>
                        </div>
                        <div className={ForgetCss.z5_z6}>
                            <div className={ForgetCss.z6}>
                                <label for="pwd">输 入 密 码</label>
                                <Input type="password" name="password" placeholder="请输入您的新密码" value={this.state.password} onChange={e=>this.changeValue(e)} />
                            </div>
                        </div>
                        <div className={ForgetCss.z5_z6}>
                            <div className={ForgetCss.z6}>
                                <label for="password2">确 认 密 码</label>
                                <Input type="text" name="password2" placeholder="请再次输入您的新密码"  value={this.state.password2} onChange={e=>this.changeValue(e)}/>
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
                        <h3><Button onClick={this.upload}>确认找回密码</Button></h3>
                    </div>
                </div>
                <div className={ForgetCss.nxl2}>
                    <p>
                        <a href="https://www.baidu.com/" target="_blank">一起去旅行吧</a>
                    </p>
                </div>
            </div>
        )
    }
}