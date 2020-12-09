<template>
  <div>
    <the-title />
    <the-content />
    <the-links />
  </div>
</template>

<script>
import TheTitle from '../src/components/TheTitle';
import TheContent from '../src/components/TheContent';
import TheLinks from '../src/components/TheLinks';

export default {
  name: 'App',
  components: {
    TheTitle,
    TheContent,
    TheLinks
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Spartan&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;600;700&display=swap');

@import 'styles/_globals.scss';

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

p {
  font-family: 'Spartan','Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}

a {
  font-family: 'Courier New', Courier, monospace;
}

</style>
