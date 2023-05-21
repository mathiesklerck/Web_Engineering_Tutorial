import Assignment from "./Assignment.js";
import AssignmentTags from "./AssignmentTags.js";

export default {
    components: { Assignment, AssignmentTags },

    template: `
        <section v-show="assignments.length" class="w-60">
            <div class="flex justify-between items-start">
                <h2 class="font-bold mb-2">
                    {{ title }}
                    <span>({{ assignments.length }})</span>
                </h2>
                
                <button v-show="kannTogglen" @click="$emit('toggle')">&times;</button>
            </div>
            
            <assignment-tags
                v-model:aktuellerTag="aktuellerTag"
                :initial-tags="assignments.map(a => a.tag)" 
            ></assignment-tags>

            <ul class="border border-gray-600 divide-y divide-gray-600 mt-6">
               <assignment 
                    v-for="assignment in gefilterteAssignments"
                    :key="assignment.id" 
                    :assignment="assignment"
                ></assignment>
            </ul>
            
            <slot></slot>
        </section> 
    `,

    props: {
        assignments: Array,
        title: String,
        kannTogglen: { type: Boolean, default: false }
    },

    data() {
        return {
            aktuellerTag: 'all',
        };
    },

    computed: {
        gefilterteAssignments() {
            if (this.aktuellerTag === 'all') {
                return this.assignments;
            }

            return this.assignments.filter(a => a.tag === this.aktuellerTag);
        }
    }
}