<template>
  <div>
      <ol
    vocab="http://schema.org/"
    typeof="BreadcrumbList"
  >
    <li property="itemListElement" typeof="ListItem">
      <NLink property="item" typeof="WebPage" to="/">
        <span property="name">Accueil</span>
      </NLink>
      <meta property="position" content="1" />
    </li>
    <li
      v-for="(crumb, index) in crumbs"
      :key="index"
      property="itemListElement"
      typeof="ListItem"
    >
      <NLink property="item" typeof="WebPage" :to="crumb.path">
        <span property="name">{{
          $route.fullPath === crumb.path && title !== null ? title : crumb.title
        }}</span>
      </NLink>
      <meta property="position" :content="index + 2" />
    </li>
  </ol>
  </div>
</template>

<script>
const titleCase = require('ap-style-title-case')

export default {
    props: {
    title: {
      type: String,
      default: null,
    },
  },
  computed: {
    crumbs() {
      const fullPath = this.$route.fullPath
      const params = fullPath.startsWith('/')
        ? fullPath.substring(1).split('/')
        : fullPath.split('/')
      const crumbs = []
      let path = ''
      params.forEach((param, index) => {
        path = `${path}/${param}`
        const match = this.$router.match(path)
        if (match.name !== null) {
          crumbs.push({
            title: titleCase(param.replace(/-/g, ' ')),
            ...match,
          })
        }
      })
      return crumbs
    },
  },

}
</script>

<style scoped>

ol {
  list-style: none;
  margin: 120px -20px 0px -20px;
}
li {
  display: inline;
  font-size: 12px;
}
li:after {
  content: ' » ';
  display: inline;
  font-size: 12px;
  color: var(--redBody);
  padding: 0;
}
li:last-child:after {
  content: '';
}
li a {
  color: var(--redBody);
  text-decoration: none;

}
li a.nuxt-link-exact-active.nuxt-link-active {
  color: grey;
}


</style>