import React from 'react'
import {Link} from 'react-router-dom';
import {Input,Button,message} from 'antd';
var LoginCss = require('./login.css');

export default class LoginPage extends React.Component {
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
        fetch("user/ulogin",{
            method:"post",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(data) 
        }).then(response=>response.json())
        .then(result=>{
            if(result.state==2){
                message.info("登陆失败")
            }else if(result.state==1){
                message.info("密码错误或者用户名错误，用户名不存在请先注册")
            }
        }).catch(e=>{
            message.error(e);
        })
    }
    render() {
        return (
            <div className={LoginCss.body}>
                <div className={LoginCss.login}>
                    <h2>一起去旅行吧</h2>
                    <div className={LoginCss.login_top}>
                        <h1>账户登录</h1>
                        <form>
                            <Input type="text"  name="uid" value={this.state.uid} onChange={e=>this.changeValue(e)} placeholder="输入您的用户ID"/>
                            <Input type="text" type="text" name="username" value={this.state.username} onChange={e=>this.changeValue(e)} placeholder="输入您的用户名"/>
                            <Input type="password" name="password" value={this.state.password} onChange={e=>this.changeValue(e)} placeholder="输入您的密码" />
                        </form>
                        <div className={LoginCss.forgot}>
                        <Link to='/forget'>忘记密码?</Link>
                            <Button  onClick={this.upload}>登录</Button>
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