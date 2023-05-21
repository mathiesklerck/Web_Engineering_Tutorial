import Assignment from "./Assignment.js";

export default {
    components: { Assignment },

    template: `
        <section v-show="assignments.length">
            <h2 class="font-bold mb-2">
                {{ title }}
                <span>({{ assignments.length }})</span>
            </h2>
            
            <div class="flex gap-2">
                <button
                    @click="aktuellerTag = tag"
                    v-for="tag in tags" 
                    class="border rounded px-1 py-px text-xs"
                    :class="{
                        'border-blue-500 text-blue-500': tag === aktuellerTag 
                    }"
                >{{ tag }}</button> 
            </div>
            <ul class="border border-gray-600 divide-y divide-gray-600 mt-6">
               <assignment 
                    v-for="assignment in gefilterteAssignments"
                    :key="assignment.id" 
                    :assignment="assignment"
                ></assignment>
            </ul>
        </section> 
    `,

    props: {
        assignments: Array,
        title: String
    },

    data() {
        return {
            aktuellerTag: 'all'
        };
    },

    computed: {
        gefilterteAssignments() {
            if (this.aktuellerTag === 'all') {
                return this.assignments;
            }

            return this.assignments.filter(a => a.tag === this.aktuellerTag);
        },

        tags() {
            return ['all', ...new Set(this.assignments.map(a => a.tag))];
        }
    }
}