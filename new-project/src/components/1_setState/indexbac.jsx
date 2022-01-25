import React, {Component} from 'react';

class Indexbac extends Component {
  state = {
    sum: 0
  }
  // add是由React控制的事件回调，所以其中的setState更新状态的动作是【异步的】
  add = () => {
    const { sum } = this.state
    this.setState({sum: sum + 1})
    console.log(this.state.sum) // setState的更新可能是异步的
    // setState本身就是一个内置方法，它是我们调用的，根本就不是回调函数，所以setState压根就不是异步的，但他引发内部的回调（动作）时异步的
  }
  add2 = () => {
    setTimeout(() => {
      const { sum } = this.state
      this.setState({sum: sum + 1}) // 同步的
      console.log(this.state.sum)
    })
  }
  // componentDidMount是生命周期钩子，所以其中的setState更新状态的动作是【异步的】
  componentDidMount() {
    const { sum } = this.state
    this.setState({sum: sum + 1})
    console.log(this.state.sum)
  }

  render() {
    const {sum} = this.state
    return (
        <div>
          <h2>当前求和为：{sum}</h2>
          <button onClick={this.add}>点我+1</button>
          <button onClick={this.add2}>点我+1</button>
        </div>
    );
  }
}

export default Indexbac;
