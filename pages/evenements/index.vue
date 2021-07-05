<template>
  <main>
    <section class="evenements">
      <div class="container_img_evenements">
        <img src="~assets/img/jpg/mb.jpg" alt="" />
      </div>
      <div class="container_evenements">
        <div class="title_generate">
          <hr class="trait" />
          <hr class="rond" />
          <span class="subhead">agenda</span>
          <h2>
            Retrouvez tous nos
            <span class="italic_title">événements</span>
          </h2>
          <div class="block_right">
            <p>
              Concerts, dj set ou encore cours de Salsa, venez trouver
              l’ambiance qui vous plaira! Programmation et informations à venir
              sur nos réseaux sociaux…
            </p>
          </div>
        </div>
      </div>
      <div
        class="evenements_cards"
        v-for="evenement in evenements"
        :key="evenement.id"
      >
        <p v-if="evenements > 1">Il n'y a aucun événements à venir</p>
        <div class="evenement">
          <div class="date">
            <p>{{ evenement.date }}</p>
          </div>
          <div class="img">
            <img :src="evenement.imgUrl" alt="" />
          </div>
          <div class="content">
          <div class="content-title">
            <h2>{{ evenement.title }}</h2>
          </div>
          <div class="content_evenements">
            <p>{{ evenement.description }}</p>
          </div>
          </div>
        </div>
      </div>
    </section>
    <newsletter />
  </main>
</template>

<script>
import Newsletter from '../../components/default/Newsletter'

export default {
  async asyncData({ $strapi }) {
    const evenements = await $strapi.$evenements.find()
    return { evenements }
  },
  components: {
    Newsletter
  },
  data() {
    return {
      api_Url: 'http://localhost:1337'
    }
  }
}
</script>

<style scoped>
.evenements {
  margin: 100px 10px;
}
.title_generate {
  text-align: center;
  margin-top: 30px;
  margin-bottom: -70Px;
}
.trait {
  width: 1px;
  height: 50px;
  margin: auto;
  background-color: var(--redBody);
  border: none;
  margin: auto;
  margin-bottom: 10px;
}

.rond {
  width: 10px;
  margin: auto;
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
  margin-top: 15px;
}

.block_right p {
  margin-bottom: 10px;
  line-height: 24px;
  color: var(--body);
  padding: 0 30px;
  font-size: 14px;
}

.evenements_cards {
  margin-top: 100px;
}

.evenement {
  padding: 15px;
}

.evenement .date p{
  background-color: var(--green);
  padding: 12px 24px; 
  color: var(--white);
  margin: auto;
  width: 150px;
  text-align: center;
  z-index: 1;
}

.evenement .img img {
  width: 100%;
  height: 250px;
  object-fit: cover;
}
.title img {
  width: 100%;
}

.container_img_evenements {
  margin-top: 110px;
}

.container_img_evenements img {
  width: 100%;
  background-color: var(--green);
}

.content {
  background-color: var(--white);
  z-index: 10px;
  padding: 10px;
}

.content-title h2 {
  font-size: 20px;
  margin-bottom: 10px;
}
</style>
