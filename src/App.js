import React from 'react'
import { Provider } from 'react-redux'
import { configureStore, combineReducers } from '@reduxjs/toolkit'

import Main from './components/Main'
import bingo from './reducers/bingo'

const reducer = combineReducers({
  bingo: bingo.reducer
})
const store = configureStore({ reducer })

export const App = () => {
  return (    
    <Provider store={store}>
      <Main />
    </Provider>    
  )
}
