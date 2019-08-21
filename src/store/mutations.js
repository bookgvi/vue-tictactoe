import * as types from './mutation-types'

export const mutations = {
  [types.DRAW_XO]: (state, payload) => {
    state.gameField.splice(payload.cellNum, 1, state.isXO ? 'X' : 'O')
    state.isXO = !state.isXO
    ++state.moves
    if (state.moves > 8) {
      state.isPlaying = false
    }
  },
  [types.IS_WINNER]: state => {
    let a, b, c
    for (let i = 0; i < state.win.length; i++) {
      [a, b, c] = state.win[i]
      if (state.gameField[a] && state.gameField[a] === state.gameField[b] && state.gameField[a] === state.gameField[c]) {
        state.winner = state.gameField[a]
        state.isPlaying = false
        state.winnerLine = i + 1
      }
    }
  },
  [types.NEW_GAME]: state => {
    state.isXO = true
    state.isPlaying = true
    state.moves = 0
    state.gameField = new Array(9)
    state.winner = 'Nobody wins :('
    state.winnerLine = false
  }
}
