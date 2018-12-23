var app = new Vue({
    el: '#app',
    data: {
        items: [
            {message: 'Foo'},
            {message: 'Bar'}
        ]
    }
})

var app2 = new Vue({
    el: "#example-2",
    data: {
        parentMessage: "parent",
        items: [
            {message: 'Foo'},
            {message: 'Bar'}
        ]
    }
})

var app3 = new Vue({
    el: "#v-for-object",
    data: {
        object: {
            firstName: 'John',
            lastName: 'Doe',
            age: 30,
        }
    }
})