### 求和案例_react-redux基本使用
        （1）明确两个基本概念：
                1）UI组件：不能使用任何redux的api，只负责页面的呈现、交互等。
                2）容器组件：负责和dedux通信，将结果交给UI组件
        （2）如何创建一个容器组件————靠react-redux的connect函数
                写法：connect(mapStateToProps, mapDispatchToProps)(UI组件)
                -mapStateToProps:映射状态，返回值是一个对象
                -mapDispatchToProps:映射操作状态的方法，返回值是一个对象
        （3）备注：容器组件中的store是靠props传进去的，而不是在容器组件中直接引入
        
### 求和案例_react-redux优化
        （1）无需自己给容器组件传递store,给<App />包裹一个<Provider store={store}>即可
        （2）使用了react-redux后也不用再自己检测redux中状态的改变了，容器组件可以自动完成这个工作
        （3）mapDispatchToProps也可以简单的写成一个对象
        （4）一个组件要和redux"打交道"要经过那几步？
               （1）定义好UI组件---不暴露
               （2）引入connect生成一个容器组件，并暴露，写法如下：
                    connect(
                        state => ({key: value}), // 映射状态
                        {key: xxxxAction} // 映射操作状态的方法
                    )(UI组件)
               （3）在UI组件中通过this.props.xxxxx读取和操作状态
        （5）容器组件和UI组件整合一个文件
        
### 纯函数
        1.一类特别的函数：只要是同样的输入（实参），必定得到同样的输出（返回）
        2.必须遵守以下一些约束
            1）不得改写参数数据
            2）不会产生任何副作用，列入网络请求，输入和输出设备
            3）不能调用Date.now()或者Math.random()等不纯的方法
        3.redux的reducer函数必须是一个纯函数
