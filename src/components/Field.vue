<template>
  <div>
    <transition name="fade">
    <h2 v-if="isPlaying" class="title">Ходит {{ this.isXO ? 'X' : 'O' }}</h2>
    </transition>
    <transition name="fade">
      <h2 v-if="!isPlaying" class="title winner">The winner is... "{{ isWiiner }}"</h2>
    </transition>
    <button @click="resetGame" class="new-game">Restart New Game</button>

    <div class="game-field">
      <transition name="fade">
        <div v-if="showLine==1" class="line line_1"></div>
        <div v-if="showLine==3" class="line line_2"></div>
        <div v-if="showLine==6" class="line line_3"></div>
        <div v-if="showLine==4" class="line line_4"></div>
        <div v-if="showLine==7" class="line line_5"></div>
        <div v-if="showLine==8" class="line line_6"></div>
        <div v-if="showLine==5" class="line line_7"></div>
        <div v-if="showLine==2" class="line line_8"></div>
      </transition>

      <game-cell
        v-for="index in getGameField.length"
        :key="index"
        :cellNumber="index"
        v-if="isReset"
      />
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import Cell from './Cell'
import { mapGetters, mapActions } from 'vuex'
export default {
  data () {
    return {
      isReset: true,
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
      'winnerLine',
      'getGameField'
    ])
  },
  methods: {
    ...mapActions([
      'restart'
    ]),
    resetGame () {
      this.isReset = false
      this.restart()
      this.$nextTick(() => {
        this.isReset = true
      })
    }
  }
}
</script>

<style scoped>
  .fade-enter-active {
    transition: opacity .8s;
  }
  .fade-enter, fade-leave-to {
    opacity: 0;
  }
</style>
