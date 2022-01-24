// 该文件定义为Count组件服务的reducer

export default function countReducer(preState=0, action) {
    // 从action对象中获取type, data
    const { type, data } = action
    switch (type) {
        case 'increment':
            return preState + data
        case 'decrement':
            return preState - data
        default: // 不是加，也不是减，那么就是初始化
            return preState
    }
}
