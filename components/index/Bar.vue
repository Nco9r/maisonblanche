<template>
  <section class="bar">
    <div class="container_bar">
      <div class="block_right">
        <div class="title_generate">
          <hr class="trait" />
          <hr class="rond" />
          <span class="subhead">bar</span>
          <h2 data-aos="fade-in" data-aos-duration="2000" >
            un
            <span class="italic_title">bar</span> à rhum et cocktails
          </h2>
        </div>

        <p data-aos="fade-in" data-aos-duration="2000" >
          Venez découvrir les saveurs de <strong>nos rhums</strong> et ainsi vous offrir un
          <strong>voyage gustatif</strong>, des Caraibes au Fidji, en passant par Madagascar.
          Vous pourrez y trouver également nos préparations <strong>affinées de rhums
          arrangés</strong>.
        </p>
        <p data-aos="fade-in" data-aos-duration="2000" >
            L’espace <strong>bar extérieur</strong> et le <strong>terrain de pétanque</strong> vous permettra
            de siroter un <strong>cocktail</strong> et de se <strong>divertir</strong>, en après-midi
            comme en soirée.
          </p>

        <nuxt-link to="/menu/rhum"><div class="cta_bar">
          <div class="round">
            <img src="~assets/img/svg/arrow_mb.svg" alt="" />
          </div>
          <div class="content_cta">
            <p>carte</p>
          </div>
        </div>
        </nuxt-link>
      </div>
      <div class="content_bar">
        <div class="block_left">
          <img src="~assets/img/svg/coin_round.svg" alt="" />
          <img src="~assets/img/jpg/bar_mb.jpg" alt="" />
          <img src="~assets/img/svg/coin_round.svg" alt="" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style scoped>

strong {
  color: #202020;
}

.bar {
  margin: 0px 20px 100px 20px;
}
.trait {
  width: 1px;
  height: 50px;
  background-color: var(--redBody);
  border: none;
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

.title_generate {
  text-align: left; 
}

.title_generate h2 {
  margin-top: 10px;
  line-height: 32px;
  font-size: 24px;
}

.title_generate p {
  margin-top: 10px;
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
  margin-top: 15px;
  font-size: 14px;
  text-align: left;
  color: var(--body);
}

a {
  text-decoration: none;
}

.cta_bar {
  display: flex;
  flex-flow: row;
  align-items: center;
}

.cta_bar .round {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: var(--redBody);
  position: relative;
  margin-bottom: 20px;
  margin-top: 20px;
  cursor: pointer;
  display: flex; 
  justify-content: center; 
  align-items: center; 
  transition: all 0.3s;
}

.cta_bar .round:hover {
  background-color: var(--green);
}

.cta_bar .round img {

 
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
  .container_bar {
    display: flex;
    flex-flow: row-reverse wrap;
    justify-content: space-between;
    align-items: flex-start;
  }

  .bar {
    max-width: 1200px; 
    margin: 150px auto;
  }

  .title_generate {
    text-align: left;
  }

  .block_right {
    width: 600px;
  }

  .title_generate h2 {

  line-height: 62px;
  font-size: 42px; 
  margin: 20px auto; 
}

.block_right p {
  margin-top: 10px;
  width: 400px;
}

.italic_title {
  font-size: 56px;
}

.block_left img {
  width: 90%;
  display: flex;
  margin: auto;
}

.block_left img:nth-child(1) {
  position: absolute;
  right: 0px;
  top: -25px;
  width: 70px;
}

.block_left img:nth-child(3) {
  position: absolute;
  left: 0px;
  bottom: -25px;
  transform: rotate(180deg);
  width: 70px;
}
}
</style>
