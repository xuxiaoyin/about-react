import React, { Component } from 'react';
import { NavBar } from 'antd-mobile'
import { Input, List, Button, Toast } from 'antd-mobile'
import { regPhone, regCode } from '../../config/reg'
import './Login.css'

class Login extends Component {
  state = {
    phone: '',
    code: ''
  }

  //登录
  login = () =>{
    const {phone, code} = this.state
    if (phone === '') {
      return Toast.show({
        icon: 'fail',
        content: '非法手机号, 请重新输入',
      })
    }
    if (code === '') {
      return Toast.show({
        icon: 'fail',
        content: '验证码输入错误，请重新输入',
      })
    }
    console.log(phone)
    console.log(code)
  }

  changeDate = (type) => {
    return (value) => {
      if (type === 'phone' && (!regPhone.test(value))) {
        this.setState({[type]: ''})
      }else if (type === 'code' && (!regCode.test(value))) {
        this.setState({[type]: ''})
      } else {
        this.setState({[type]: value})
      }
    }
  }

  // 获取验证码
  getCode = () => {
    console.log(123)
  }
  render() {
    return (
        <div>
          <NavBar>手机验证码登录</NavBar>
          <div className="login-wrap">
            <List
                style={{
                  '--prefix-width': '6em',
                }}
            >
              <List.Item>
                <Input placeholder='请输入手机号' clearable onChange={this.changeDate('phone')} />
              </List.Item>
              <List.Item extra={<a onTouchEnd={this.getCode}>获取验证码</a>}>
                <Input placeholder='6位验证码' clearable onChange={this.changeDate('code')} />
              </List.Item>
            </List>
          </div>
          <Button block color='primary' size='large' onClick={this.login}>
            登 录
          </Button>
        </div>
    );
  }
}

export default Login;
