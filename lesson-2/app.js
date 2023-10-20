const app = Vue.createApp({
    data() {
        return{
            showBox: true,
            title: 'Forest',
            author: 'James',
            age: 34,
            x: 0,
            y:0
        }
    },
    methods: {
        changeTitle(title){
            this.title = title
        },
        handleEvent(e, x) {
            console.log(e.type, x)
        },
        handleMousemove(e) {
            this.x=e.offsetX
            this.y=e.offsetY
        }
    }
})

app.mount('#app')