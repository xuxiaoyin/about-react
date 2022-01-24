import React, {Component} from 'react';
import store from '../redux/store'

class Count extends Component {
  state = {  wind: '北风6级' }
  // 加
  increment = () => {
    // 获取用户选择的数字
    const { value } = this.numberNode
    // 准备一个action对象
    const action = {type: 'increment', data: value * 1}
    //分发这个action
    store.dispatch(action)
  }
  // 减
  decrement = () => {
    // 获取用户选择的数字
    const { value } = this.numberNode
    // 准备一个action对象
    const action = {type: 'decrement', data: value * 1}
    //分发这个action
    store.dispatch(action)
  }
  // 奇数加
  incrementIfOdd = () => {
    // 获取用户选择的数字
    const { value } = this.numberNode
    if (store.getState() % 2 !== 0) {
      store.dispatch({type: 'increment', data: value * 1})
    }
  }
  // 异步加
  incrementAsync = () => {
    // 获取用户选择的数字
    const { value } = this.numberNode
    // 更新状态
    setTimeout(() => {
      store.dispatch({type: 'increment', data: value * 1})
    }, 500)
  }

  render() {
    return (
        <div>
          <h2>当前求和为：{store.getState()}</h2>
          <div>今天的天气：{this.state.wind}</div>
          <select ref={c => this.numberNode = c}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>&nbsp;&nbsp;
          <button onClick={this.increment}>+</button>&nbsp;&nbsp;
          <button onClick={this.decrement}>-</button>&nbsp;&nbsp;
          <button onClick={this.incrementIfOdd}>奇数再加</button>&nbsp;&nbsp;
          <button onClick={this.incrementAsync}>异步加</button>
        </div>
    );
  }
}

export default Count;
