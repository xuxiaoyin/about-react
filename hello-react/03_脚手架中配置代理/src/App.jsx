import React, {Component} from 'react';
import axios from 'axios'

class App extends Component {
  getStudents = () => {
    const result = axios.get('http://localhost:3000/api/students').then(
        response => {
          console.log(response.data)
        },
        err => {
          console.log(err)
        }
    )
    console.log(result)
  }

  render() {
    return (
        <div>
          <button onClick={this.getStudents}>点我获取学生信息</button>
        </div>
    );
  }
}

export default App;
