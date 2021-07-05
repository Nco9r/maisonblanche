<template>
  <section class="intro">
    <div class="container_intro">
      <div class="title_generate">
        <hr class="trait" />
        <hr class="rond" />
        <span class="subhead">Restaurant</span>
      
        <h2 data-aos="fade-up" data-aos-duration="2000" >
          une cuisine traditionnelle dans
          <span class="italic_title">un cadre</span> à ciel ouvert
        </h2>
      </div>
      <div class="content_intro">
        <div class="block_right" >
          <p data-aos="fade-up" data-aos-duration="2000" >
            Le restaurant vous invite à voyager au coeur d’une cuisine inspirée
            de la <strong>trattoria traditionnelle</strong>. Nous présentons une cuisine
            authentique, <strong>généreuse</strong> et dans le respect des <strong>arrivages de saison</strong>.
          </p>
          <p data-aos="fade-up" data-aos-duration="2000"  >
            En effet, nous avons fait le choix de travailler des <strong>produits</strong>
            provenant <strong>d’Italie</strong> ainsi qu’une sélection plus locale avec la <strong>viande</strong>
            (côte de cochon AOP) et les <strong>charcuteries AOP</strong> de chez <strong>Pierre Oteiza</strong>.
            Au coeur de la vallée des Aldudes, Pierre Oteiza éleveur, producteur
            et artisan charcutier a développé son savoir-faire afin de produire
            <strong>la meilleure viande</strong> possible.
          </p>
          <p data-aos="fade-up" data-aos-duration="2000">
            Vous retrouvez la <strong>qualité</strong> de ces produits sur <strong>nos pizzas</strong> dont la
            pâte est pétrie <strong>chaque matin</strong> par nos pizzaiolos. Venez découvrir le
            <strong>vrai fait maison</strong>.
          </p>
          <div class="cta_intro">
            <div class="round">
              <img src="~assets/img/svg/arrow_mb.svg" alt="" />
            </div>
            <div class="content_cta">
              <p>Menu</p>
            </div>
          </div>
        </div>
        <div class="block_left">
          <img src="~assets/img/svg/coin_round.svg" alt="" />
          <img src="~assets/img/jpg/mb.jpg" alt="" />
          <img src="~assets/img/svg/coin_round.svg" alt="" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import aosMixin from '~/mixins/aos'


export default {
  mixins: [aosMixin]
}
</script>

<style scoped>

strong {
  color: #202020;
}
.intro {
  margin: 200px 10px 100px 10px;
}

.trait {
  width: 1px;
  height: 50px;
  background-color: var(--redBody);
  border: none;
  margin-left: 5px;
  margin-bottom: 10px;
}

.rond {
  width: 10px;
  height: 10px;
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

.block_right {
  margin-top: 20px;
}

.block_right p {
  margin-bottom: 10px;
  line-height: 24px;
  color: var(--body);
  font-size: 14px;
}

.cta_intro {
  display: flex;
  flex-flow: row;
  align-items: center;
}

.cta_intro .round {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: var(--redBody);
  position: relative;
  margin-bottom: 20px;
  display: flex; 
  justify-content: center; 
  align-items: center;
  margin-top: 20px;
  transition: all 0.3s;
  cursor: pointer;
}

.cta_intro .round:hover {
  background-color: var(--green);
}

.cta_intro .round img {
  
  width: 13px;

}

.content_cta p {
  text-transform: uppercase;
  font-family: 'Times New Roman', Times, serif;
  color: var(--redBody);
  margin-left: 10px;
  margin-top: 10px;
  font-size: 14px;
  font-weight: bold;
}

.block_left {
  position: relative;
}

.block_left img {
  width: 90%;
  display: flex;
  margin: auto;
}

.block_left img:nth-child(1) {
  position: absolute;
  right: 0;
  top: -15px;
  width: 70px;
}

.block_left img:nth-child(3) {
  position: absolute;
  left: 0;
  bottom: -15px;
  transform: rotate(180deg);
  width: 70px;
}

@media screen and (min-width: 1024px) {
  .intro {
    max-width: 1200px; 
    margin: 200px auto;
  }

  .title_generate {
    text-align: center; 
  }

  .trait {
  margin: auto;
  }

  .rond {
  margin: 10px auto;
}

  .title_generate h2 {
  text-align: center;
  line-height: 62px;
  font-size: 42px;
  width: 900px;
  margin: 20px auto; 
}

.italic_title {
  font-size: 56px;
}

.content_intro {
  display: flex;
  margin-top: 80px;
}

.block_right {
  width: 800px;
}
.block_left img {
  transition: all .3s;
}

.block_left img:hover {
 width: 92%;
}



.block_left img:nth-child(3) {
 bottom: 20px;
}

.block_left img:nth-child(1) {
  position: absolute;
  right: 0;
  top: -30px;
  width: 70px;
}
}

@media screen and (min-width: 1300px) {
  .intro {
    max-width: 1300px;
  }

  .block_left img:nth-child(3) {
 bottom: -25px;
}
}
</style>
