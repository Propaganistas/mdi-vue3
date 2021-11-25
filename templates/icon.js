import { h } from 'vue'

export default {
    name: <%= JSON.stringify(icon.name) %>,

    render() {
        return h('svg', {
            xmlns: "http://www.w3.org/2000/svg",
            fill: "currentColor",
            viewBox: '0 0 24 24',
            'aria-hidden': true,
        }, [
            h('path', {
                d: <%= JSON.stringify(icon.path) %>,
            })
        ])
    },
}