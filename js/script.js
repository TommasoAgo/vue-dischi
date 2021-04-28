var app = new Vue(
    {
        el: '#root',
        data: {
            music: [],
            genres : [],
            select: 'all'
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
                    });

                    this.music.forEach((item) => {
                        if( !this.genres.includes(item.genre) ) {
                            this.genres.push(item.genre);
                        }
                        
                    });
                })
        }
    }
)