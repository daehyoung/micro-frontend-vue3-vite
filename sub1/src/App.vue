<script setup>

</script>

<template>
  <h1>{{title}}</h1>
  <nav>

    <router-link :to="{ name: 'home' }">Home</router-link>|
    <router-link :to="{ name: 'about' }">About</router-link>
  </nav>
  <router-view/>
</template>

<script>

export default {
  name: 'App',
  components: {
  }
  ,data(){
    return {
        title: 'Sub 1'
    }
  }
  ,methods:{
    go(name){
      this.$router.push({ name: name})
    }
  }
}

</script>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
