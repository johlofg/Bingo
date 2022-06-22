import { createSlice } from '@reduxjs/toolkit';

const initialState = localStorage.getItem('bingo')
  ? {
    tile: null,
    list: [JSON.parse(localStorage.getItem('bingo')).tile]
    
  }
  : {
    tile: [],
    list: []
  }
  
    const bingo = createSlice({
  name: 'bingo',
  initialState,
  reducers: {
    setStatus: (store, action) => {
      store.tile = action.payload      
    },
    setList: (store, action) => {
      const existingId = store.list.find((item) => item === action.payload)
        if(!existingId){
          store.list = [...store.list, action.payload]
        }
        if(existingId) {
          store.tile = action.payload
        }
      }
    }
})

export default bingo