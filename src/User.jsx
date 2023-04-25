import React, { useContext } from 'react'
import { UserContext } from './App'

const User = () => {
    const { state, dispatch } = useContext(UserContext)
    const handClick = (e) => {
        dispatch({type: 'B', payload: e.target.value})
      }
  return (
    <div>
        <input type='number' value={state.age} onChange={handClick}/>
        <b>{state.age}11</b>
    </div>
  )
}

export default User