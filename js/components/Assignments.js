import AssignmentList from "./AssignmentList.js";
import AssignmentCreate from "./AssignmentCreate.js";

export default {
    components: { AssignmentList, AssignmentCreate },

    template: `
        <section class="space-y-6">
            <assignment-list :assignments="filters.inArbeit" title="In Arbeit"></assignment-list>
            <assignment-list :assignments="filters.fertig" title="Fertig"></assignment-list>
            
            <assignment-create @add="add"></assignment-create> 
        </section>
    `,

    data() {
        return {
            assignments: [
                { name: 'Beende Projekt', complete: false, id: 1, tag: 'Mathe' },
                { name: 'Korrigiere Rechtschreibung', complete: false, id: 2, tag: 'Deutsch' }
            ],
        }
    },

    computed: {
        filters() {
            return {
                inProgress: this.assignments.filter(assignment => ! assignment.complete),
                completed: this.assignments.filter(assignment => assignment.complete)
            };
        }
    },

    methods: {
        add(name) {
            this.assignments.push({
                name: name,
                completed: false,
                id: this.assignments.length + 1
            });
        }
    }
}