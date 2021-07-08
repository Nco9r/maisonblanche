<template>
  <section class="carousel_section">
    <div class="container_carousel">
      <div class="title_generate">
        <hr class="trait" />
        <hr class="rond" />
        <span class="subhead">Cadre</span>
        <h2 data-aos="fade-in" data-aos-duration="2000">
          Le restaurant sous son
          <span class="italic_title">plus beau</span> jour
        </h2>
        <div class="block_right">
          <p data-aos="fade-in" data-aos-duration="2000">
            Située à deux pas de la <strong>Dune du Pilat</strong>, la Maison
            Blanche vous propose une <strong>escapade</strong> au coeur des pins
            et à <strong>proximité de l’océan</strong>. Notre terrasse en bois
            vous plongera dans un cadre <strong>chaleureux</strong> et
            <strong>ensoleillé</strong>.
          </p>
          <p data-aos="fade-in" data-aos-duration="2000">
            Lors des soirées d’été, notre
            <strong>programmation musicale</strong> vous offrira un moment plus
            <strong>festif et dansant</strong>. Toute l’équipe à hâte de vous
            <strong>accueillir</strong>, pensez à réserver!
          </p>
        </div>
        <div class="block_slide">
          <div class="slide">
            <div class="prev" @click="prev">
              <img src="~assets/img/svg/arrow_carousel.svg" alt="" />
            </div>
            <div class="next" @click="next">
              <img src="~assets/img/svg/arrow_carousel.svg" alt="" />
            </div>
          </div>
          <div class="cta_events">
            <nuxt-link to="/evenements"> Événements</nuxt-link>
          </div>
        </div>
      </div>
    </div>
    <VueSlickCarousel v-bind="slickOptions" ref="carousel" class="carousel">
      <div class="block_img">
        <img src="~assets/img/jpg/cocktails.jpeg" alt="" />
      </div>
      <div class="block_img">
        <img src="~assets/img/jpg/pizza_1.jpeg" alt="" />
      </div>
      <div class="block_img">
        <img src="~assets/img/jpg/tipunch.jpeg" alt="" />
      </div>
      <div class="block_img">
        <img src="~assets/img/jpg/terrasse.jpeg" alt="" />
      </div>
    </VueSlickCarousel>
  </section>
</template>

<script>
export default {
  data() {
    return {
      slickOptions: {
        dots: false,
        arrows: false,
        dotsClass: 'slick-dots custom-dot-class',
        edgeFriction: 0,
        infinite: true,
        speed: 700,
        draggable: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        touchThreshold: 5,
        centerPadding: '240px'
      }
    }
  },
  methods: {
    next() {
      this.$refs.carousel.next()
    },
    prev() {
      this.$refs.carousel.prev()
    }
  }
}
</script>

<style scoped>
strong {
  color: #202020;
}

.carousel_section {
  margin: 90px -10px 0px -10px;
}

.slick_slide {
  margin-right: 10px;
}
.title_generate {
  text-align: center;
  padding: 0 30px;
}

.trait {
  width: 1px;
  height: 50px;
  background-color: var(--redBody);
  border: none;
  margin: auto;
  display: flex;
  margin-bottom: 10px;
}

.rond {
  width: 10px;
  height: 10px;
  margin: auto;

  border-radius: 50%;
  background-color: var(--green);
  border: none;
  margin-bottom: 10px;
}

.subhead {
  text-transform: uppercase;
  font-size: 12px;
}

.title_generate h2 {
  margin-top: 10px;
  line-height: 32px;
  font-size: 24px;
}

.italic_title {
  font-family: 'italic-title', sans-serif;
  text-transform: lowercase;
  font-size: 35px;
  color: var(--green);
  font-weight: 500;
}

.block_img {
  display: inline-block;
  margin-right: 20px !important;
}

.slick-slider .slick-slide .block_img {
  padding: 0 10px;
}

.block_img img {
  width: 100%;
  height: 300px;
  object-fit: cover;
}

.block_img .text p {
  font-size: 14px;
  color: var(--body);
  margin-top: 10px;
  font-style: italic;
  font-weight: bold;
  display: flex;
  justify-content: flex-end;
  flex-flow: row;
}

.block_img .text {
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  color: var(--body);
}

.block_img .text span {
  width: 100%;
  margin: 0 5px;
  border-bottom: 1px dotted var(--black);
}

.block_right {
  margin-top: 40px;
}

.block_right p {
  margin-bottom: 10px;
  text-align: center;
  line-height: 24px;
  font-size: 14px;
  color: var(--body);
}

.block_slide {
  margin-top: 30px;
  margin-bottom: 30px;
  display: flex;
  flex-flow: row-reverse wrap;
  justify-content: space-between;
  align-items: center;
}

.cta_events a {
  background-color: var(--redBody);
  color: var(--white);
  padding: 12px 24px;
  text-decoration: none;
  font-size: 14px;
  font-family: 'Arimo', sans-serif;
  font-weight: bold;
}

.slick-slide {
  margin: 0 10px !important;
}

.slide {
  display: flex;
  margin-right: 20px;
  justify-content: flex-end;
}

.block_slide .prev {
  width: 40px;
  margin-right: 10px;
  height: 40px;
  border: 1px solid var(--redBody);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: rotate(180deg);
}

.block_slide .next {
  width: 40px;
  height: 40px;
  border: 1px solid var(--redBody);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}

@media screen and (min-width: 1024px) {
  .carousel_section {
    max-width: 1000px;
    margin: 150px auto;
  }

  .title_generate {
    text-align: center;
  width: 1000px;
  margin: auto;
    background-color: var(--background);
  }

  .block_right p {
    width: 700px;
    text-align: center;
    margin: 20px auto;
  }

  .title_generate h2 {
    line-height: 72px;
    font-size: 52px;
    margin: 20px auto;
  }

  .italic_title {
    font-size: 56px;
  }

  .block_img {
    display: block;
    padding-right: 20px;
  }

  .block_img img {
    width: 100%;
    display: block;
  }
}
</style>
