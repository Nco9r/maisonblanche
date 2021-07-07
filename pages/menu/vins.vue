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
      <div class="greenBackground">
        <div class="title">
          <h2>Insalata</h2>
        </div>
      </div>
      <div class="content_menu">
        <div class="elements_menu">
          <p class="content">
            Véritable salade César
          </p>
          <span></span>
          <p class="price">14,50€</p>
        </div>
        <p class="description">
          Salade Romaine, poulet mariné, anchois, tomates, oeuf dur, croûtons,
          sauce César.
        </p>
      </div>
      <div class="content_menu">
        <div class="elements_menu">
          <p class="content">
            Salade Maison Blanche
          </p>
          <span></span>
          <p class="price">14,50€</p>
        </div>
        <p class="description">
          3 variétés de tomates, mesclun, burratina(3), pesto basilic au Grana
          Padano (2).
        </p>
      </div>
      <div class="redBackground_1">
        <div class="title">
          <h2>La Carne</h2>
        </div>
      </div>
      <div class="content_menu">
        <div class="elements_menu">
          <p class="content">
            Escalope de veau (180g)
          </p>
          <span></span>
          <p class="price">23,50€</p>
        </div>
        <p class="description">
          - Saltimbocca : escalope coupée finement, jambon cru, sauce vin blanc,
          crème, champignons. <br />
          - Picatta : escalope gratinée au Grana Padano.
        </p>
      </div>
       <div class="content_menu">
        <div class="elements_menu">
          <p class="content">
            Tagliata de boeuf VBF (4)
          </p>
          <span></span>
          <p class="price">24,00€</p>
        </div>
        <p class="description">
            Boeuf poêlé, roquette, copeaux de Grana Padano, vinaigre balsamique argent IGP (5)
        </p>
      </div>
      <div class="content_menu">
        <div class="elements_menu">
          <p class="content">
            Côte de Cochon noir des aldudes AOP (6) 400 gr 
          </p>
          <span></span>
          <p class="price">28,00€</p>
        </div>
        <p class="description">
            Et piperade.
        </p>
      </div>
      <div class="accompagnement">
          <p><strong>Au choix accompagnement</strong> : Tagliatelle persto basilic, frites, piperade, salade.</p>
      </div>
        <div class="greenBackground">
        <div class="title">
          <h2>Menu Bambini</h2>
        </div>
      </div>
       <div class="content_menu">
        <div class="elements_menu">
          <p class="content">
            Pizza per bambini : Base tomate, jambon, origan, mozza <br> ou <br> Pâtes : Tagliatelle carbonara ou bolognaise <br> +1 Glace enfant
          </p>
          <span></span>
          <p class="price">10,50€</p>
        </div>
      </div>
       <div class="greenBackground">
        <div class="title">
          <h2>Il Pecse</h2>
        </div>
      </div>
        <div class="content_menu">
        <div class="elements_menu">
          <p class="content">
            Fricasée de calamari à la basque, riz pilaf
          </p>
          <span></span>
          <p class="price">19,50€</p>
        </div>
      </div>
        <div class="content_menu">
        <div class="elements_menu">
          <p class="content">
            Filet de dorade
          </p>
          <span></span>
          <p class="price">24,00€</p>
        </div>
        <p class="description">
            Snacké à l'unilatéral, vierge de légumes et olive lechni
        </p>
      </div>
         <div class="redBackground_1">
        <div class="title">
          <h2>La Pasta</h2>
        </div>
      </div>
       <div class="content_menu">
        <div class="elements_menu">
          <p class="content">
            Rigatonni arabiata
          </p>
          <span></span>
          <p class="price">12,50€</p>
        </div>
      </div>
       <div class="content_menu">
        <div class="elements_menu">
          <p class="content">
            Spaghetti pesto parmesan
          </p>
          <span></span>
          <p class="price">13,50€</p>
        </div>
      </div>
       <div class="content_menu">
        <div class="elements_menu">
          <p class="content">
            Lasagnes traditionnelles
          </p>
          <span></span>
          <p class="price">16,50€</p>
        </div>
        <p class="description">
            avec sa salade de mesclun
        </p>
      </div>
       <div class="content_menu">
        <div class="elements_menu">
          <p class="content">
            Tagliatelle carbonara
          </p>
          <span></span>
          <p class="price">14,00€</p>
        </div>
      </div>
      <div class="content_menu">
        <div class="elements_menu">
          <p class="content">
            Tagliatelle bolognaise
          </p>
          <span></span>
          <p class="price">14,00€</p>
        </div>
      </div>
       <div class="redBody">
        <div class="title">
          <h2>Les Pizzas</h2>
        </div>
      </div>
       <div class="content_menu">
        <div class="elements_menu">
          <p class="content">
            Margo
          </p>
          <span></span>
          <p class="price">10,50€</p>
        </div>
        <p class="description">
            Base tomate, mozzarella, basilic.
        </p>
      </div>
       <div class="content_menu">
        <div class="elements_menu">
          <p class="content">
            Napo
          </p>
          <span></span>
          <p class="price">14,50€</p>
        </div>
        <p class="description">
            Base tomate, anchois, câpres, olives, mozza.
        </p>
      </div>
       <div class="content_menu">
        <div class="elements_menu">
          <p class="content">
            Isabella
          </p>
          <span></span>
          <p class="price">13,50€</p>
        </div>
        <p class="description">
            Base tomate, jambon, champignons, mozza.
        </p>
      </div>
        <div class="content_menu">
        <div class="elements_menu">
          <p class="content">
            4 Formaggio
          </p>
          <span></span>
          <p class="price">14,50€</p>
        </div>
        <p class="description">
            Base crème, gorgonzola, mozza, taleggio, Grana Padano.
        </p>
      </div>
       <div class="content_menu">
        <div class="elements_menu">
          <p class="content">
            La Sensa
          </p>
          <span></span>
          <p class="price">14,50€</p>
        </div>
        <p class="description">
            Sans base, tomates cerises, ricotta, ail, origan, pesto, mozza, jambon de parme.
        </p>
      </div>
      <div class="content_menu">
        <div class="elements_menu">
          <p class="content">
            La Capo
          </p>
          <span></span>
          <p class="price">14,50€</p>
        </div>
        <p class="description">
            Base tomate, chorizo (1), poivron frais, mozza, oignons, oeuf.
        </p>
      </div>
      <div class="content_menu">
        <div class="elements_menu">
          <p class="content">
            La Vege
          </p>
          <span></span>
          <p class="price">15,50€</p>
        </div>
        <p class="description">
            Base tomate, aubergine, poivron, artichaud, mozza, origan, ail.
        </p>
      </div>
       <div class="content_menu">
        <div class="elements_menu">
          <p class="content">
            Maison Blanche
          </p>
          <span></span>
          <p class="price">14,90€</p>
        </div>
        <p class="description">
            Base crème, pancetta, oignon, mozza, roquette, scarmorza
        </p>
      </div>
        <div class="content_menu">
        <div class="elements_menu">
          <p class="content">
            La Maiale
          </p>
          <span></span>
          <p class="price">15,50€</p>
        </div>
        <p class="description">
            Base tomate, oignon, jambon de parme, saucisse sèche mortadelle, coppa.
        </p>
      </div>
       <div class="content_menu">
        <div class="elements_menu">
          <p class="content">
            I Gamberi
          </p>
          <span></span>
          <p class="price">16,00€</p>
        </div>
        <p class="description">
            Base tomate, grosses crevettes, courgettes, huile d'ail basilic, olives noires (italienne lechini), mozza.
        </p>
      </div>
       <div class="content_menu">
        <div class="elements_menu">
          <p class="content">
            Itartufo
          </p>
          <span></span>
          <p class="price">19,50€</p>
        </div>
        <p class="description">
            Base crème, jambon blanc truffé, huile de truffe, mozza, truffe d'été, roquette, burriatina (2) 125 gr.
        </p>
        <div class="accompagnement_green">
            <p><strong>Suppléments ingrédients pizza</strong> : fromages italiens 2.50€, charcuterie 2.50€, Oeuf 1.00€</p>
        </div>
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
  padding: 150px 0;
  /* background-image: url('~assets/img/jpg/back_bois.png');
  background-repeat: repeat;
  background-size: 100%; */
}

.redBackground {
  background-color: var(--redBody);
  padding: 20px;
  margin-top: 30px;

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
