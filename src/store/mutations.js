import * as types from './mutation-types'

export const mutations = {
  [types.DRAW_XO]: (state, payload) => {
    if (state.gameField.length < 9 || state.isPlaying) {
      state.gameField.splice(payload.cellNum, 1, payload.XorO)
      state.isXO = !state.isXO
    } else {
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
        alert('enough... Winner is ' + state.winner)
      }
    }
  }

}
