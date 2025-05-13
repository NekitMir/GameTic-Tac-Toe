import { useState } from 'react'
import { Field } from './components/Field/Field.jsx'
import { Information } from './components/InformationPlayers/Information.jsx'
import { ButtonReset } from './components/ButtonReset/ButtonReset.jsx'
import { CounterWin } from './components/CounterWin/CounterWin.jsx'
import './App.css'

export function Game() {
  const [currentPlayer, setCurrentPlayer] = useState('X') // Ход игрока 
  const [isGameEnded, setIsGameEnded] = useState(false) // Флаг окончания игры
  const [isDraw, setIsDraw] = useState(false) // Флаг ничьей
  const [countWin, setCountWin] = useState({
    X: 0,
    O: 0,
  })
  const [field, setField] = useState([
    '', '', '',
    '', '', '',
    '', '', '',
  ])

  const WIN_PATTERNS = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Варианты побед по горизонтали
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Варианты побед по вертикали
    [0, 4, 8], [2, 4, 6] // Варианты побед по диагонали
  ];

  const checkWinner = (field) => {
    const winnerPartner = WIN_PATTERNS.find(([a, b, c]) => 
    field[a] !== '' &&
    field[a] === field[b] &&
    field[a] === field[c]
  )

    if(winnerPartner) {
      setIsGameEnded(true)
      return field[winnerPartner[0]]
      
    }
    return null
  }

  const checkDraw = (field) => {
    return field.every(cell => cell !== '')
  }

  const handleResetGame = () => {
    setField([
      '', '', '',
      '', '', '',
      '', '', '',
    ])
    setIsGameEnded(false)
    setIsDraw(false)
    setCurrentPlayer('X')
  }

  const handleClick = (index) => {
    console.log(index)
    if(field[index] === '' && !isGameEnded) {
      const newField = [...field]
      newField[index] = currentPlayer
      setField(newField)
      
      const winner = checkWinner(newField)
      if(winner) {
        setIsGameEnded(true)
        setCountWin(prev => ({
          ...prev,
          [winner]: prev[winner] + 1
        }))
        return
      }
      
      if(checkDraw(newField)) {
        setIsDraw(true)
        setIsGameEnded(true)
        return
      }
      
      setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X')
    }
  }
  console.log(countWin)
 
  return (
    <>
      <CounterWin countWin={countWin}/>
      <Field field={field} handleClick={handleClick}/>
      <Information isDraw={isDraw} isGameEnded={isGameEnded} currentPlayer={currentPlayer}/>
      {(isGameEnded || isDraw) && (<ButtonReset resetClick={handleResetGame}/>)}
    </>
  )
}








