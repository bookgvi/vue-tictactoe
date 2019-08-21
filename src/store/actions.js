import * as types from './mutation-types'

export const actions = {
  drawXO: (context, payload) => {
    context.commit(types.IS_WINNER)
    context.commit(types.DRAW_XO, payload)
  },
  isWinner: ({commit}) => commit(types.IS_WINNER),
  restart: ({commit}) => commit(types.NEW_GAME)
}
