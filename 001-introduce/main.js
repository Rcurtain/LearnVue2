var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue!'
    }
})

var app3 = new Vue({
    el: "#app-3",
    data: {
        seen: true
    }
})

var app4 = new Vue({
    el: "#app-4",
    data:{
        todos:[
            {text: "learn js"},
            {text: "learn Vue"},
            {text: "learn project"},
        ]
    }
})

var app5 = new Vue({
    el: "#app-5",
    data: {
        message: "hello Vue.js"
    },
    methods: {
        reverseMessage: function(){
            this.message = this.message.split(' ').reverse().join(' ');
        }
    },
})

var app6 = new Vue({
    el: "#app-6",
    data: {
        message: "hello Vue!"
    }
})