<template>
  <section class="hero">
    <div class="container_hero">
      <div class="logo">
        <img src="~assets/img/svg/52.svg" alt="" />
      </div>
      <div class="slogan">
        <h1>
          Bar <br />
          Restaurant <br />
          Pizzeria <br>
          Pyla sur Mer
        </h1>
      </div>
      <div class="img_food">
        <img class="mobile" src="~assets/img/jpg/hero.jpg" alt="" />
        <img class="second " src="~assets/img/jpg/plats_1.jpg" alt="" />
        <img
          class="desktop"
          src="~assets/img/jpg/terrasse.jpeg"
          alt=""
        />
      </div>
    </div>
  </section>
</template>

<script>

import { gsap } from 'gsap'
import  { ScrollTrigger }  from "gsap/dist/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)
export default {
  mounted() {
        gsap.to(".mobile", {
            scrollTrigger: {
                trigger: ".mobile",
                start: "100% 100%",
                end: "top",
                scrub: true,
                toggleActions: "restart pause reverse pause"
            },
            y: 150,
        }),
        gsap.to(".second", {
            scrollTrigger: {
                trigger: ".second",
                start: "100% 100%",
                end: "top",
                scrub: true,
                toggleActions: "restart pause reverse pause"
            },
            y: 50,
        })
    }, 
}
</script>

<style scoped>
.container_hero {
  margin: 20px auto 50px auto;
}

.container_hero .logo img {
  width: 90%;
  margin: auto;
  display: flex;
}

.slogan h1 {
  font-size: 13px;
  line-height: 22px;
  letter-spacing: 6px;
  color: var(--body);
  display: flex;
  font-weight: lighter;
  justify-content: flex-end;
  margin-right: 17px;
  margin-top: -40px;
}

.img_food {
  display: flex;
  position: relative;
}

.img_food img {
  width: 45%;
  height: 300px;
  margin-right: 20px;
  object-fit: cover;
}

.desktop  {
  display: none !important;
}

.img_food img:nth-child(1) {
  margin-top: -200px;
}

.img_food img:nth-child(2) {
  margin-top: 10px;
  position: absolute;
  top: 10px;
  right: 0;
}

.img_food img:nth-child(3) {
  display: none;
}

@media screen and (min-width: 768px) {
  .container_hero {
    max-width: 700px;
    margin: 100px auto;
  }
  .container_hero .logo img {
    width: 70%;
  }

  .slogan h1 {
    font-size: 12px;
    line-height: 20px;
    letter-spacing: 8px;
    color: var(--green);
    display: flex;
    justify-content: flex-end;
    margin-right: 17px;
    margin-top: 10px;
  }

  .img_food img {
    width: 35%;
  }

  .img_food img:nth-child(2) {
    margin-top: 10px;
    position: absolute;
    top: 10px;
    right: 65px;
  }

  .slogan h1 {
    justify-content: center;
    margin-left: 290px;
    font-size: 24px;
    line-height: 36px;
  }
}

@media screen and (min-width: 768px) {
  .container_hero .logo img {
    width: 50%;
  }

  .slogan h1 {
    justify-content: center;
    margin-left: 290px;
    font-size: 24px;
    line-height: 36px;
  }
}

@media screen and (min-width: 1024px) {
  .container_hero {
    max-width: 1100px;
    margin: 50px auto;
  }
  .container_hero .logo img {
    width: 40%;
  }

  .slogan h1 {
    justify-content: center;
    font-size: 16px;
    line-height: 28px;
    color: var(--body)
  }

  .img_food img {
    width: 50%;
  }

  .mobile {
    display: none;
  }

  .img_food img:nth-child(3) {
    position: absolute;
    top: -215px;
    display: flex!important;
  }

  .img_food img:nth-child(2) {
    position: absolute;
    top: -450px;
    right: 0;
    width: 25%;
  }
}
</style>
