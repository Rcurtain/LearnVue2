Vue.component('blog-post', {
    props: ['title'],
    template: '<h3>{{ title }}</h3>'
})

// 定义一个名为 button-counter 的新组件
Vue.component('button-counter', {
    data: function () {
        return {
            count: 0
        }
    },
    template: '<button v-on:click="count++">You clicked me {{ count }} times.</button>'
})

var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue!'
    }
})