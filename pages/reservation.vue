<template>
  <main>
    <section class="reservation">
      <div class="block_right">
        <div class="img"></div>
      </div>
      <div class="block_left">
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
        <form>
          <div class="content_label">
            <div class="label">
              <p>Nom et prénom</p>
              <input type="button" />
            </div>
            <div class="label">
              <p>Téléphone</p>
              <input type="phone" />
            </div>
            <div class="label">
              <p>E-mail</p>
              <input type="email" />
            </div>
            <div class="label_1">
              <p>Sélectionner une date</p>
              <no-ssr>
                <v-date-picker
                  mode="range"
                  v-model="DateSelected"
                  :min-date="date"
                  show-caps
                />
              </no-ssr>
            </div>
             <div class="label">
              <p>Sélectionner une horaire</p>
              <select
            name=""
            id=""
          
            required
            autocomplete="none"
          >
            <option disabled selected value="Choisir dans la liste">Choisir dans la liste</option>
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
  </main>
</template>

<script>
export default {
  data() {
    return {
      DateSelected: '',
      date: new Date(Date.now() + 3600 * 1000 * 24),
      checkbox: false,
    }
  }
}
</script>

<style scoped>
.reservation {
  margin: 98px 0px 0px 0px;
}

v-data-picker {
  margin-top: 20px;
}

span.vc-day-content:hover {
  background-color: transparent!important;
}

.vc-blue {
  color: var(--green);
}

.vc-day .in-month .vc-day-box-center-center {
  color: var(--green) !important;
}

.vc-container {
  background-color: var(--background) !important;
  width: 100%;
  font-size: 14px;
  color: var(--black);
  border: 1px solid var(--redBody);
  border-radius: 0px;
  font-family: 'Arimo', sans-serif;
}

.vc-highlights .vc-day-layer {
  font-size: 14px !important;
  color: var(--black) !important;
}

.vc-day-content .vc-focusable {
  color: var(--green) !important;
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

.title_block_left {
}

.title_block_left h1 {
  color: var(--redBody);
  text-transform: none;
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
  border-bottom: 1px solid var(--redBody);
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
  border: 1px solid var(--redBody);
  color: var(--black);
  font-weight: bold;
  outline: none;
  border-radius: 0px;
  width: 100%;
  text-align: center;
  margin-bottom: 20px;
  font-size: 14px;
}

select option {
  color: var(--black)
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
  font-size: 14Px;
  line-height: 20Px;
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
  border: 1Px solid var(--redBody);
  padding: 8px 14px;
  width: 49%;
  display: flex; 
  justify-content: center; 
  align-items: center;
}

</style>
