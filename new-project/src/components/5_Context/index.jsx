import React, {Component} from 'react';
import './index.css'

const MyContext = React.createContext()
// const {Provider, Consumer} = MyContext
class Demo extends Component {
  state = { name: '张三', age: 18, sex: '女' }
  render() {
    const { name, age, sex } = this.state
    return (
        <div className="a">
          <h2>我是爷爷</h2>
          <h4>我存储的name是{name}</h4>
          <MyContext.Provider value={{name, age, sex}}>
            <B />
          </MyContext.Provider>
        </div>
    );
  }
}

class B extends Component {
  render() {
    return (
        <div className="b">
          <h2>我是B爸爸</h2>
          <C />
        </div>
    );
  }
}

class C extends Component {
  static contextType = MyContext
  render() {
    console.log(this)
    const { name, age, sex } = this.context
    return (
        <div className="c">
          <h2>我是C儿子</h2>
          <h4>我收到爷爷给的是{name}--{age}--{sex}</h4>
          <D />
        </div>
    );
  }
}

function D() {
  return (
      <div className="d">
        <h2>我是D孙子</h2>
        <MyContext.Consumer>
          {
            (value) => {
              return <h4>{value.name}--{value.age}--{value.sex}</h4>
            }
          }
        </MyContext.Consumer>
      </div>
  )
}


export default Demo;
