<template>
  <div>
    <the-header/>
    <nuxt />
    <the-footer/>
  </div>
</template>



<script>
import TheFooter from '../components/default/TheFooter'
import TheHeader from '../components/default/TheHeader'
export default {
  components: {
    TheFooter,
    TheHeader
  }
}
</script>

<style>
html {
  font-family: 'Times New Roman', Times, serif, -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  overflow-x: hidden;
  background-color: var(--background);
}

body {
  overflow-x: hidden;

}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

:root {
  --background: #F8F2E7;
  --redBody: #984346; 
  --green: #52895f; 
  --body: #6e685c;
  --white: #fff;
  --black: #202020;
}

@font-face {
  font-family: 'italic-title';
  src: url("~assets/fonts/WhiteAngelica.ttf");
}

p {
  font-family: 'Arimo', sans-serif;
  font-weight: 500;
  color: var(--body);
  font-size: 14px;
  line-height: 22px;
}

h1, h2, h3, h4, h5 {
  font-family: 'Noto Serif', serif;
  font-weight: 400; 
  color: var(--redBody);
  text-transform: uppercase;

}


</style>
