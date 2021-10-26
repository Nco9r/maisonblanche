<template>
  <section class="newsletter">
    <div>
      <div class="title_generate">
        <div class="box_hr">
          <hr class="trait" />
          <hr class="rond" />
        </div>
        <span class="subhead">Newsletter</span>
        <h2>
          Tenez vous au courant de tous nos
          <span class="italic_title">événements</span>.
        </h2>
      </div>
      <div class="input_newsletter">
        <div class="box_input">
          <input type="text" placeholder="votre@email.fr" v-model="form.email" />
          <button @click="submit">Ok</button>
        </div>
          <p class="sucess" v-if="sucess">Merci pour votre inscription 😛</p>
      </div>

    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      form: {
        email: ''
      },
      error: [],
      sucess: false,
    }
  },
  methods:{
        submit(e) {
      e.preventDefault()
      this.$axios
        .post('https://api.lamaisonblanche-dune.fr/subscribe', { ...this.form })
        .then(
          (res) => (
            (this.form = '')
            (this.sucess = true)
            (this.error = false)
          )
        )
        .catch(e) 
    //   this.error = true
    }
    },
}
</script>

<style scoped>
.newsletter {
  width: 100%;
  margin-top: -4px;
  background-color: var(--green);
  padding-bottom: 100px;
  background-image: url('~assets/img/svg/16.svg');
  background-size: 100%;
  background-position-y: 70px;
  background-repeat: no-repeat;
}

.title_generate {
  text-align: center;
  width: 100%;
}

.box_hr {
  width: 100%;
  margin: auto;
}

.trait {
  width: 1px;
  height: 50px;
  background-color: var(--white);
  border: none;
  margin: auto !important;
  justify-content: center;
  margin-left: 5px;
  margin-bottom: 10px;
  z-index: 1;
}

.sucess {
  color: white;
  margin-top: 30px;
}

.rond {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: var(--white);
  border: none;
  margin: 10px auto !important;
}

.subhead {
  text-transform: uppercase;
  font-size: 12px;
  color: var(--white);
}

.title_generate h2 {
  margin-top: 5px;
  line-height: 32px;
  font-size: 24px;
  padding: 10px;
  font-weight: 700;
  color: var(--white);
}

.italic_title {
  font-family: 'italic-title', sans-serif;
  text-transform: lowercase;
  font-size: 35px;
  color: var(--white);
  font-weight: 700;
}

.input_newsletter {
  text-align: center;
}

.box_input {
  margin-top: 20px;
}

.box_input input {
  border: none;
  padding: 10px 20px;
  outline: none;
  font-family: 'Roboto Condensed', sans-serif;
  font-size: 16px;
}

.box_input input::placeholder {
  opacity: 0.5;
}

.box_input button {
  padding: 10px 20px;
  border: none;
  background-color: var(--redBody);
  color: var(--white);
  font-family: 'Roboto Condensed', sans-serif;
  font-size: 16px;
  text-transform: uppercase;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s;
}

.box_input button:hover {
  opacity: 0.8;
}

@media screen and (min-width: 1024px) {
  .title_generate h2 {
    line-height: 52px;
    font-size: 42px;
    max-width: 600px; 
    margin: auto;
  }
}
</style>
