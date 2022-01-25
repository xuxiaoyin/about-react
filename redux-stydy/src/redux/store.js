// 该文件是创建整个rudux中最为核心的store对象
// 引入createStore函数，用于创建store对象
import { createStore, applyMiddleware } from 'redux'
// 引入reducer
import reducer from './reducers'
// 引入用于支持异步action的中间件
import thunk from 'redux-thunk'


// 创建store对象
const store = createStore(reducer, applyMiddleware(thunk))

// 暴露store
export default store
