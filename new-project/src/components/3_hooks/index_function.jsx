import React from 'react';
import ReactDOM from 'react-dom'

export default function Count() {
  const [sum, setSum] = React.useState(0)

  let x = React.useRef()

  function add() {
    // setSum(sum + 3)
    setSum(sum => sum + 3)
    // setInterval(() => {
    //   setSum(sum => sum + 3)
    // }, 500)
  }

  function death() {
    ReactDOM.unmountComponentAtNode(document.getElementById('root'))
  }

  function show() {
    console.log(x)
    console.log(x.current.value)
  }

  // 不带第二个参数，相当于componentDidMount()和componentDidUpdate,
  // 第二个参数为空数组，相当于componentDidMount()
  // 第一个参数返回函数相当于componentWillUnmount()
  React.useEffect(() => {
    console.log(1)
    const timer = setInterval(() => {
      setSum(sum => sum + 3)
    }, 500)
    return () => {
      clearInterval(timer)
    }
  }, [])



  return (
      <div>
        <h2>当前求和为：{sum}</h2>
        <button onClick={add}>点我加3</button>
        <button onClick={death}>点我卸载组件</button>
        <input type="text" ref={x}  />
        <button onClick={show}>点我提示输入</button>
      </div>
  )
}
