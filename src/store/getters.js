export const getters = {
  isXO: state => state.isXO,
  isPlaying: state => state.isPlaying,
  isWiiner: state => state.winner,
  getGameField: state => state.gameField,
  winnerLine: state => state.winnerLine
}
