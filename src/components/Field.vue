<template>
  <div>
    <h2 v-if="isPlaying">Ходит {{ this.isXO ? 'X' : 'O' }}</h2>
    <h1 v-if="!isPlaying" class="winner">The winner is "{{ isWiiner }}"</h1>
    <div class="game-field">
      <div v-if="showLine==1" class="line line_1"></div>
      <div v-if="showLine==3" class="line line_2"></div>
      <div v-if="showLine==6" class="line line_3"></div>
      <div v-if="showLine==4" class="line line_4"></div>
      <div v-if="showLine==7" class="line line_5"></div>
      <div v-if="showLine==6" class="line line_6"></div>
      <div v-if="showLine==5" class="line line_7"></div>
      <div v-if="showLine==2" class="line line_8"></div>
      <game-cell
        v-for="index in 9"
        :key="index"
        :cellNumber="index"
      />
    </div>
  </div>
</template>

<script>
import Cell from './Cell'
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
      hasWinner: false,
      line: {
        fst: false
      }
    }
  },
  components: {
    'game-cell': Cell
  },
  computed: {
    showLine () {
      this.line.fst = this.winnerLine
      return this.line.fst
    },
    ...mapGetters([
      'isXO',
      'isPlaying',
      'isWiiner',
      'winnerLine'
    ])
  }
}
</script>

<style scoped>
</style>
