import React, {Component} from 'react';
import Serrch from "./components/Search";
import List from "./components/List";

class App extends Component {
  state = {
    users: [], // 存储用户信息
    isFirst: true, // 是否为初始展示
    loading: false,
    error: ''
  }

  // saveUsers = (userArr) => {
  //   this.setState({users: userArr})
  // }

  updateState = (obj) => {
    this.setState(obj)
  }

  render() {
    return (
        <div className="container">
          <Serrch updateState={this.updateState} />
          <List {...this.state}/>
        </div>
    );
  }
}

export default App;
