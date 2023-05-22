<script >
import {useFlash} from "@composables/useFlash";
  export default{
    setup(){
      let {flash} = useFlash();

      return {flash};
    }  };
</script>

<template>
  <main>
    <p>
      <button @click="flash('Es läuft!')">Klick mich!</button>
    </p>
  </main>
</template>
