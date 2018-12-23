var app = new Vue({
    el: '#app',
    data: {
        isActive: true,
        hasError: false,
        error: null,
        activeClass: 'active',
        errorClass: 'text-danger',
        activeColor: 'red',
        fontSize: 30,
        styleObject: {
            color: "red",
            fontSize: '15px'
        },
    },
    computed: {
        classObject: function(){
            return {
                active: this.isActive && !this.error,
                'text-danger': this.error && this.error.type==="fatal"
            }
        }
    },
})