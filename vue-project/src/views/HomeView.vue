<script >

import TabbableTextarea from "@/components/TabbableTextarea.vue";
  import { ref } from "vue";
  let comment = ref('intinaler Textfeld-Bereich');

</script>

<template>
  <main>

   <Quiz :quiz="{name: 'Erstes Quiz', questions: []}"/>
  </main>
</template>
  

