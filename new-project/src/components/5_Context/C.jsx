import React from 'react';
import { MyContext } from './MyContext'

const { Consumer } = MyContext

// class C extends Component {
//   static contextType = MyContext
//   render() {
//     console.log(this)
//     const { name, age, sex } = this.context
//     return (
//         <div className="c">
//           <h2>我是C儿子</h2>
//           <h4>我收到爷爷给的是{name}--{age}--{sex}</h4>
//         </div>
//     );
//   }
// }
//
// export default C;

export default function C() {
  return (
      <div className="d">
        <h2>我是C儿子</h2>
        <Consumer>
          {
            ({name, age, sex}) => {
              return <h4>{name}--{age}--{sex}</h4>
            }
          }
        </Consumer>
      </div>
  )
}
