import React, {Component} from 'react';
import {connect} from 'react-redux';
import {increment, decrement, incrementAsync} from '../../redux/actions/count'

class Count extends Component {
  increment = () => {
    this.props.increment(1)
  }

  decrement = () => {
    this.props.decrement(1)
  }

  oddAdd = () => {
    const { sum,  increment } = this.props
    if (sum % 2 !== 0) {
      increment(1)
    }
  }

  asyncAdd = () => {
    this.props.incrementAsync(1, 500)
  }

  render() {
    return (
        <div>
          <h1>我是Count</h1>
          <h2>当前求和为{this.props.sum},下面的总人数为{this.props.persons}</h2>
          <button onClick={this.increment}>+</button>
          <button onClick={this.decrement}>-</button>
          <button onClick={this.oddAdd}>奇数加</button>
          <button onClick={this.asyncAdd}>异步加</button>
        </div>
    );
  }
}

export default connect(
    state => ({sum: state.count, persons: state.person.length}),
    {increment, decrement, incrementAsync}
)(Count)

