const app = Vue.createApp({
    data() {
        return{
            url: 'https://www.youtube.com/',
            showBox: true,
            books: [
                { title: 'name of the wind', author: 'James Blind', img:'assets/1.jpg', isFav:true },
                { title: 'the way of kings', author: 'Arthur Blind', img:'assets/2.jpg', isFav:false },
                { title: 'love is...', author: 'James Blind', img:'assets/3.jpg', isFav:true },
            ]
        }
    },
    methods: {
        changeTitle(title){
            this.title = title
        }
    },
    computed: {
        filteredBooks(){
            return this.books.filter((book) => book.isFav)
        }
    }
})

app.mount('#app')