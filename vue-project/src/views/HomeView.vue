<script setup>
import TheWelcome from "../components/TheWelcome.vue";
export default {
  components: { TheWelcome },

  data() {
    return{
      message: 'Hallo Welt'
    };
  },

  mounted(){
    alert("Ich wurde gemounted");
  },
};
</script>

<template>
  <main>
    <TheWelcome />
  </main>
</template>
