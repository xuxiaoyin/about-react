### 深入setState
        一.setState()更新状态的动作是同步还是异步的？-----要看setState的执行位置
            （1）在由react所控制的回调中更新动作是【异步】的：生命周期钩子、react事件监听回调
            （2）在非react控制的异步回调中更新的动作是【同步】的：定时器回调、原生事件回调
            
        二.setState的两种写法：
            （1）对象写法：setState(stateChange, [callback])
                1.stateChange为状态改变对象（该对象可以提现出状态的更改）
                2.callback是可选的回调函数，它在状态更新完毕、界面也更新后（render调用后）才被调用
            
            （2）函数式写法：setState(updater, [callback])
                1.updater为返回的stateChange对象的函数
                2.updater可以接收到state和props
                3.callback是可选的回调函数，它在状态更新，界面也更新后（render调用后）才被调用
                
        总结：
            1.对象式的setState是函数式的setSatte的简写方式（语法糖）
            2.使用原则：
                （1）如果新状态不依赖原状态 ===> 使用对象方式
                （2）如果新状态依赖原状态 ===> 使用函数方式
                （3）如果需要在setState()执行后获取最新的状态数据，要在第二个callback函数中读取
                
                
                
### 组件间的通讯
#### 组件间的关系
    *父子组件
    *兄弟组件（非嵌套组件）
    *祖孙组件（跨级组件）
    *其他关系
    
#### 几种通信方式：
    1.props:
        最简单的方式
    2.消息订阅-发布：
        pubs-sub、event等等
    3.集中式管理：
        redux、dva等
    4.conText:
        生产者-消费者模式
        
#### 比较好的搭配方式
    父子组件： props
    兄弟组件：消息订阅-发布、集中式管理
    祖孙组件(跨级组件)：消息订阅-发布、集中式管理、conText(开发用的少，封装插件用的多)
