// 此文件用于定于创建action的函数

import { DECREMENT, INCREMENT } from '../constant'

// 创建加的action
export const increment= value => ({type: INCREMENT, data: value})

// 创建减的action
export const decrement = value => ({type: DECREMENT, data: value})

export const incrementAsync = (value, delay) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(increment(value))
    }, delay)
  }
}
