<template>
  <div class="game-field">
      <game-cell
        v-for="index in 9"
        :key="index"
        :cellNumber="index"
      />
  </div>
</template>

<script>
import Cell from './Cell'
export default {
  data () {
    return {
    }
  },
  components: {
    'game-cell': Cell
  }
}
</script>

<style scoped>
</style>
