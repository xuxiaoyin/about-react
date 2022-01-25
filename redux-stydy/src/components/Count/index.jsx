import React, {Component} from 'react';
import {connect} from 'react-redux';
import {craeteIncrementAction, craeteDecrementAction, craeteIncrementAsyncAction} from '../../redux/actions/count'

class Count extends Component {
  increment = () => {
    this.props.jia(1)
  }

  render() {
    return (
        <div>
          <h1>我是Count</h1>
          <h2>当前求和为{this.props.sum},下面的总人数为{this.props.persons}</h2>
          <button onClick={this.increment}>+</button>
          <button>-</button>
          <button>奇数加</button>
          <button>异步加</button>
        </div>
    );
  }
}

export default connect(
    state => ({sum: state.count, persons: state.person.length}),
    {
      jia: craeteIncrementAction
    }
)(Count)

