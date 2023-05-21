import AssignmentList from "./AssignmentList.js";

export default {
    components: { AssignmentList },

    template: `
        <section class="space-y-6">
            <assignment-list :assignments="filters.inArbeit" title="In Arbeit"></assignment-list>
            <assignment-list :assignments="filters.fertig" title="Fertig"></assignment-list>

            <form>
                <div class="border border-gray-400">
                    <input placeholder="New Assingment" class="text-black">
                    <button type="submit" class="bg-white text-black">Add</button>

                    
                    </input>
                </div>
            </form>
        </section>
    `,

    data() {
        return {
            assignments: [
                { name: 'Beende das Projekt', complete: false, id: 1 },
                { name: 'Korrigiere die Rechtschreibung', complete: false, id: 2 },
            ]
        }
    },

    computed: {
        filters() {
            return {
                inProgress: this.assignments.filter(assignment => ! assignment.complete),
                completed: this.assignments.filter(assignment => assignment.complete)
            };
        }
    }
}