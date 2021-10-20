<template>
  <header>
    <div class="header_mobile">
      <div class="top_bar_map">
        <div class="block_map">
          <a
            href="https://ul.waze.com/ul?place=ChIJmfn6fu6dVA0R0UWoZ6Jm8Us&ll=44.57174810%2C-1.22199570&navigate=yes&utm_campaign=waze_website&utm_source=waze_website&utm_medium=lm_share_location"
            target="_blank"
          >
            <img src="~assets/img/svg/map.svg" alt="" />
            <p>Aller à la Maison Blanche</p>
          </a>
          <span></span>
          <a href="tel:+33675483665">
            <img src="~assets/img/svg/phone_mb.svg" alt="" />
            <p>Contact</p>
          </a>
        </div>
      </div>
      <div class="top_bar_header">
        <div class="logo_header">
          <img src="~assets/img/svg/logo_mb_header.svg" alt="" />
        </div>
        <div class="hamburger_header" @click="openMenu = !openMenu">
          <span :class="{ open: openMenu }"></span>
        </div>
        <transition name="menu" appear>
          <div class="items_mobile_fixed" v-if="openMenu">
            <div class="items_mobile">
              <nuxt-link to="/"
                ><p @click="openMenu = !openMenu">Restaurant</p></nuxt-link
              >
              <div class="items_menu" @click="itemMenu = !itemMenu">
                <p>Menu</p>
                <img
                  :class="{ rotate: itemMenu }"
                  src="~assets/img/svg/angle.svg"
                  alt=""
                />
              </div>
              <div
                class="item_menu"
                v-if="itemMenu"
                @click=";(openMenu = !openMenu), (itemMenu = !itemMenu)"
              >
                <nuxt-link to="/menu/tapas">Tapas</nuxt-link>
                <nuxt-link to="/menu/plats">Plats</nuxt-link>
                <nuxt-link to="/menu/boissons">Boissons</nuxt-link>
                <nuxt-link to="/menu/vins">Vins</nuxt-link>
                <nuxt-link to="/menu/rhum">Rhum</nuxt-link>
              </div>

              <nuxt-link to="/evenements" @click="openMenu = !openMenu"
                ><p class="appear_1" @click="openMenu = !openMenu">
                  Événements
                </p></nuxt-link
              >
              <nuxt-link to="/contact" @click="openMenu = !openMenu"
                ><p class="appear_2" @click="openMenu = !openMenu">
                  Contact
                </p></nuxt-link
              >
            </div>
            <div class="cta_header" @click="openMenu = !openMenu">
              <nuxt-link to="/reservation">
                <button>
                  Réserver
                </button>
              </nuxt-link>
            </div>
            <div class="copyright">
              <div class="infos_sociaux">
                <div class="infos">
                  <p>
                    Avenue de Biscarrosse, <br />
                    33170, Pyla-sur-mer
                  </p>
                  <p>
                    hello@lamaisonblanche-dune.fr <br />
                    +33 (0)6 75 48 36 65
                  </p>
                </div>
                <div class="sociaux">
                  <img
                    src="~assets/img/svg/facebook_r.svg"
                    alt="logo facebook"
                  />
                  <img
                    src="~assets/img/svg/instagram_r.svg"
                    alt="logo instagram"
                  />
                  <img src="~assets/img/svg/trip_r.svg" alt="logo trip" />
                </div>
              </div>
            </div>
          </div>
        </transition>
      </div>
    </div>
    <div class="header_desktop_container">
    <div class="header_desktop">
       <div class="top_bar_map">
        <div class="block_map">
          <a
            href="https://ul.waze.com/ul?place=ChIJmfn6fu6dVA0R0UWoZ6Jm8Us&ll=44.57174810%2C-1.22199570&navigate=yes&utm_campaign=waze_website&utm_source=waze_website&utm_medium=lm_share_location"
            target="_blank"
          >
            <img src="~assets/img/svg/map.svg" alt="" />
            <p>Aller à la Maison Blanche</p>
          </a>
          <span></span>
          <a href="tel:+33675483665">
            <img src="~assets/img/svg/phone_mb.svg" alt="" />
            <p>Contact</p>
          </a>
        </div>
      </div>
      <div class="top_bar_header_desktop">
        <div class="block_header">
        <div class="logo_header">
          <img src="~assets/img/svg/logo_mb_header.svg" alt="" />
        </div>
        <div class="items_desktop">
          <nuxt-link to='/'>Restaurant</nuxt-link>
          <p @click="openMenuD = !openMenuD">Menu</p>
           <div class="items_menu_desktop" v-if="openMenuD" @click="openMenuD = !openMenuD">
          <nuxt-link to="/menu/tapas">Tapas</nuxt-link>
                <nuxt-link to="/menu/plats">Plats</nuxt-link>
                <nuxt-link to="/menu/boissons">Boissons</nuxt-link>
                <nuxt-link to="/menu/vins">Vins</nuxt-link>
                <nuxt-link to="/menu/rhum">Rhum</nuxt-link>
        </div>
          <nuxt-link to='/evenements'>Événements</nuxt-link>
          <nuxt-link to='/contact'>Contact</nuxt-link>
          <nuxt-link to='/reservation' class="cta_desktop">Réservez</nuxt-link>
        </div>
         
 
      </div>
      </div>
    </div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      openMenu: false,
      openMenuD: false,
      itemMenu: false
    }
  }
}
</script>

