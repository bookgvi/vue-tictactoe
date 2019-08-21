import * as types from './mutation-types'

export const actions = {
  drawXO: (context, payload) => {
    context.commit(types.DRAW_XO, payload)
  }
}
