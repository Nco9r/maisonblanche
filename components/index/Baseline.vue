<template>
  <section class="baseline">
    <div class="container_baseline">
      <h3>Rhum</h3>
      <p>•</p>
      <h3>Pizzà</h3>
      <p>•</p>
      <h3>isabella</h3>
      <p>•</p>
      <h3>cocktails</h3>
      <p>•</p>
      <h3>tapas</h3>
      <p>•</p>
      <h3>Rhum</h3>
      <p>•</p>
      <h3>Pizzà</h3>
      <p>•</p>
      <h3>isabella</h3>
      <p>•</p>
      <h3>cocktails</h3>
      <p>•</p>
      <h3>tapas</h3>
      <p>•</p>
      <h3>isabella</h3>
    </div>
     <div class="container_baseline_1">
      <h3>Rhum</h3>
      <p>•</p>
      <h3>Mojito</h3>
      <p>•</p>
      <h3>pétanque</h3>
      <p>•</p>
      <h3>cocktails</h3>
      <p>•</p>
      <h3>tapas</h3>
      <p>•</p>
      <h3>Rhum</h3>
      <p>•</p>
      <h3>Pizzà</h3>
      <p>•</p>
      <h3>isabella</h3>
      <p>•</p>
      <h3>cocktails</h3>
      <p>•</p>
      <h3>tapas</h3>
      <p>•</p>
      <h3>isabella</h3>
       <p>•</p>
      <h3>Rhum</h3>
      <p>•</p>
      <h3>Pizzà</h3>
      <p>•</p>
      <h3>isabella</h3>
      <p>•</p>
      <h3>cocktails</h3>
      <p>•</p>
      <h3>tapas</h3>
      <p>•</p>
      <h3>isabella</h3>
    </div>
       <div class="container_baseline">
      <h3>cocktails</h3>
      <p>•</p>
      <h3>tapas</h3>
      <p>•</p>
      <h3>Rhum</h3>
      <p>•</p>
      <h3>Pizzà</h3>
      <p>•</p>
      <h3>isabella</h3>
      <p>•</p>
      <h3>Rhum</h3>
      <p>•</p>
      <h3>Pizzà</h3>
      <p>•</p>
      <h3>isabella</h3>
      <p>•</p>
      
      <p>•</p>
      <h3>cocktails</h3>
      <p>•</p>
      <h3>tapas</h3>
      <p>•</p>
      <h3>isabella</h3>
    </div>
    
  </section>
</template>

<script>

import { gsap } from 'gsap'
import  { ScrollTrigger }  from "gsap/dist/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)

export default {
   mounted() {
        gsap.to(".container_baseline", {
            scrollTrigger: {
                trigger: ".container_baseline",
                start: "0% 100%",
                end: "top",
                scrub: true,
                toggleActions: "restart pause reverse pause"
            },
            x: 150,
        }),
        gsap.to(".container_baseline_1", {
            scrollTrigger: {
                trigger: ".container_baseline_1",
                start: "0% 100%",
                end: "top",
                scrub: true,
                toggleActions: "restart pause reverse pause"
            },
            x: -150,
        })
    }, 
}
</script>

<style scoped>
.baseline {
  margin: -20px 0 -50px 0;
}

.container_baseline {
  display: flex;
  flex-flow: row nowrap;
  overflow-x: hidden !important;
  align-items: center;
  margin-left: -150px;
}
.container_baseline h3 {
  display: flex;
  flex-flow: row nowrap;
  margin-right: 10px;
  margin-left: 10px;
   font-family: 'Roboto Condensed', sans-serif;
  color: var(--green);
  align-items: center;
  font-style: italic;
  font-size: 44px;
}

.container_baseline p {
  font-size: 32px;
}

.container_baseline_1 {
  display: flex;
  flex-flow: row nowrap;
  overflow-x: hidden !important;
  align-items: center;
  margin-right: -200px;
}
.container_baseline_1 h3 {
  display: flex;
  flex-flow: row nowrap;
  margin-right: 10px;
  margin-left: 10px;
   font-family: 'Roboto Condensed', sans-serif;
 -webkit-text-stroke: .5px  var(--redBody);
  align-items: center;
  color: transparent;
  font-style: italic;
  font-size: 44px;
}

.container_baseline_1 p {
  font-size: 32px;
}

@media screen and (min-width: 1024px) {
  .container_baseline h3 {
    font-size: 64px;
  }

  .container_baseline_1 h3 {
    font-size: 64px;
  }
}
</style>
