<template>
  <main>
    <div class="top_bar_fixed">
      <div class="container_categorie">
      <div class="container_items">
        <div class="title">
          <p>Catégories</p>
        </div>
        <div class="items">
          <nuxt-link to="/menu/tapas">Tapas</nuxt-link>
          <nuxt-link to="/menu/plats">Plats</nuxt-link>
          <nuxt-link to="/menu/desserts">Desserts</nuxt-link>
          <nuxt-link to="/menu/boissons">Boissons</nuxt-link>
          <nuxt-link to="/menu/vins">Vins</nuxt-link>
          <nuxt-link to="/menu/rhum">Rhum</nuxt-link>
        </div>
      </div>
      </div>
    </div>
    <section class="menu">
      <div class="redBackground">
        <div class="title">
          <h2>Dolce</h2>
        </div>
      </div>
      <div class="elements_menu">
        <p class="content">Panna cotta à l'amande amère</p>
        <span></span>
        <p class="price">6.50€</p>
      </div>

      <div class="elements_menu">
        <p class="content">Suprême d'agrumes au thé vert</p>
        <span></span>
        <p class="price">6,50€</p>
      </div>
      <div class="content_menu">
        <div class="elements_menu">
          <p class="content">Tarte fine aux pommes caramélisées</p>
          <span></span>
          <p class="price">7,00€</p>
        </div>
        <p class="description">
          à la cannelle et sa boule vanille
        </p>
      </div>
      <div class="elements_menu">
        <p class="content">
          Trio de crèmes brulées vanille, chocolat, frambroise
        </p>
        <span></span>
        <p class="price">7,50€</p>
      </div>
      <div class="elements_menu">
        <p class="content">Tiramisu Oreo</p>
        <span></span>
        <p class="price">8,00€</p>
      </div>
      <div class="content_menu">
        <div class="elements_menu">
          <p class="content">
            Tiramisu café
          </p>
          <span></span>
          <p class="price">8,00€</p>
        </div>
      </div>
      <div class="content_menu">
        <div class="elements_menu">
          <p class="content">
            Coeur coulant chocolat caraïbe VALRHONA 66%
          </p>
          <span></span>
          <p class="price">8,50€</p>
        </div>
      </div>
      <div class="greenBody">
        <div class="title">
          <h2><span class="italic">Glaces Artisanales</span> Antolin</h2>
        </div>
      </div>
      <div class="content_menu">
        <p class="description_artisan">
          Maître Artisan Glacier Français, fabriquant de glace de qualité
          artisanale depuis 1916. Les recettes sont développées pour favoriser
          un produit sans arôme ni colorant. Les sorbets sont travaillés avec
          plus de 50% de fruits.
        </p>
      </div>
      <div class="content_menu">
        <div class="elements_menu">
          <p class="content">
            Parfums des crèmes glacées 
          </p>
        </div>
        <p class="description">
          Vanille, chocolat, bulgare, caramel beurre salé, rhum-raisin, marron, café, menthe-chocolat.
        </p>
      </div>
       <div class="content_menu">
        <div class="elements_menu">
          <p class="content">
            Parfums des sorbets 
          </p>
        </div>
        <p class="description">
          Fraise, framboise, cassis, citron.
        </p>
      </div>
      <div class="content_menu">
        <div class="elements_menu">
          <p class="content">
            Glace 1 boule
          </p>
          <span></span>
          <p class="price">3,90€</p>
        </div>
      </div>
      <div class="content_menu">
        <div class="elements_menu">
          <p class="content">
            Glace 2 boules
          </p>
          <span></span>
          <p class="price">4,90€</p>
        </div>
      </div>
      <div class="content_menu">
        <div class="elements_menu">
          <p class="content">
            Supplément crème fouetté
          </p>
          <span></span>
          <p class="price">1,50€</p>
        </div>
      </div>
      <div class="content_menu">
        <div class="elements_menu">
          <p class="content">
            Coupe Maison Blanche
          </p>
          <span></span>
          <p class="price">8,00€</p>
        </div>
        <p class="description">
          Glace bulgare, coque chocolat blanc, cerise amarena
        </p>
      </div>
      <div class="content_menu">
        <div class="elements_menu">
          <p class="content">
            Coupe Mont Blanc
          </p>
          <span></span>
          <p class="price">8,00€</p>
        </div>
        <p class="description">
         Glace marron, crème de marron, meringue, crème fouettée
        </p>
      </div>
      
    </section>
    <Newsletter />
  </main>
</template>

<script>
import Newsletter from '../../components/default/Newsletter'
export default {
  components: {
    Newsletter
  }
}
</script>

<style scoped>
.top_bar_fixed {
  position: fixed;
  right: 0;
  left: 0;
  top: 70px;
  height: 50px;
  background-color: var(--background);
  border-bottom: 1px solid #e0e0e0;
}

.italic {
  font-family: 'italic-title';
  font-size: 24px !important;
  color: var(--redBody);
}

.container_items {
  height: 110px;
  overflow-x: scroll;
  background-color: var(--background);
  display: flex;
  flex-flow: column nowrap;
  border-bottom: 1px solid #e0e0e0;

  padding: 40px 0px 10px 20px;
}

.title p {
  color: var(--body);
  font-weight: bold;
  font-size: 14px;
}

.items {
  display: flex;
  margin-top: 10px;
  padding-bottom: 15px;
  overflow-x: scroll;
  flex-flow: row nowrap;
}

.items a {
  margin-right: 10px;
  text-decoration: none;
  color: var(--black);
  font-weight: bold;
  font-family: 'Noto', serif;
}

.nuxt-link-active {
  color: var(--redBody) !important;
  font-weight: bold !important;
}

