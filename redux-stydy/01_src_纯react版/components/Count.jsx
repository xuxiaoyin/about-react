import React, {Component} from 'react';

class Count extends Component {
  state = { sum: 0 }
  // 加
  increment = () => {
    // 获取原状态
    const {sum} = this.state
    // 获取用户选择的数字
    const { value } = this.numberNode
    // 更新状态
    this.setState({sum: sum + value * 1})
  }
  // 减
  decrement = () => {
    // 获取原状态
    const {sum} = this.state
    // 获取用户选择的数字
    const { value } = this.numberNode
    // 更新状态
    this.setState({sum: sum - value * 1})
  }
  // 奇数加
  incrementIfOdd = () => {
    // 获取原状态
    const {sum} = this.state
    // 获取用户选择的数字
    const { value } = this.numberNode
    // 更新状态
    if (sum % 2 !== 0) {
      this.setState({sum: sum - value * 1})
    }
  }
  // 异步加
  incrementAsync = () => {
    // 获取原状态
    const {sum} = this.state
    // 获取用户选择的数字
    const { value } = this.numberNode
    // 更新状态
    setTimeout(() => {
      this.setState({sum: sum + value * 1})
    }, 500)
  }

  render() {
    return (
        <div>
          <h2>当前求和为：{this.state.sum}</h2>
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
