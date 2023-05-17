export default 
{
    template: `
        <button 
            :class="{
                '': true,
                'bg-blue-200': type == 'primary',
                'bg-red-200': type == 'secondary',
                'bg-gray-200': type == 'third',
                'is-loading': processing
            }" 
            :disabled="processing"
        >
            <slot/>
        </button>
    
    `,

    props: {
        type: 
        {
            type: String,
            default: 'primary'

        },

        processing: {
            type: Boolean,
            default: false
        }
    },

    data()
    {
        return
        {
            processing: true
        };
    }
}