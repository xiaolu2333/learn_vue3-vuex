<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <AComponent/>
</template>

<script>
import AComponent from './components/AComponent.vue'

export default {
  name: 'App',
  components: {
    AComponent,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>