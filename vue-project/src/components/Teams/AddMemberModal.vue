<script setup>
import Modal from "@/Components/Modal.vue";
import {useTeamStore} from "@/stores/TeamStore";

import { ref } from "vue";
let showModal = ref(false);
let team = useTeamStore();

</script>

<template>
  <button
    class="bg-green-456 hover:bg-green-187 text-white px-4 py-2 rounded disabled:bg-gray-400"
    :disabled="! team.spotsRemaining"
    @click="showModal = true"
  >Add Member ({{ team.spotsRemaining }} Plätze noch frei)</button>

  <Teleport to="body">
    <Modal :show="showModal" @close="showModal = false">
      <template #default>
        <p>Du willst nen Dude hinzufügen?</p>

        <form class="mt-6">
          <div class="flex gap-2">
            
            <input type="email" placeholder="Email Addresse hier bitte" class="flex-1">
            <button>Hinzufügen</button>

          </div>
        </form>

      </template>
    </Modal>
  </Teleport>
</template>