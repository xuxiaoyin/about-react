// 此文件用于定于创建action的函数

import { DECREMENT, INCREMENT } from './constant'

// 创建加的action
export const craeteIncrementAction = value => ({type: INCREMENT, data: value})

// 创建减的action
export const craeteDecrementAction = value => ({type: DECREMENT, data: value})
