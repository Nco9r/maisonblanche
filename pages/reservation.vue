<template>
  <main>
      <section class="reservation">
          <div class="block_right">
              <div class="img">
              </div>
          </div>
          <div class="block_left">
              <div class="title_block_left">
                  <h1>Réservez une table</h1>
              </div>
          </div>
      </section>
  </main>
</template>

<script>
export default {

}
</script>

<style scoped>
    .reservation {
        margin: 98px 0px 0px 0px;
    }

    .block_right {
        background-image: url('~assets/img/jpg/mb.jpg');
        width: 100%;
        height: 300px;
        background-repeat: no-repeat;
        background-size: 100%;
    }

    .block_left {
        background-color: var(--green);
        height: 500px;
    }

    .title_block_left {
        padding: 20px 10px;
    }

    .title_block_left h1 {
        color: var(--white);
    }
</style>