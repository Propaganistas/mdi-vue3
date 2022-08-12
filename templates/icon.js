import { h, defineComponent } from 'vue'

export default defineComponent({
    name: <%= JSON.stringify(icon.name) %>,

    props: {
        title: String,
    },

    render() {
        return h('svg', {
            xmlns: "http://www.w3.org/2000/svg",
            fill: "currentColor",
            viewBox: '0 0 24 24',
            'aria-hidden': true,
        }, [
            this.title && this.title.length > 0 ? h('title', this.title) : null,
            h('path', {
                d: <%= JSON.stringify(icon.path) %>,
            })
        ])
    },
})