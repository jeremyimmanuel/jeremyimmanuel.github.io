<template>
  <div id="app">
    <the-title />
    <the-content />

    <a href="https://github.com/jeremyimmanuel">github</a>
  </div>
</template>

<script>
import TheTitle from '../src/components/TheTitle';
import TheContent from '../src/components/TheContent';
export default {
  name: 'App',
  components: {
    TheTitle,
    TheContent
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@700&display=swap');

body {
  font-family: 'Open Sans', Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #6DB1BF;
  background: #ffeaec;
  margin: 0 20%;
}

.container {
  color: white;
}

a {
  font-family: 'Courier New', Courier, monospace;
}

</style>
