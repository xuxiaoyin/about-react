import React, {Component} from 'react';
import PubSub from 'pubsub-js';
import './index.css';

class List extends Component {
  state = {
    users: [], // 存储用户信息
    isFirst: true, // 是否为初始展示
    loading: false,
    error: ''
  }

  componentDidMount() {
    // 订阅消息
    this.msgid = PubSub.subscribe('updateState', (_, data) => {
      console.log(data)
      this.setState(data)
    })
  }

  componentWillMount() {
    // 取消订阅
    PubSub.unsubscribe(this.msgid)
  }

  render() {
    const {users, loading, isFirst, error} = this.state

    return (
        <div className="row">
          {
            isFirst ? '欢迎使用' : loading ? <h1>Loading.....</h1> : error ? <h1>{error}</h1> :
            users.map(useObj => {
              return (
                  <div className="card" key={useObj.id}>
                    <a href={useObj.html_url} target="_blank">
                      <img src={useObj.avatar_url} style={{width: '100px'}} alt="pic"/>
                    </a>
                    <p className="card-text">{useObj.login}</p>
                  </div>
              )
            })
          }
        </div>
    );
  }
}

export default List;
