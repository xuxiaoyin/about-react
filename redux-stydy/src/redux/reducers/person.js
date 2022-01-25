import { ADD_PERSON } from '../constant';


const initState = [
  {name: '海峰', age: 18},
  {name: '六台', age: 28}
]
export default function personReducer(preState = initState, action) {
  const { type, data } = action
  switch (type) {
    case ADD_PERSON:
        return [data, ...preState]
    default:
      return preState
  }
}
