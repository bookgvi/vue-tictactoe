import * as types from './mutation-types'

export const mutations = {
  [types.DRAW_XO]: (state, payload) => {
    if (!state.gameField[payload.cellNum]) {
      state.gameField.splice(payload.cellNum, 1, state.isXO ? 'X' : 'O')
      state.isXO = !state.isXO
    } else if (state.gameField[payload.cellNum]) {
      console.log('Not allowed!')
    } else if (state.gameField.length > 8) {
      state.isPlaying = false
      state.gameField = []
    }
  },
  [types.IS_WINNER]: (state) => {
    let a, b, c
    for (let i = 0; i < state.win.length; i++) {
      [a, b, c] = state.win[i]
      if (state.gameField[a] && state.gameField[a] === state.gameField[b] && state.gameField[a] === state.gameField[c]) {
        state.winner = state.gameField[a]
        state.isPlaying = false
      }
    }
  }

}
