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
          <div class="items_mobile" @click="openMenu = !openMenu">
            <nuxt-link to="/">Restaurant</nuxt-link>
            <nuxt-link to="/">Menu</nuxt-link>
            <nuxt-link to="/evenements">Événements</nuxt-link>
            <nuxt-link to="/contact">Contact</nuxt-link>
          </div>
          <div class="cta_header" @click="openMenu = !openMenu">
            <nuxt-link to="/reservation" >
              <button>
                Réserver
              </button>
            </nuxt-link>
          </div>
          <div class="infos_header"></div>
        </div>
        </transition>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      openMenu: false
    }
  }
}
</script>

<style scoped>
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
}

.block_map a {
  display: flex;
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
  font-size: 14px;
  font-weight: bold;
}

.top_bar_map .block_map img {
  width: 20px;
  margin-right: 5px;
}

.top_bar_header {
  padding: 15px 10px 10px 10px;
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
  left: 0;
  bottom: 0;
}

.menu-enter-active {
    animation: slide .3s ease-in-out;
}

.menu-leave-active {
  animation: slideClose .3s ease-in-out;
}

@keyframes slide {
    from {
        transform: translateX(100%); 
    }
    to {
        transform: translateX(0); 

    }
}

@keyframes slideClose {
    from {
        transform: translateX(0); 
        delay: 5s;
    }
    to {
        delay: 5s;
        transform: translateX(100%); 

    }
}

.items_mobile {
  display: flex;
  flex-flow: column;
  text-align: center;
  margin: 50px auto 10px auto;
}

.items_mobile a {
  font-size: 28px;
  margin-bottom: 20px;
  color: var(--redBody);
  font-weight: bold;
  text-decoration: none;
}

.cta_header {
  margin: 20px auto;
}

.cta_header a {
  margin: 20px auto;
  display: flex;
  text-decoration: none;
}

.cta_header a button {
  background-color: var(--green);
  padding: 14px 24px;
  font-size: 16px;
  border: none;
  color: var(--white);
  font-family: 'Arimo', sans-serif;
  font-weight: bold;
  width: 70%;
  margin: 10px auto;
}
</style>
