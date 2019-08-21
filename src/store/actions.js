import * as types from './mutation-types'

export const actions = {
  drawXO: (context, payload) => {
    context.commit(types.DRAW_XO, payload)
    context.commit(types.IS_WINNER)
  },
  isWinner: ({commit}) => commit(types.IS_WINNER),
  restart: ({commit}) => commit(types.NEW_GAME)
}
