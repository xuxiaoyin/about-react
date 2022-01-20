import React, {Component} from 'react';
import { v4 as uuidv4 } from 'uuid';
import './index.css';

class Add extends Component {
  handleKeyUp = (event) => {
    const { value } = event.target
    if(event.keyCode !== 13) {
      return
    }
    if (value.trim() === '') {
      return alert('输入内容不能为空')
    }
    const todoObj = {id: uuidv4(), name: value, done: false}
    // 将tidoObj传给App
    const { addTodo } = this.props
    addTodo(todoObj)
    event.target.value = ''
  }
  render() {
    return (
        <div>
          <input className="add-inp" onKeyUp={this.handleKeyUp} placeholder="请输入你的任务名称问你个，按回车确认" />
        </div>
    );
  }
}

export default Add;
