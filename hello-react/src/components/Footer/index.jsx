import React, {Component} from 'react';
import './index.css';

class Footer extends Component {
  checkAll = (event) => {
    this.props.checkAll(event.target.checked)
  }

  deleteDone = () => {
    this.props.deleteDone()
  }

  render() {
    const { todos } = this.props
    const total = todos.length
    const doneCount = todos.reduce((preValue, current) => {
      return preValue + (current.done ? 1 : 0)
    }, 0)
    return (
        <div className="footer">
          <label>
            <input type="checkbox" checked={total === doneCount && total > 0} onChange={this.checkAll}/>
            <span>已完成{doneCount}/全部{total}</span>
          </label>
          { doneCount > 0 && <button onClick={this.deleteDone}>清空已完成</button>}
        </div>
    );
  }
}

export default Footer;
