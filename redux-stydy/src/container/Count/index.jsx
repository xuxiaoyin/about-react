import CountUi from '../../components/Count'
import { craeteIncrementAsyncAction, craeteDecrementAction, craeteIncrementAction} from '../../redux/count_action'

import { connect } from 'react-redux'

// 普通写法
// const mapDispatchToProps = (dispatch) => (
//     {
//       jia: (value) => dispatch(craeteIncrementAction(value)),
//       jian: (value) => dispatch(craeteDecrementAction(value)),
//       jiaAsync: (value, time) => dispatch(craeteIncrementAsyncAction(value, time)),
//     }
// )

// 精简写法
// const mapDispatchToProps = {
//   jia: craeteIncrementAction,
//   jian: craeteDecrementAction,
//   jiaAsync: craeteIncrementAsyncAction,
// }

export default connect(
    (state) => ({sum: state}), // 映射状态
    {
      jia: craeteIncrementAction,
      jian: craeteDecrementAction,
      jiaAsync: craeteIncrementAsyncAction,
    } // 映射状态操作的方法
)(CountUi)
