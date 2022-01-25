import React, {Component} from 'react';
import { connect } from 'react-redux';
import {createAddPersonAction} from '../../redux/actions/person'

class Person extends Component {
  state = {
    name: '',
    age: ''
  }
  addPerson = () => {
    const {name, age} = this.state
    this.props.add({name, age})

  }

  savePeosonData = type => event => this.setState({[type]: event.target.value})

  render() {
    const {sum, persons} = this.props
    return (
        <div>
          <h1>我是Person</h1>
          <h4>我读取的Count组件的和是： {sum}</h4>
          <input onChange={this.savePeosonData('name')} type="text" placeholder="姓名"/>
          <input onChange={this.savePeosonData('age')} type="text" placeholder="年龄"/>
          <button onClick={this.addPerson}>添加</button>
          <ul>
            {
              persons.map((one, index) => {
                return <li key={index}>{one.name}——{one.age}</li>
              })
            }
          </ul>
        </div>
    );
  }
}

export default connect(
    state => ({sum:state.count, persons: state.person}),
    {
      add: createAddPersonAction
    }
)(Person);
