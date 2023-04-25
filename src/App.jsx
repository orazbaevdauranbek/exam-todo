import React, { createContext, useReducer } from 'react'


export const UserContext = createContext()

const initialState = {
  name: 'Dauran',
  age: 19,
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
      case "A":
        return {
          ...state,
          name: action.payload
        }
      case 'B': 
        return {
          ...state,
        age: action.payload
          
      }
        default:
          return state
  }
}
const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const handeleChange = (e) => {
    dispatch({ type: "A", payload: e.target.value })
  }
  
  return (
    <UserContext.Provider value={{state, handClick,dispatch}}>
  <User/>
    <input type="text" value={state.name} onChange={handeleChange} />

    <h1>{state.name}</h1>
    </UserContext.Provider>
  
  ) 
}

export default App