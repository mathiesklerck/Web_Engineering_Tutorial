export default {
    template: `
        <div class="flex gap-2">
            <button
                @click="$emit('update:aktuellerTag', tag)"
                v-for="tag in tags" 
                class="border rounded px-1 py-px text-xs"
                :class="{
                    'border-blue-500 text-blue-500': tag === aktuellerTag 
                }"
            >{{ tag }}</button> 
        </div>  
    `,

    props: {
        initialTags: Array,
        aktuellerTag: String
    },

    computed: {
        tags() {
            return ['all', ...new Set(this.initialTags)];
        }
    }
}