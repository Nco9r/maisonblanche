<template>
  <main>
    <section class="reservation">
      <div class="block_left">
        <div class="content_form">
          <div class="title_block_left">
            <h3>Contactez nous</h3>
          </div>
          <div class="items_contact">
            <h5>Email</h5>
            <p>hello@lamaisonblanche-dune.fr</p>
          </div>
           <div class="items_contact">
            <h5>Téléphone</h5>
            <p>+33 (0)6 75 48 36 65</p>
          </div>
           <div class="items_contact">
            <h5>Ouvert tous les jours</h5>
            <p>Midi - 12h / 14h30</p>
            <p>Soir - 18h / 21h</p>
          </div>
       
        </div>
      
        <!-- <div class="faq">
          <div class="title_faq">
            <h3>Foire aux questions (FAQ)</h3>
          </div>
          <div class="content_faq">
            <div class="title_question" @click="faq_1 = !faq_1">
              <p>Comment accéder au restaurant</p>
              <img
                src="~assets/img/svg/angle.svg"
                :class="{ rotate: faq_1 }"
                alt=""
              />
            </div>
            <div class="content_respons" v-if="faq_1">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
                libero sint velit! Animi quod, vitae minus debitis ullam odit?
                Iusto repellendus ipsum esse ullam eius delectus magnam et id
                vel?Deserunt fugit error, impedit cupiditate aut dolores
                officiis repudiandae est inventore odio, laudantium totam
                ducimus. Quod tenetur est dolorum repudiandae quae molestiae
                inventore necessitatibus amet, possimus eos. Expedita, amet
                sint!
              </p>
            </div>
            <hr />
          </div>
          <div class="content_faq">
            <div class="title_question" @click="faq_2 = !faq_2">
              <p>Le restaurant dispose t'il d'un parking ?</p>
              <img
                src="~assets/img/svg/angle.svg"
                :class="{ rotate: faq_2 }"
                alt=""
              />
            </div>
            <div class="content_respons" v-if="faq_2">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
                libero sint velit! Animi quod, vitae minus debitis ullam odit?
                Iusto repellendus ipsum esse ullam eius delectus magnam et id
                vel?Deserunt fugit error, impedit cupiditate aut dolores
                officiis repudiandae est inventore odio, laudantium totam
                ducimus. Quod tenetur est dolorum repudiandae quae molestiae
                inventore necessitatibus amet, possimus eos. Expedita, amet
                sint!
              </p>
            </div>
            <hr />
          </div>
          <div class="content_faq">
            <div class="title_question" @click="faq_3 = !faq_3">
              <p>Les animaux sont ils acceptés ?</p>
              <img
                src="~assets/img/svg/angle.svg"
                :class="{ rotate: faq_3 }"
                alt=""
              />
            </div>
            <div class="content_respons" v-if="faq_3">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
                libero sint velit! Animi quod, vitae minus debitis ullam odit?
                Iusto repellendus ipsum esse ullam eius delectus magnam et id
                vel?Deserunt fugit error, impedit cupiditate aut dolores
                officiis repudiandae est inventore odio, laudantium totam
                ducimus. Quod tenetur est dolorum repudiandae quae molestiae
                inventore necessitatibus amet, possimus eos. Expedita, amet
                sint!
              </p>
            </div>
            <hr />
          </div>
          <div class="content_faq">
            <div class="title_question" @click="faq_4 = !faq_4">
              <p>Pouvons nous réserver une table ?</p>
              <img
                src="~assets/img/svg/angle.svg"
                :class="{ rotate: faq_4 }"
                alt=""
              />
            </div>
            <div class="content_respons" v-if="faq_4">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
                libero sint velit! Animi quod, vitae minus debitis ullam odit?
                Iusto repellendus ipsum esse ullam eius delectus magnam et id
                vel?Deserunt fugit error, impedit cupiditate aut dolores
                officiis repudiandae est inventore odio, laudantium totam
                ducimus. Quod tenetur est dolorum repudiandae quae molestiae
                inventore necessitatibus amet, possimus eos. Expedita, amet
                sint!
              </p>
            </div>
            <hr />
          </div>
        </div> -->
      </div>
      <div class="block_right" id="reserve">
        <div class="content_form">
          <div class="title_block_left">
            <h1>Réservez une <span class="italic">table</span></h1>
          </div>
          <p>
            Réservez une table jusqu'à <strong>10 personnes</strong>. Pour toute
            <strong>privatisation</strong> ou <strong>repas de groupe</strong>,
            veuillez nous <strong>contacter</strong> par
            <strong>téléphone</strong> au +33 (0)6 75 48 36 65.
          </p>
        </div>
         <form @submit="submitreserve">
          <div class="content_label">
            <div class="label">
              <p>Nom et prénom</p>
              <input type="text" required v-model="form.name" />
            </div>
            <div class="label">
              <p>Téléphone</p>
              <input type="phone" required v-model="form.phone" />
            </div>
            <div class="label">
              <p>E-mail</p>
              <input type="email" required v-model="form.email" />
            </div>
            <div class="label">
              <p>Nombre de personnes</p>
              <select
                name=""
                id=""
                required
                autocomplete="none"
                v-model="form.convives"
              >
                <option disabled selected value="Choisir dans la liste"
                  >Choisir dans la liste</option
                >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
              </select>
            </div>
            <div class="label_1">
              <p>Sélectionner une date</p>
              <no-ssr>
                <v-date-picker
                  mode="range"
                  v-model="form.DateSelected"
                  :min-date="date"
                  show-caps
                />
              </no-ssr>
            </div>
            <div class="label">
              <p>Sélectionner un horaire</p>
              <select
                name=""
                id=""
                required
                autocomplete="none"
                v-model="form.heure"
              >
                <option disabled selected value="Choisir dans la liste"
                  >Choisir dans la liste</option
                >
                <option value="12h">12h</option>
                <option value="12h30">12h30</option>
                <option value="13h">13h</option>
                <option value="13h30">13h30</option>
                <option value="19h">19h</option>
                <option value="19h30">19h30</option>
                <option value="20h">20h</option>
                <option value="20h30">20h30</option>
                <option value="21h">21h</option>
              </select>
            </div>
            <div class="label_check">
              <input type="checkbox" required @click="checkbox = !checkbox" />
              <p>
                Je consens à ce que les données que j'ai soumises soient
                collectées et stockées en vue d'être utilisées pour traiter ma
                demande de réservation.
              </p>
            </div>
            <div class="cta_form">
              <button v-if="!checkbox">Réservez</button>
              <button v-if="checkbox" :class="{ opacity: checkbox }">
                Réservez
              </button>
            </div>
          </div>
        </form>

        
      </div>
    </section>
    <newsletter/>
  </main>
