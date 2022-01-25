import React, {Component} from 'react';
import C from './C'

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

export default B;
