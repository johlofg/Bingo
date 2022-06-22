/* eslint-disable jsx-a11y/interactive-supports-focus */
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import bingo from 'reducers/bingo'
import styled from 'styled-components'

const BingoTile = ({ text, id }) => {
  const [done, setDone] = useState(false)
  const dispatch = useDispatch()

  useEffect(() => {
  },[])
  
  const BingoT = styled.div`  
  width: 100%;
  border: 1px solid #000;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;  
  background-color: #fcde06;
  border: solid .5px #000;   
  background-color: ${(done ? '#a18f04fd' : '#fcde06')};
  `
  
  const onButtonClick = () => {
    setDone(!done)
    dispatch(bingo.actions.setStatus(done))
    dispatch(bingo.actions.setList({id}))
  }

  return (
    // eslint-disable-next-line jsx-a11y/interactive-supports-focus
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events
    <BingoT onClick={onButtonClick} role="button">
      {text}
    </BingoT>
  )
}

export default BingoTile