<template>
<div class="app">
      <SigninForm/>
      </div>
</template>
<script>
import SigninForm from './components/SigninForm.vue'

export default ({
    name: 'App',
    components: {SigninForm}
})
</script>

<style>

.app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  background-color: #191531;
  width: 100vw;
  height: 100vh;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
