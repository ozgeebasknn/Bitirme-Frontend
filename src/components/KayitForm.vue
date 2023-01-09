<template>
  <section class="hero is-fullheight">
    <div class="hero-body">
      <div class="container">
        <div class="columns is-centered">
          <div class="column is-5-tablet is-5-desktop is-5-widescreen">
            <form class="box"  @submit.prevent="submitForm">
              <div class="field has-text-centered">
                <img src="../assets/görseller/loginLogo.png" width="167" />
              </div>
              <div class="field">
                <label class="label">Name</label>
                <div class="control">
                  <input
                    class="input"
                    type="text"
                    v-model="user.name"
                    required
                  />
                </div>
              </div>
              <div class="field">
                <label class="label">Email</label>
                <div class="control">
                  <input
                    class="input"
                    type="text"
                    v-model="user.email"
                    required
                  />
                </div>
              </div>
              <div class="field">
                <label class="label">Password</label>
                <div class="control">
                  <input
                    class="input"
                    type="text"
                    placeholder="*****************"
                    v-model="user.password"
                    required
                  />
                </div>
              </div>

              <div class="field has-text-centered">
                <button type="submit" class="button is-success">Sign Up</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
  
</template>

<script>
export default {
  props: ["user", "submitForm"],
};
</script>

<style scoped>
.hero {
  background-color: #0b222e;
}</style>