</template>

<script>
import Newsletter from '../components/default/Newsletter.vue';
export default {
  components: { Newsletter },
  data() {
    return {
      DateSelected: "",
      date: new Date(Date.now() + 3600 * 1000 * 24),
      checkbox: false,
      form: {
        name: "",
        convives: "",
        heure: "",
        DateSelected: "",
        email: "",
        phone: ""
      }
    };
  },
  methods: {
    submitreserve(e) {
      e.preventDefault();
      this.$axios
        .post("https://api.lamaisonblanche-dune.fr/reserve", { ...this.form })
        .then(res =>
          (this.form = "")((this.sucess = true))((this.error = false))
        )
        .catch(e);
      //   this.error = true
    }
  }
};
</script>

<style scoped>

v-data-picker {
  margin-top: 20px;
}

span.vc-day-content:hover {
  background-color: transparent !important;
}
.vc-bleu {
  background-color: var(--green)!important;
}
.vc-day-content .is-disabled {
  color: var(--body) !important;
}

.vc-day-content .vc-focusable:focus {
  background-color: var(--green)!important;

}

.vc-day .in-month .vc-day-box-center-center {
  color: var(--green) !important;
}

.vc-container {
  background-color: var(--background) !important;
  width: 100%;
  font-size: 14px;
  color: var(--black);
  border: 1px solid var(--black);
  border-radius: 0px;
  font-family: 'Arimo', sans-serif;
}

.vc-highlights .vc-day-layer {
  font-size: 14px !important;
  color: var(--black) !important;
}

.vc-day-content .vc-focusable:focus {
  background-color: var(--green) !important;
}
.rotate {
  transform: rotate(90deg);
}
.reservation {
  margin: 98px 0px 0px 0px;
}

hr {
  width: 100%;
  height: 1px;
  border: none;
  background-color: rgb(221, 221, 221);
  margin: 20px 0;
}

strong {
  color: var(--black);
}
.reservation {
  display: flex;
  flex-flow: column-reverse;
}

.block_right {
  width: 100%;
  padding: 20px;
}

