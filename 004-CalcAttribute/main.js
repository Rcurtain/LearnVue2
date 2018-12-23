var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue!',
        firstName: 'Foo',
        lastName: 'Bar',
        fullName: 'Foo Bar'
    },
    watch: {
        firstName: function (val) {
            this.fullName = val + ' ' + this.lastName
        },
        
        lastName: function (val) {
            this.fullName = this.firstName + ' ' + val
        }
    },
    // 我们可以将同一函数定义为一个方法而不是一个计算属性。
    // 不同的是计算属性是基于它们的依赖进行缓存的。只在相关依赖发生改变时它们才会重新求值。
    computed: {
        reversedMessage: function(){
            return this.message.split("").reverse().join("");
        },
        // fullName: function () {
        //     return this.firstName + ' ' + this.lastName
        // }
        fullName: {
            // getter
            get: function () {
                return this.firstName + ' ' + this.lastName
            },
            // setter
            set: function (newValue) {
                var names = newValue.split(' ')
                this.firstName = names[0]
                this.lastName = names[names.length - 1]
            }
        }
    },
    methods: {
        reversedMessage: function(){
            return this.message.split("").reverse().join("");
        }
    },
})