<template>
  <div>
    <h2 v-if="isPlaying">Ходит {{ this.isXO ? 'X' : 'O' }}</h2>
    <h1 v-if="!isPlaying" class="winner">The winner is "{{ isWiiner }}"</h1>
    <div class="game-field">
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
      hasWinner: false
    }
  },
  components: {
    'game-cell': Cell
  },
  computed: {
    ...mapGetters([
      'isXO',
      'isPlaying',
      'isWiiner'
    ])
  }
}
</script>

<style scoped>
</style>
