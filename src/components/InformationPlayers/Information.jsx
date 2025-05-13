import { InformationLoyaut } from './InformationLoyaut.jsx'

export const Information = ({isDraw, isGameEnded, currentPlayer}) => {
  return (
    <>
      <InformationLoyaut isDraw={isDraw} isGameEnded={isGameEnded} currentPlayer={currentPlayer}/>
    </>
  )
}