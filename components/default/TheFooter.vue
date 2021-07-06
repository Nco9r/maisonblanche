<template>
  <footer>
    <div class="container_footer">
      <div class="container_items">
        <div class="items">
          <h3>Localisation</h3>
          <p>
            Avenue de Biscarrosse, <br />
            33170, Pyla-sur-mer
          </p>
        </div>
        <div class="items">
          <h3>HORAIRE</h3>
          <p>
            Ouvert tous le jours <br />
            Midi - 12h / 14h30 <br />
            Soir - 18h / 21h
          </p>
        </div>
        <div class="items">
          <h3>contact</h3>
          <p>
            hello@lamaisonblanche-dune.fr <br />
            +33 (0)6 75 48 36 65
          </p>
        </div>
        <div class="items">
          <h3>reservation</h3>
          <p>
            Réservez une table ou privatisez une salle pour vivre pleinement
            l’expérience de la Maison Blanche.
          </p>
        </div>
      </div>
      <hr />
      <div class="container_logo">
        <div class="booking">
          <button>Réservez</button>
        </div>
        <div class="logo">
          <img src="~assets/img/svg/logo_mb_green.svg" alt="" />
        </div>
      </div>
      <div class="container_copyright">
        <div class="sociaux">
          <p>#lamaisonblanche</p>
          <div class="icon_sociaux">
            <img src="~assets/img/svg/facebook.svg" alt="logo facebook" />
            <img src="~assets/img/svg/instagram.svg" alt="logo instagram" />
            <img src="~assets/img/svg/trip.svg" alt="logo trip" />
          </div>
        </div>
        <div class="copyright">
          <p>
            Mentions légales - ©2021 LA Maison Blanche - Design et développement
            Nicolas ROUX.
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {}
</script>

<style scoped>
footer {
  background-color: var(--redBody);
}

.container_footer {
  display: flex;
  flex-flow: column;
  padding: 50px 10px;
}

.container_items {
  display: flex;
  flex-flow: column;
  text-align: center;
}

.items {
  margin-bottom: 20px;
  padding: 0 40px;
}

.items h3 {
  color: var(--white);
  font-weight: bold;
  font-size: 16px;
  margin-bottom: 15px;
}

.items p {
  color: var(--white);
  font-size: 14px;
  line-height: 24px;
  margin-bottom: 15px;
  opacity: .8;
}

hr {
  border: none; 
  height: 1Px;
  width: 100%;
  margin: auto;
  background-color: rgba(255, 255, 255, 0.199)
}

.container_logo {
    text-align: center;
    margin-top: 30px;
}

.container_logo .logo{
    margin-top: 50px;
}

.container_logo .booking button {
    background-color: var(--background);
    border: none;
    padding: 12px 24px;
    font-family: 'Noto Serif', serif;
    font-size: 16px;
    font-weight: bold;
    color: var(--redBody);
}

.container_copyright {
    text-align: center;
    margin-top: 50px;
}

.container_copyright .sociaux p {
    color: var(--white);
    font-weight: bold;
    margin-bottom: 20px;
}

.container_copyright .icon_sociaux {
    display: flex;
    align-items: center;
    justify-content: center;
}

.container_copyright .icon_sociaux img {
    padding: 0 15px;
}

.copyright {
    margin-top: 30px;padding: 0 15Px;
}

.copyright p{
    color: var(--white);
}

@media screen and (min-width: 1024px) {

  .container_footer {
    max-width: 1200px;
    margin: 0px auto; 
  }

  .container_items {
  display: flex;
  flex-flow: row wrap;
  text-align: left;
  justify-content: space-between;
}

.items {
  width: 280px;
  padding: 0px;
}

.container_logo {
    display: flex;
  flex-flow: row-reverse wrap;
  text-align: left;
  align-items: flex-end;
  margin-top: 5px;
  justify-content: space-between;
}



.container_copyright {
   display: flex;
  flex-flow: row-reverse wrap;
  text-align: left;
  align-items: center;
  margin-top: 5px;
  justify-content: space-between;
}

.container_copyright .sociaux {
  display: flex;
  flex-flow: row-reverse wrap;
  text-align: left;
  align-items: flex-end;
  margin-top: 20px;
  justify-content: space-between;
}

.container_copyright .sociaux p {
    margin-bottom: 0px;
}

}

@media screen and (min-width: 1300px) {
   .container_footer {
    max-width: 1100px;
    margin: 0px auto; 
  }

  .items {
    width: 250px;
  }
}
</style>
