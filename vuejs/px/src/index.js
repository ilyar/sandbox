import './prelude.js'
import Vue from 'vue';

new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue!'
    },
    render (h) {
        return h('div', this.message)
    }
})
