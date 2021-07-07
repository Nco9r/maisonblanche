<template>
  <main>
      <div class="top_bar_fixed">
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
    <section class="menu">
      <div class="redBackground">
        <div class="title">
          <h2>Tapas à partager</h2>
        </div>
      </div>
      <div class="elements_menu">
        <p class="content">Fritto misto del mar</p>
        <span></span>
        <p class="price">6.00€</p>
      </div>

      <div class="elements_menu">
        <p class="content">Accra de Morue</p>
        <span></span>
        <p class="price">7,50€</p>
      </div>
      <div class="elements_menu">
        <p class="content">Pimentos padron selon arrivage</p>
        <span></span>
        <p class="price">8,00€</p>
      </div>
      <div class="elements_menu">
        <p class="content">Fricassée de Sèches en persillade</p>
        <span></span>
        <p class="price">8,00€</p>
      </div>
      <div class="elements_menu">
        <p class="content">Frito Misto</p>
        <span></span>
        <p class="price">7,00€</p>
      </div>
      <div class="content_menu">
        <div class="elements_menu">
          <p class="content">
            Planche de charcuterie de chez Pierre Oteiza pour 2
          </p>
          <span></span>
          <p class="price">13,90€</p>
        </div>
        <p class="description">
          Jambon cru, saucisson sec, chorizo, jambon blanc, mortadelle
        </p>
      </div>
      <div class="content_menu">
        <div class="elements_menu">
          <p class="content">
            Planche de charcuterie de chez Pierre Oteiza pour 4
          </p>
          <span></span>
          <p class="price">27,80€</p>
        </div>
        <p class="description">
          Jambon cru, saucisson sec, chorizo, jambon blanc, mortadelle.
        </p>
      </div>
      <div class="greenBody">
        <div class="title">
          <h2>Antipasti</h2>
        </div>
      </div>
      <div class="content_menu">
        <div class="elements_menu">
          <p class="content">
            Gaspacho de tomate coeur de boeuf
          </p>
          <span></span>
          <p class="price">8,00€</p>
        </div>
        <p class="description">
          et sa foccacia (pain pizza)
        </p>
      </div>
      <div class="content_menu">
        <div class="elements_menu">
          <p class="content">
            L'oeuf Maison Blanche
          </p>
          <span></span>
          <p class="price">10,00€</p>
        </div>
        <p class="description">
          Oeuf poché, crémeux de chorizo doux, brioche toastée et chips de
          jambon de bayonne.
        </p>
      </div>
      <div class="content_menu">
        <div class="elements_menu">
          <p class="content">
            Rillettes de sardines
          </p>
          <span></span>
          <p class="price">8,50€</p>
        </div>
        <p class="description">
          Ortiz dans sa boîte avec ses condiments.
        </p>
      </div>
      <div class="content_menu">
        <div class="elements_menu">
          <p class="content">
            Foie gras poêlé et son chutney
          </p>
          <span></span>
          <p class="price">12,00€</p>
        </div>
        <p class="description">
          de fruits secs de saison (Abricot, raisin, figue et pignon de pin)
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

.nuxt-link-active {
  color: var(--redBody)!important;
  font-weight: bold!important;
}

.top_bar_fixed {
    position: fixed; 
    right: 0;
    left: 0;
    top: 70px;
    height: 50px;
    background-color: var(--background);
  border-bottom: 1px solid #e0e0e0;

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
  /* background-image: url('~assets/img/jpg/back_bois.png');
  background-repeat: repeat;
  background-size: 100%; */
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
  font-size: 12px;
  font-weight: lighter;
  margin: -5px 20px 0 20px;
  line-height: 20px;
  color: var(--body);
}

.accompagnement {
    margin: 10px 20px; 
}

.accompagnement p{
    color: var(--redBody);
    font-size: lighter;
}

.accompagnement_green {
    margin: 10px 20px; 
}

.accompagnement_green p{
    color: var(--green);
    font-size: lighter;
}
</style>
