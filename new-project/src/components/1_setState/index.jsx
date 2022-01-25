import React, {Component} from 'react';

class Index extends Component {
  state = {sum: 0}
  add = () => {
    // 对象式
    // const { sum } = this.state
    // this.setState({sum: sum + 1}, () => {
    //   console.log(this.state.sum)
    // })

    // 函数式：
    // 新状态依赖原状态，适合函数式
    this.setState(state => ({sum: state.sum + 1}), () => {
      console.log(this.state.sum)
    })
  }
  change = () => {
    // 新状态不依赖原状态，适合对象式
    this.setState({sum: 99})
  }
  render() {
    return (
        <div>
          <h2>当前求和为：{this.state.sum}</h2>
          <button onClick={this.add}>点我加1</button>
          <button onClick={this.change}>点我变为99</button>
        </div>
    );
  }
}

export default Index;
