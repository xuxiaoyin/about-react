import React, {Component} from 'react';
import { craeteIncrementAsyncAction, craeteDecrementAction, craeteIncrementAction} from '../../redux/count_action'
import { connect } from 'react-redux'

// 定义CountUI组件
class CountUi extends Component {
  state = {  wind: '北风6级' }
  // 加
  increment = () => {
    // 获取用户选择的数字
    const { value } = this.numberNode
    this.props.jia(value * 1)
  }
  // 减
  decrement = () => {
    // 获取用户选择的数字
    const { value } = this.numberNode
    this.props.jian(value * 1)
  }
  // 奇数加
  incrementIfOdd = () => {
    // 获取用户选择的数字
    const { value } = this.numberNode
    if (this.props.sum % 2 !== 0) {
      this.props.jia(value * 1)
    }
  }
  // 异步加
  incrementAsync = () => {
    // 获取用户选择的数字
    const { value } = this.numberNode
    this.props.jiaAsync(value * 1, 500)
  }

  render() {
    console.log(this.props)
    return (
        <div>
          <h2>当前求和为：{this.props.sum}</h2>
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

// 容器组件
export default connect(
    (state) => ({sum: state}), // 映射状态
    {
      jia: craeteIncrementAction,
      jian: craeteDecrementAction,
      jiaAsync: craeteIncrementAsyncAction,
    } // 映射状态操作的方法
)(CountUi)
