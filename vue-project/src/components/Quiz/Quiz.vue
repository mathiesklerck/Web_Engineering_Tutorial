<template>

    <QuizHeader/>

    <QuizQuestion/>
    <QuizFooter :quiz="quiz"/>


</template>

<script setup>
    import QuizHeader from "@/components/Quiz/QuizHeader.vue";
    
    import QuizQuestion from "@/components/Quiz/QuizQuestion.vue";
    import QuizFooter from "@/components/Quiz/QuizFooter.vue";

    defineProps({quiz: Object})

    let name = ref('Lasse Muetze');

    provide('name', {
        name, 
        changeName: () => name.value = 'Changed'
    });
</script>