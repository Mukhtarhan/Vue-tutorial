const app = Vue.createApp({
    data() {
        return{
            showBox: true,
            title: 'Forest',
            author: 'James',
            age: 34,
        }
    },
    methods: {
        changeTitle(title){
            this.title = title
        }
    }
})

app.mount('#app')