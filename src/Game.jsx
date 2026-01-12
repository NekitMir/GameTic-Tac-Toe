import { useState } from 'react';
import { Field } from './components/Field/Field.jsx';
import { Information } from './components/InformationPlayers/Information.jsx';
import { ButtonReset } from './components/ButtonReset/ButtonReset.jsx';
import { CounterWin } from './components/CounterWin/CounterWin.jsx';
import { useSelector, useDispatch } from 'react-redux';
import './App.css';

export function Game() {
  const field = useSelector((state) => state.field);
  console.log(field);

  const counterWin = useSelector((state) => state.countWin);
  console.log(counterWin);

  const winPatterns = useSelector((state) => state.WIN_PATTERNS);
  console.log(winPatterns);

  const currentPlayer = useSelector((state) => state.currentPlayer);

  const isGameEnded = useSelector((state) => state.isGameEnded);

  const isDraw = useSelector((state) => state.isDraw);

  const dispatch = useDispatch();

  const checkWinner = (field) => {
    const winnerPartner = winPatterns.find(
      ([a, b, c]) => field[a] !== '' && field[a] === field[b] && field[a] === field[c]
    );

    if (winnerPartner) {
      dispatch({ type: 'CHECK_WINNER', payload: field[winnerPartner[0]] });
      return field[winnerPartner[0]];
    }
    return null;
  };

  const checkDraw = (field) => {
    return field.every((cell) => cell !== '');
  };

  const handleResetGame = () => {
    dispatch({ type: 'RESET_GAME' });
  };

  const handleClick = (index) => {
    console.log(index);
    if (field[index] === '' && !isGameEnded) {
      const newField = [...field];
      newField[index] = currentPlayer;
      dispatch({ type: 'UPDATE_FILED', payload: newField });

      const winner = checkWinner(newField);
      if (winner) {
        dispatch({ type: 'CHECK_WINNER', payload: winner });
        dispatch({ type: 'COUNT_WIN', payload: winner });
        return;
      }

      if (checkDraw(newField)) {
        dispatch({ type: 'CHECK_DRAW' });
        dispatch({ type: 'CHECK_WINNER' });
        return;
      }

      dispatch({ type: 'UPDATE_CURRENT_PLAYER', payload: currentPlayer === 'X' ? 'O' : 'X' });
    }
  };

  return (
    <>
      <CounterWin />
      <Field field={field} handleClick={handleClick} />
      <Information />
      {(isGameEnded || isDraw) && <ButtonReset resetClick={handleResetGame} />}
    </>
  );
}
