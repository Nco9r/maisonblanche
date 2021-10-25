<template>
  <main>
    <hero/>
    <intro/>
    <Pictures/>
    <bar/>
    <baseline/>
    <carousel/>
    <newsletter/>
  </main>
</template>

<script>
import Hero from '../components/index/Hero'
import Intro from '../components/index/Intro'
import Pictures from '../components/index/Pictures'
import Bar from '../components/index/Bar'
import Baseline from '../components/index/Baseline'
import Newsletter from '../components/default/Newsletter'
import Carousel from '../components/index/Carousel'

export default {
  components: {
    Hero,
    Intro,
    Pictures,
    Bar,
    Baseline,
    Carousel,
    Newsletter

  }
}
</script>

<style scoped>

main {
  overflow-x: hidden;
}



</style>