<style scoped>

 .header_desktop_container {
      display: none;
    }
.header_mobile {
  position: fixed;
  top: 0;
  z-index: 10;
  right: 0;
  left: 0;
}

.top_bar_map {
  background-color: var(--redBody);
  padding: 10px;
  z-index: 30;
}

.block_map {
  display: flex;
  flex-flow: row wrap;
}

.block_map a {
  display: flex;
  flex-flow: row wrap;
  align-items: flex-end;
  text-decoration: none;
}

.block_map span {
  width: 2px;
  height: 20px;
  border: none;
  display: block;
  background-color: var(--white);
  margin: 0 15px;
}

.top_bar_map .block_map p {
  color: var(--white);
  font-size: 12px;
}

.top_bar_map .block_map img {
  width: 20px;
  margin-right: 5px;
}

.top_bar_header {
  padding: 15px 20px 10px 20px;
  background-color: var(--background);
  border-bottom: 1px solid #e0e0e0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 30;
}

.top_bar_header .logo_header img {
  width: 50px;
}

.top_bar_header .hamburger_header {
  display: flex;
  flex-flow: column;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  width: 30px;
  margin-right: 10px;
  height: 30px;
}

.top_bar_header .hamburger_header span {
  height: 1px;
  border: none;
  background-color: var(--redBody);
  width: 32px;
  z-index: 30;
  position: relative;
  outline: none;
  transition: all 0.3s;
}

.open {
  transform: rotate(-45deg);
}

.open::after {
  transform: rotate(90deg);
  margin-top: 0px !important;
}

.top_bar_header .hamburger_header span::after {
  content: '';
  height: 1px;
  border: none;
  background-color: var(--redBody);
  width: 32px;
  margin-top: -10px;
  z-index: 30;
  position: absolute;
  outline: none;
}

.items_mobile_fixed {
  position: fixed;
  top: 98px;
  background-color: var(--background);
  right: 0;
  overflow: scroll;
  left: 0;
  bottom: 0;
}

.menu-enter-active {
  animation: slide 0.3s ease-in-out;
}

.menu-leave-active {
  animation: slideClose 0.3s ease-in-out;
}

@keyframes slide {
  from {
    transform: translateY(100%);
  }
  to {
    transform: translateY(0);
  }
}

@keyframes slideClose {
  from {
    transform: translateY(0);
    delay: 5s;
  }
  to {
    delay: 5s;
    transform: translateY(100%);
  }
}

.items_mobile {
  display: flex;
  flex-flow: column;
  margin: 50px 20px 10px 20px;
}

.items_mobile a {
  text-decoration: none;
}

.items_mobile a p {
  font-size: 28px;
  margin-bottom: 40px;
  color: var(--redBody);
  opacity: 0;
  animation: appear 0.3s ease-in-out;
  animation-fill-mode: forwards;
  animation-delay: 0.4s;

  font-family: 'Noto Serif', serif;
}

.appear_1 {
  animation-delay: 0.6s !important;
}

.appear_2 {
  animation-delay: .7s !important;
}

