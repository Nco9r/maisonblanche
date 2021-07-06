<template>
  <section class="pictures">
    
        <img class="first" src="~assets/img/jpg/food_2.jpg" alt="" />
        <img class="second_p" src="~assets/img/jpg/food_1.jpg" alt="" />
        <img src="~assets/img/jpg/restaurant_terasse.jpg" alt="" />
   
  
      

  </section>
</template>

<script>

import { gsap } from 'gsap'
import  { ScrollTrigger }  from "gsap/dist/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)
export default {
   mounted() {
        gsap.to(".first", {
            scrollTrigger: {
                trigger: ".first",
                start: "0% 100%",
                end: "top",
                scrub: true,
                toggleActions: "restart pause reverse pause"
            },
            x: -80,
            y: 80,
        }),
        gsap.to(".second_p", {
            scrollTrigger: {
                trigger: ".second_p",
                start: "0% 100%",
                end: "top",
                scrub: true,
                toggleActions: "restart pause reverse pause"
            },
            x: 80,
            y: -80,
        })
    }, 
}
</script>

<style scoped>
.pictures {
  max-width: 100%;
  height: 500px;
  margin-bottom: 50px;
  position: relative;
  overflow: hidden;
  margin: auto;
  display: flex; 
  justify-content: center; 
  align-items: center;
}

.pictures img {
  width: 250px;
  height: 250px;
  border: 1px solid var(--redBody);
  padding: 10px;
  object-fit: cover;

}

.pictures img:nth-child(1) {
  width: 160px;
  height: 197px;
  position: absolute;
  object-fit: cover;
  bottom: 100px;
  left: 30px;
}

.pictures img:nth-child(2) {
  width: 160px;
  height: 197px;
  position: absolute;
  object-fit: cover;
  top: 100px;
  right: 60px;
}



.box {
  background-image: url('~assets/img/svg/box.svg');
  background-repeat: no-repeat;
  background-position: calc(100% - 0.5rem) calc(100% - 0.5rem);
  background-size: 3rem;
  margin: auto;
  padding: 3rem;
  height: 300px;
  margin-top: 70px;
  position: relative;
  text-align: center;
  max-width: 330px;
}

.box::before {
  background-image: url('~assets/img/svg/box.svg');
  background-repeat: no-repeat;
  background-position: calc(100% - 0.5rem) calc(100% - 0.5rem);
  background-size: 3rem;
  border: 1px solid rgb(134, 32, 65);
  content: '';
  display: block;
  height: 100%;
  left: 0px;
  position: absolute;
  top: 0px;
  transform: rotate(180deg);
  width: 100%;
  z-index: 3;
}

@media screen and (min-width: 1024px) {
  .pictures {
    max-width: 1200px;
    margin: 0 auto 300px auto;
    height: 700px;
  
  }

  .pictures img {
  width: 450px;
  height: 450px;
  border: 1px solid var(--redBody);
  padding: 10px;
  object-fit: cover;

}

.pictures img:nth-child(1) {
  width:360px;
  height: 397px;
  position: absolute;
  object-fit: cover;
  bottom: 100px;
  left: 190px;
}

.pictures img:nth-child(2) {
  width: 360px;
  height: 397px;
  position: absolute;
  object-fit: cover;
  top: 100px;
  right: 200px;
}
  
}
</style>
