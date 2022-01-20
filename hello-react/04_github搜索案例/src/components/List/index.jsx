import React, {Component} from 'react';
import './index.css'

class List extends Component {
  render() {
    const {users, loading, isFirst, error} = this.props
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
