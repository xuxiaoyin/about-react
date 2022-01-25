import React, {Component} from 'react';
import ReactDOM from 'react-dom'

class Count extends Component {
  state = {
    sum: 0
  }
  inputContainer = React.createRef()
  add = () => {
    this.setState(state => ({sum: state.sum + 3}))
  }

  death = () => {
    ReactDOM.unmountComponentAtNode(document.getElementById('root'))
  }

  show = () => {
    alert(this.inputContainer.current.value)
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      this.add()
    }, 500)
  }

  componentWillUnmount() {
    clearInterval(this.timer)
  }

  render() {
    return (
        <div>
          <h2>当前求和为：{this.state.sum}</h2>
          <button onClick={this.add}>点我加3</button>
          <button onClick={this.death}>点我卸载组件</button>
          <input ref={this.inputContainer} type="text" />
          <button onClick={this.show}>点我提示输入</button>
        </div>
    );
  }
}

export default Count;
