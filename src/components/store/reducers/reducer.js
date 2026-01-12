const filedArray = ['', '', '', '', '', '', '', '', ''];

const initialState = {
  field: filedArray,
  currentPlayer: 'X',
  winner: null,
  countWin: {
    X: 0,
    O: 0,
  },
  isGameEnded: false,
  isDraw: false,
  WIN_PATTERNS: [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8], // Варианты побед по горизонтали
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8], // Варианты побед по вертикали
    [0, 4, 8],
    [2, 4, 6], // Варианты побед по диагонали
  ],
};

const gameReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'RESET_GAME':
      return {
        ...state,
        field: filedArray,
        isGameEnded: false,
        isDraw: false,
        currentPlayer: 'X',
      };
    case 'CHECK_WINNER':
      return {
        ...state,
        isGameEnded: true,
        winner: action.payload,
      };
    case 'UPDATE_FILED':
      return {
        ...state,
        field: action.payload,
      };
    case 'COUNT_WIN':
      return {
        ...state,
        countWin: {
          ...state.countWin,
          [action.payload]: state.countWin[action.payload] + 1,
        },
      };
    case 'CHECK_DRAW':
      return {
        ...state,
        isDraw: true,
      };
    case 'UPDATE_CURRENT_PLAYER':
      return {
        ...state,
        currentPlayer: action.payload,
      };
    default:
      return state;
  }
};

export default gameReducer;
