<script>
  import flash from "@/mixins/flash";

  export default{
    mixins: [flash]
  }
</script>
<template>
  <div class="about">
    <p>
      <button @click="flash('Es läuft auf der About Seite!')">Klick mich!</button>
    </p>
  </div>
</template>