.item_img {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
}

.item_img img {
  width: 100%;
}

.menu {
  padding: 150px 0 30px 0;
  background-image: url('~assets/img/jpg/back_bois.png');
  background-repeat: repeat;
  background-size: 100%;
}

.redBackground {
  background-color: var(--redBody);
  padding: 20px;
  margin-top: 30px;
  border-top: 2px solid var(--black);

  margin-bottom: 20px;
  border-bottom: 2px solid var(--black);
}

.redBackground .title h2 {
  text-align: center;
  color: var(--white);
  font-size: 24px;
  font-weight: bold;
  text-transform: none;
  font-family: 'italic-title';
}

.redBackground_1 {
  background-color: var(--redBody);
  padding: 20px;
  margin-top: 30px;
  border-top: 2px solid var(--black);
  margin-bottom: 20px;
  border-bottom: 2px solid var(--black);
}

.redBackground_1 .title h2 {
  text-align: center;
  color: var(--white);
  font-size: 28px;
  font-weight: bold;
  text-transform: none;
  font-family: 'italic-title';
}

.greenBody {
  border-top: 2px solid var(--black);
  padding: 20px;
  margin-bottom: 20px;
  margin-top: 30px;
  border-bottom: 2px solid var(--black);
}

.greenBody .title h2 {
  text-align: center;
  color: var(--green);
  font-size: 32px;
  font-weight: bold;
  text-transform: none;
  font-family: 'Noto';
}

.redBody {
  border-top: 2px solid var(--black);
  padding: 20px;
  margin-bottom: 20px;
  margin-top: 30px;
  border-bottom: 2px solid var(--black);
}

.redBody .title h2 {
  text-align: center;
  color: var(--redBody);
  font-size: 32px;
  font-weight: bold;
  text-transform: none;
  font-family: 'Noto';
}

.greenBackground {
  border-top: 2px solid var(--black);
  padding: 20px;
  background-color: var(--green);
  margin-bottom: 20px;
  margin-top: 30px;
  border-bottom: 2px solid var(--black);
}

.greenBackground .title h2 {
  text-align: center;
  color: var(--white);
  font-size: 32px;
  font-weight: bold;
  text-transform: none;
  font-family: 'Noto';
}

.elements_menu {
  display: flex;
  margin: 5px 20px;
  justify-content: space-between;
  align-items: flex-end;
}

.elements_menu .content {
  width: 100%;
  color: var(--black);
  font-weight: bold;
}

.elements_menu span {
  height: 1px;
  margin-right: 10px;
  border: none;
  margin-bottom: 7px;
  background-color: var(--black);
}

.elements_menu .price {
  color: var(--black);
  font-weight: lighter;
}

.content_menu .description {
  font-size: 13px;
  font-weight: lighter;
  margin: -5px 20px 0 20px;
  line-height: 20px;
  color: var(--black);
}

.content_menu .description_artisan {
  font-size: 14px;
  font-weight: lighter;
  padding: 0px 20px 20px 20px;
  line-height: 22px;
  color: var(--body);
}

.accompagnement {
  margin: 10px 20px;
}

.accompagnement p {
  color: var(--redBody);
  font-size: lighter;
}

.accompagnement_green {
  margin: 10px 20px;
}

.accompagnement_green p {
  color: var(--green);
  font-size: lighter;
}

@media screen and (min-width: 1024px){
   .menu {
  padding: 181px 0 30px 0;
  background-image: url('~assets/img/jpg/back_bois.png');
  background-repeat: repeat;
  background-size: 20%;
}

  .container_categorie {
    background-color: var(--background)!important;
    z-index: 101;
    overflow: hidden;
  }

  .container_items {
    max-width: 700px;
    margin: auto;
    overflow: hidden;
padding-bottom: 70px;
    padding-top: 70px;


  }

  .items {
    overflow: hidden;

  }

.elements_menu {
  max-width: 700px;
  margin: auto;
}

.elements_menu .content {
  font-size: 16px;
  line-height: 32px;

}

.description_artisan {
  max-width: 740px;
  margin:10px auto;
}

.content_menu .description {
  max-width: 700px;
  margin: auto;
}
}

@media screen and (min-width: 1200px) {
  .menu {
    padding: 180px 0 30px 0;
    background-image: url("~assets/img/jpg/back_bois.png");
    background-repeat: repeat;
    background-size: 20%;
    margin-top: 1px;
  }

  .img {
    display: flex;
  }

  .img img:nth-child(1) {
    width: 420px;
    top: 220px;
    position: fixed;
    mix-blend-mode: difference;
    left: -180px;
  }

  .img img:nth-child(2) {
    width: 370px;
    top: 520px;
    position: fixed;
    mix-blend-mode: difference;
    right: -180px;
    transform: rotate(180deg);
  }

  .container_categorie {
    background-color: var(--background) !important;
    z-index: 101;
    overflow: hidden;
  }

  .container_items {
    max-width: 1100px;
    margin: auto;
    overflow: hidden;
    padding-bottom: 70px;
    padding-top: 70px;
  }

  .items {
    overflow: hidden;
  }

  .accompagnement {
    max-width: 1100px;
    margin: auto;
  }

  .accompagnement_green {
    max-width: 1100px;
    margin-top: 10px;
    margin: auto;
  }

  .elements_menu {
    max-width: 1100px;
    margin: auto;
  }

  .elements_menu .content {
    font-size: 16px;
    line-height: 32px;
  }

  .content_menu .description {
    max-width: 1100px;
    margin: auto;
  }
  .description_artisan {
  max-width: 1100px;
  margin:10px auto;
  }
}
</style>
