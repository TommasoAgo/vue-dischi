var app = new Vue(
    {
        el: '#root',
        data: {
            music: []
        },
        methods: {
           
        },
        mounted() {
            axios
                .get('https://flynn.boolean.careers/exercises/api/array/music')
                .then((response) => {
                    this.music = response.data.response;
                    this.music.sort((a, b) => {
                        return a.year - b.year;
                    })
                })
        }
    }
)