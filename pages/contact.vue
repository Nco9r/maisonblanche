<template>
  <main>
    <section class="reservation">
      <div class="block_right">
        <div class="img"></div>
      </div>
      <div class="block_left">
        <div class="content_form">
          <div class="title_block_left">
            <h3>Contactez nous</h3>
          </div>
          <p>
            Pour tous renseignement concernant le restaurant ou un de nos
            événements, veuillez remplir le formulaire ci dessous. Nous
            reviendrons vers vous dans les plus brefs délais.
          </p>
        </div>
        <form>
          <div class="content_label">
            <div class="label">
              <p>Nom et prénom</p>
              <input type="text" required />
            </div>
            <div class="label">
              <p>Téléphone</p>
              <input type="phone" required />
            </div>
            <div class="label">
              <p>E-mail</p>
              <input type="email" required />
            </div>
            <div class="label">
              <p>Votre message</p>
              <textarea
                rows="5"
                type="text"
                placeholder="Comment pouvons nous vous aider..."
                required
              ></textarea>
            </div>
            <div class="label_check">
              <input type="checkbox" required @click="checkbox = !checkbox" />
              <p>
                Je consens à ce que les données que j'ai soumises soient
                collectées et stockées en vue d'être utilisées pour traiter ma
                demande de contact.
              </p>
            </div>
          </div>
          <div class="cta_form">
            <button v-if="!checkbox">Soumettre</button>
            <button v-if="checkbox" :class="{ opacity: checkbox }">
              Soumettre
            </button>
          </div>
        </form>
        <div class="faq">
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
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  data() {
    return {
      faq_1: false,
      faq_2: false,
      faq_3: false,
      faq_4: false,
      checkbox: false
    }
  }
}
</script>

<style scoped>
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

.block_right {
  background-image: url('~assets/img/jpg/mb.jpg');
  width: 100%;
  height: 300px;
  background-repeat: no-repeat;
  background-size: 100%;
}

.block_left {
  padding: 20px 20px;
}

.title_block_left h1 {
  color: var(--redBody);
}

.italic {
  font-family: 'italic-title';
  text-transform: none;
  margin-left: 5px;
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
  width: 100%;
  margin-bottom: 20px;
}

.label p {
  color: var(--black);
  font-weight: bold;
  position: relative;
}

.label p::after {
  content: '*';
  position: absolute;
  top: 0;
  margin-left: 5px;
}

.label input {
  border: none;
  background-color: transparent;
  border-bottom: 1px solid var(--black);
  width: 100%;
  padding: 10px 5px;
  border-radius: 0px;
  font-size: 16px;
  color: var(--body);
  font-family: 'Noto', sans-serif;
  outline: none;
  -webkit-appearance: none;
}

.label input::placeholder {
  font-size: 14px;
  color: var(--body);
  font-family: 'Noto', sans-serif;
}

.label textarea {
  border: none;
  border-radius: 0px;
  background-color: transparent;
  border-bottom: 1px solid var(--black);
  width: 100%;
  padding: 10px 5px;
  font-size: 16px;
  color: var(--body);
  font-family: 'Noto', sans-serif;
  outline: none;
  -webkit-appearance: none;
}

.label textarea::placeholder {
  font-size: 14px;
  color: var(--body);
  font-family: 'Noto', sans-serif;
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
  font-family: 'Noto', sans-serif;
  font-size: 14px;
  line-height: 24px;
}
</style>