.block_left {
  padding: 20px 20px;
  background-color: var(--redBody);
}

.title_block_left h3 {
  color: white;
}

.italic {
  font-family: "italic-title";
  text-transform: none;
  margin-left: 5px;
}

.items_contact {
  margin-bottom: 20px;
  margin-top: 20px;
}

.items_contact h5 {
  color: white;
  font-weight: bold;
  
}

.items_contact p {
  color: white;
  padding: 0!important;

  
}

.content_form p {
  padding: 10px 0px;
}

.content_label {
  margin-top: 20px;
  display: flex;
  flex-flow: column;
}

.label {
  margin-top: 10px;
  position: relative;
  width: 100%;
  margin-bottom: 20px;
}

.label p {
  color: var(--black);
  font-weight: bold;
}
.label_1 {
  margin-top: 10px;
  position: relative;
  width: 100%;
  margin-bottom: 20px;
}

.label p:nth-child(1):after {
  content: '*';
  position: absolute;
  top: 0;
  margin-left: 2px;
}

.label_1 p::after {
  content: '*';
  position: absolute;
  top: 0;
  margin-left: 2px;
}

.label_1 p {
  color: var(--black);
  font-weight: bold;
  margin-bottom: 10px;
}

.label input {
  border: none;
  background-color: transparent;
  border-bottom: 1px solid var(--black);
  width: 100%;
  border-radius: 0px;
  padding: 10px;
  font-size: 16px;
  color: var(--body);
  font-family: 'Noto', sans-serif;
  outline: none;
  -webkit-appearance: none;
}

.label input::placeholder {
  font-size: 16px;
  color: var(--body);
  font-family: 'Noto', sans-serif;
}

select {
  -webkit-appearance: none;
  padding: 14px;
  background-color: transparent;
  border: 1px solid var(--black);
  color: var(--black);
  font-weight: bold;
  outline: none;
  border-radius: 0px;
  width: 100%;
  text-align: center;

  font-size: 14px;
}

select option {
  color: var(--black);
}

input[type='checkbox' i] {
  background-color: var(--white) !important;
  width: 90px;
  border: 1px solid var(--redBody) !important;
  height: 30px;
  border-radius: 0px;
  -webkit-appearance: none;
  outline: none;
  transition: all 0.3s;
}

input[type='checkbox' i]:checked {
  background-color: var(--redBody) !important;
  width: 90px;
  height: 30px;
  -webkit-appearance: none;
  display: flex;
  transition: all 0.3s;
}

input[type='checkbox' i]:checked::after {
  content: 'x';
  font-size: 16px;
  color: white;
  font-weight: bold;
  display: flex;
  margin: auto;
}

.label_check {
  display: flex;
  flex-flow: row nowrap;
  align-items: flex-start;
}

.label_check p {
  margin-left: 20px;
  font-size: 14px;
  line-height: 20px;
}

.cta_form {
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
}

.cta_form button {
  background-color: var(--redBody);
  padding: 14px 32px;
  font-size: 16px;
  border: none;
  pointer-events: none;
  width: 100%;
  opacity: 0.5;
  color: var(--white);
  font-family: 'Arimo', sans-serif;
  font-weight: bold;
  margin: 10px 0px;
}

.opacity {
  opacity: 1 !important;
  pointer-events: all !important;
}

.service {
  display: flex;
  flex-flow: row;
  margin-top: 10px;
  width: 100%;
  justify-content: space-between;
}

.service p {
  border: 1px solid var(--redBody);
  padding: 8px 14px;
  width: 49%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.faq {
  margin-top: 30px;
}

.title_question {
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
}

.content_faq {
  margin-top: 20px;
}

.title_question p {
  font-size: 14px;
  color: var(--black);
  font-weight: bold;
}

.title_question img {
  width: 30px;
  transition: all 0.3s;
}

.content_respons p {
  margin-top: 5px;
  font-family: "Noto", sans-serif;
  font-size: 14px;
  line-height: 24px;
}

@media  screen and (min-width: 1024px) {
  .reservation {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-flow: row-reverse;
    margin-top: 200px;
    max-width: 1200px;
    margin: 200px auto;
  }

  .block_left {
    width: 47%;
       background-color: var(--redBody);
       position: sticky;
       top: 150px;
  }

  .title_block_left h3 {
    font-size: 24px;
    color: white;
 
  }

  .block_right {
    width: 47%;
  }
}
</style>
