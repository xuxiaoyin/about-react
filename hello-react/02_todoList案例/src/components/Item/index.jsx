import React, {Component} from 'react';
import './index.css';

class Item extends Component {
  state = {
    mouseIsEnter: false
  }
  // 鼠标移出移入
  handleMouse = (mouseIsEnter) => {
    return () => {
      this.setState({mouseIsEnter})
    }
  }

  // 删除
  delItem = (id) => {
    return () => {
      if (window.confirm('确定删除吗？')) {
        console.log(id)
        this.props.deleteTodo(id)
      }
    }
  }

  // 勾选或取消
  handleCheck = (id) => {
    return (event) => {
      const { updateTodo } = this.props
      updateTodo(id, event.target.checked)
    }
  }

  render() {
    const { id, name, done } = this.props
    const { mouseIsEnter } = this.state
    return (
        <li
            onMouseEnter={this.handleMouse(true)}
            onMouseLeave={this.handleMouse(false)}
            className={mouseIsEnter ? 'active item' : 'item'}
        >
          <label>
            <input type="checkbox" checked={done} onChange={this.handleCheck(id)}/>
            <span>{name}</span>
          </label>
          <button className="btn" style={{display: mouseIsEnter ? 'block' : 'none'}} onClick={this.delItem(id)}>删除</button>
        </li>
    );
  }
}

export default Item;
