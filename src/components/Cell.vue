<template>
  <div class="">
    <button class="cell"
      @click="setXO"
    >
      {{ isitXO }}
    </button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  props: {
    cellNumber: Number
  },
  data: () => ({
    payload: {
      cellNum: '',
      xorO: ''
    },
    draw: ''
  }),
  computed: {
    isitXO () {
      return this.draw
    },
    ...mapGetters([
      'isXO',
      'isPlaying',
      'getGameField'
    ])
  },
  methods: {
    ...mapActions([
      'drawXO',
      'isWinner'
    ]),
    setXO () {
      if (this.isPlaying && !this.getGameField[this.cellNumber - 1]) {
        this.payload.cellNum = this.cellNumber - 1
        this.draw = this.isXO ? 'X' : 'O'
        this.drawXO(this.payload)
      }
    }
  },
}
</script>

<style scoped>

</style>
