import React, {Component} from 'react';
import B from './B'
import {MyContext} from './MyContext'
import './index.css'

const {Provider} = MyContext
class A extends Component {
  state = { name: '张三', age: 18, sex: '女' }
  render() {
    const { name, age, sex } = this.state
    return (
        <div className="a">
          <h2>我是爷爷</h2>
          <h4>我存储的name是{name}</h4>
          <Provider value={{name, age, sex}}>
            <B />
          </Provider>
        </div>
    );
  }
}

export default A;