@keyframes appear {
  from {
    transform: translateY(2px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}
.items_menu {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 15px;
}

.items_menu img {
  width: 30px;
  margin-top: -5px;
  transition: all 0.3s;
}

.rotate {
  transform: rotate(90deg);
}

.items_menu {
  opacity: 0;
  animation: appear 0.3s ease-in-out;
  animation-delay: 0.5s;
  margin-bottom: 20px;

  animation-fill-mode: forwards;
}

.items_menu p {
  font-size: 28px;
  font-family: 'Noto Serif', serif;
  margin-bottom: 20px;
  color: var(--redBody);
  text-decoration: none;
}

.item_menu {
  display: flex;
  margin-top: -20px;
  flex-flow: column;
  margin-bottom: 20px;
}

.item_menu a {
  font-size: 16px;
  color: var(--black);
  margin-left: 3px;
  font-weight: bold;
  margin-bottom: 5px;
}

.cta_header {
  margin: 20px auto;
  opacity: 0;
  animation: appear 0.3s ease-in-out;
  animation-delay: .8s;
  animation-fill-mode: forwards;
}

.cta_header a {
  margin: 20px auto;
  display: flex;
  text-decoration: none;
}

.cta_header a button {
  background-color: var(--redBody);
  padding: 14px 24px;
  font-size: 16px;
  border: none;
  color: var(--white);
  font-family: 'Arimo', sans-serif;
  font-weight: bold;
  width: 100%;
  margin: 10px 20px;
}

.copyright {
  margin: 80px 20px;opacity: 0;
  animation: appear 0.3s ease-in-out;
  animation-delay: 1s;
  animation-fill-mode: forwards;
}

.infos {
  margin-top: 10px;
}

.infos p {
  margin-bottom: 10px;
}

.infos p:nth-child(1) {
  margin-bottom: 20px;
  
  color: var(--black);
  font-weight: bold;
}

.infos p:nth-child(2) {
  margin-bottom: -8px;
 
  color: var(--body);
  font-weight: lighter;
}

.infos_sociaux {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
}

.sociaux {
  display: flex;
  align-items: flex-end;
  margin-top: -10px !important;
}
.sociaux img {
  margin-top: -10px !important;

  margin-left: 15px;
}

@media screen and (min-width: 1024px) {
    .header_mobile {
      display: none;
    }

    .header_desktop_container {
      display: flex;
    }

    .header_desktop {
      position: fixed;
      top: 0; 
      left: 0;
      right: 0;
      z-index: 101
    }
    .block_header {
       max-width: 1000px;
      margin: auto;
      display: flex;
      align-items: center; 
      justify-content: space-between;
      padding-top: 30px;
    }

    .items_desktop {
      margin-bottom: 20px;
      position: relative;
      display: flex; 
      
    }

    .items_menu_desktop {
      position: absolute;
      top: 35px;
      background-color: var(--white);
      width: 600px;
      display: flex; 
      flex-flow: row wrap;
      left: -50px;
      justify-content: center;
      height: 50px;
      align-items: center;
      border-radius: 20px;
      z-index: 100;
    }

    .items_menu_desktop a {
      color: var(--black)!important;
      font-size: 16px!important;
    }

    .logo_header {
      margin-top: -20px;
    }

    .items_desktop a {
      color: var(--redBody);
      text-decoration: none;
      font-weight: bold;
      margin: 0 30px;
      font-size: 18Px;
      transition: all .3s ease-in-out;
    }

    .items_desktop a:hover {
      color: var(--black);
      
    }

    .top_bar_header_desktop {
  background-color: var(--background);
  border-bottom: 1px solid #e0e0e0;
  z-index: 30;
}

    .items_desktop p {
      color: var(--redBody);
      text-decoration: none;
      font-weight: bold;
      cursor: pointer; 
      margin: 0 30px;
      font-family: 'Times New Roman', Times, serif;
      font-size: 18Px;
      transition: all .3s ease-in-out;
    }

    .items_desktop p:hover {
      color: var(--black);
      
    }


    .items_desktop .cta_desktop {
      background-color: var(--redBody); 
      color: var(--white);
      margin-top: -10px;
      padding: 10px 32px;
    }
}

@media screen and (min-width: 1300px) {
    .header_mobile {
      display: none;
    }

    .block_map{
      max-width: 1100px;
      margin: auto;
      
    }

    .block_map p {
      font-weight: bold;
      font-size: 16px;
    }

    .block_header {
      max-width: 1100px;
      margin: auto;
      display: flex;
      align-items: center; 
      justify-content: space-between;
      padding-top: 30px;
    }
}
</style>
