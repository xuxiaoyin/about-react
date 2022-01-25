// 该文件定义为Count组件服务的reducer

// 引入常量模块
import { DECREMENT, INCREMENT } from './constant'

export default function countReducer(preState=0, action) {
    // 从action对象中获取type, data
    const { type, data } = action
    switch (type) {
        case INCREMENT:
            return preState + data
        case DECREMENT:
            return preState - data
        default: // 不是加，也不是减，那么就是初始化
            return preState
    }
}
