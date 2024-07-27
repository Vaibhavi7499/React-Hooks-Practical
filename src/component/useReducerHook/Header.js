import React, { useContext } from 'react'
import todosContext from '../../ContextAPI/TodoContext'

export const Header = () => {
   const {state} =  useContext(todosContext)
  return (
    <div>
        <h1>Total Todos {state.length}</h1>
    </div>
  )
}
