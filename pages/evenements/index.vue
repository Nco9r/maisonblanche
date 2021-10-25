<template>
  <main>
    <section class="evenements">
      <div class="container_evenements">
        <div class="title_generate">
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
        <hr />
        <div class="number_evenement">
          <p>
            Il y <span>{{ evenements.length }}</span> événements à venir à la
            Maison Blanche.
          </p>
          <p v-if="evenements.length === 0">
            Il n'y a aucun événements à venir à la Maison Blanche.
          </p>
        </div>
        <hr />
      </div>
      <div class="box_cards">
        <div
          class="evenements_cards"
          v-for="evenement in evenements"
          :key="evenement.id"
        >
          <div class="evenement">
            <div class="img">
              <img :src="evenement.imgUrl" alt="" />
            </div>
            <div class="content">
              <div class="content-title">
                <h2>{{ evenement.title }}</h2>
                <p>{{ evenement.date }}</p>
              </div>
              <div class="content_evenements">
                <p>{{ evenement.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <newsletter />
  </main>
</template>

<script>
import Newsletter from "../../components/default/Newsletter";

export default {
  async asyncData({ $strapi }) {
    const evenements = await $strapi.$evenements.find();
    return { evenements };
  },

  components: {
    Newsletter
  },
  data() {
    return {
      api_Url: "https://api.rouxnicolas.fr/"
    };
  }
};
</script>

<style scoped>
span {
  color: var(--redBody);
  font-weight: bold;
}
.evenements {
  margin: 110px 20px 50px 20px;
}
.title_generate {
  margin-top: 30px;
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

.title_generate h2 {
  margin-top: 10px;
  line-height: 32px;
  font-size: 24px;
}

.italic_title {
  font-family: "italic-title", sans-serif;
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
  font-size: 14px;
}

.evenements_cards {
  margin-top: 20px;
  margin-bottom: 20px;
  box-shadow: 2px 2px 8px rgb(241, 241, 241);
}

.evenement .date p {
  color: var(--black);
  margin: auto;
  z-index: 1;
  margin-bottom: 5px;
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
  margin-top: 0px;
}

.container_img_evenements img {
  width: 100%;
  background-color: var(--green);
}

.content {
  z-index: 10px;
  padding: 10px 0;
}

.content-title {
  display: flex;
  padding: 10px;
  margin-bottom: 10px;
  flex-flow: row;
  align-items: center;
  justify-content: space-between;
}

.content-title h2 {
  font-size: 20px;
  text-transform: none;
}

.content_evenements {
  padding: 0 10px 10px 10px;
}

hr {
  width: 100%;
  height: 1px;
  border: none;
  background-color: rgb(221, 221, 221);
  margin: 20px 0;
}
.number_evenement p {
  color: var(--black);
}

@media screen and (min-width: 1024px) {
  .evenements {
    max-width: 900px;
    margin: 150px auto;
  }
  .box_cards {
    display: flex;
    flex-flow: row;
    justify-content: space-between;
  }

  .evenements_cards {
    width: 47%;
  }
}

@media screen and (min-width: 1200px) {
  .evenements {
    max-width: 1100px;
    margin: 150px auto;
  }

  .title_generate h2 {
    font-size: 42px;
    width: 500px;
    line-height: 56px;
  }
  .italic_title {
    font-family: "italic-title", sans-serif;
    text-transform: lowercase;
    font-size: 54px;
    color: var(--green);
    font-weight: 500;
  }

  .box_cards {
    display: flex;
    flex-flow: row;
    justify-content: space-between;
  }

  .evenement .img img {
    height: 400px;
  }

  .evenements_cards {
    width: 47%;
  }
}

@media screen and (min-width: 1600px) {
  .evenements {
    max-width: 1500px;
    margin: 150px auto;
  }
  .box_cards {
    display: flex;
    justify-content: space-between;
    flex-flow: row;
  }

  .evenements_cards {
    width: 45%;
  }
}
</style>
