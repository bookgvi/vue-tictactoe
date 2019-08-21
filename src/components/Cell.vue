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
      'isPlaying'
    ])
  },
  methods: {
    ...mapActions([
      'drawXO',
      'isWinner'
    ]),
    setXO () {
      if (this.isPlaying) {
        this.draw = this.isXO ? 'x' : 'o'
        this.payload.cellNum = this.cellNumber - 1
        this.payload.XorO = this.isitXO
        this.drawXO(this.payload)
      } else {
        console.log('Game over...')
      }
    }
  },
  beforeUpdate () {
    this.isWinner()
  }
}
</script>

<style scoped>

</style>
