import React from 'react'
import { createStore,connect, compose } from 'rees'
import count from './counter.state'

let store = createStore({},{count});
//ui Counter
let Counter = ({value,handleIncrease,reduce}) => {
  return (
    <div>
      <div>
      <button onClick={handleIncrease}> counter + </button>
      <button onClick={reduce}>counter-</button>
      <span>{value}</span>
    </div>
    <div>
      <button onClick={handleIncrease}> counter + </button>
      <button onClick={reduce}>counter-</button>
      <span>{value}</span>
    </div>
    </div>
  )
}
// here,counter is a proxy object,increase is a function,so we must use:
// handleIncrease:(e)=>store.counter.increase()
// not handleIncrease:(e)=>store.counter.increase

export default Counter= compose(
    store.provider,
    connect((props)=>({
      value:store.state.count,
      handleIncrease:(e)=>store.count.increase(),
      reduce:(e)=>store.count.add(-1)
    }))
)(Counter)
        
