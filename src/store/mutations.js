import * as types from './mutation-types'

export const mutations = {
  [types.DRAW_XO]: (state, payload) => {
    console.log(state.gameField.length)
    if (state.gameField.length <= 9) {
      state.gameField[payload.cellNum] = payload.XorO
      state.isXO = !state.isXO
    } else {
      console.log('enough...')
      state.isPlaying = false
      state.gameField = []
    }
  }
}
