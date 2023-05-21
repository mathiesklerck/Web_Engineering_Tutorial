import AssignmentList from "./AssignmentList.js";
import AssignmentCreate from "./AssignmentCreate.js";

export default {
    components: { AssignmentList, AssignmentCreate },

    template: `
        <section class="flex gap-8">
            <assignment-list :assignments="filters.inArbeit" title="In Arbeit">
                <assignment-create @add="add"></assignment-create> 
            </assignment-list>
            
            <div v-show="zeigFertige">
                <assignment-list 
                    :assignments="filters.Fertiggestellt" 
                    title="Fertiggestellt" 
                    can-toggle
                    @toggle="zeigFertige = !zeigFertige"
                ></assignment-list>
            </div> 
        </section>
    `,

    data() {
        return {
            assignments: [],
            zeigFertige: true
        }
    },

    computed: {
        filters() {
            return {
                inArbeit: this.assignments.filter(assignment => ! assignment.complete),
                Fertiggestellt: this.assignments.filter(assignment => assignment.complete)
            };
        }
    },

    created() {
        fetch('http://localhost:8081/assignments')
            .then(response => response.json())
            .then(assignments => {
                this.assignments = assignments;
            });
    },

    methods: {
        add(name) {
            this.assignments.push({
                name: name,
                Fertiggestellt: false,
                id: this.assignments.length + 1
            });
        }
    }
}