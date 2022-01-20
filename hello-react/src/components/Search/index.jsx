import React, {Component} from 'react';
import axios from 'axios';
import PubSub from 'pubsub-js'

class Serrch extends Component {
  keyWord = React.createRef()

  search = () => {
    // 1.获取用户输入
    const { value } = this.keyWord.current
    // 2.校验数据
    if (!value.trim()) {
      return alert('输入不能为空')
    }
    PubSub.publish('updateState', {isFirst: false, loading: true})
    // 3.发送请求
    axios.get('https://api.github.com/search/users?q=' + value).then(
        response => {
          const { items } =  response.data
          // 通知app存储用户信息
          PubSub.publish('updateState', {users: items, loading: false})
        },
        err => {
          // 请求失败
          PubSub.publish('updateState', {loading: false, error: err.message})
        }
    )
  }
  render() {
    return (
        <section className="jumbotron">
          <h3 className="jumbotron-heading">Github用户搜索</h3>
          <div>
            <input type="text" ref={this.keyWord} placeholder="请输入关键词"/>
            <button onClick={this.search}>搜索</button>
          </div>
        </section>
    );
  }
}

export default Serrch;
