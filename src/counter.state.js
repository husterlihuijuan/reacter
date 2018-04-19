//initState
//如果返回的不是object,却没有id，则store初始化state的时候必须抛出异常
const initState=()=>0
//actions
const increase=(state)=>state+1
const add=(step)=>(state)=>state+step
const addWithProps=(state,props)=>state+props.step
const action={increase,add,addWithProps}
const formatCounter=(state)=>`counter is:${state}`
const models={formatCounter}
//model这么组合,未来还有asyncActions之类?
//这里actions保留原始的actions
//然后可以用createModel来为actions创建代理，即model.add等同于model.setState(withId(add))
const model={initState, action,...models,id:null,setState:null,state:null}
export default model