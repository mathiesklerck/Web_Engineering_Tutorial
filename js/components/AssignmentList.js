export default{

    template: `
        <section v-show="assignments.length" class="mt-8">
            <h2 class="font-bold mb-2">{{Title}}</h2>

            <ul>
                <li v-for="assingment in assignments" 
                    :key="assingment.id">
                    <label> 
                        {{assingment.name}}
                        
                        <input type="checkbox" v-model="assingment.complete">

                    </label>
            
                </li>
            </ul>

            <pre>

                {{assingments}}
            </pre>
        </section>
    `,

    props: {
        assignments: Array,
        title: String
    }
}