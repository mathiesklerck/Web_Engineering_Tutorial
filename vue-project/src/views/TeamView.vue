<script setup>

    import TeamHeader from "@/components/Teams/TeamHeader.vue";
    import TeamMembers from "@/components/Teams/TeamMembers.vue";
    import TeamFooter from "@/components/Teams/TeamFooter.vue";

    import { useTeamStore } from "@/stores/TeamStore";
    import Modal from "@/components/Modal.vue";
    import { ref } from "vue";

    let team = useTeamStore();
    team.fill();
    let team = ref(false);
    
   
</script>

<template>
    <TeamHeader />

        <div class="place-self-center flex flex-col gap-y-3" style="width: 725px">
            <TeamMembers />
        </div>


    <TeamFooter />

    <Modal :show="showModal" @close="showModal = false">
        
        <template #default>
            <p>Neuen Dude hinzufügen?</p>

                <form class="mt-6">
                    <div class="flex gap-2">

                        <input type="email" placeholder="Email Addresse hierhin" class="flex-1">
                        <button>hinzufügen</button>
                    </div>
                </form>
        </template>

    </Modal>
</template>