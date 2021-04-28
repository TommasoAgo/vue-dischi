var app = new Vue(
    {
        el: '#root',
        data: {
            music: [],
            genres : [],
            select: ''
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

                    this.music.forEach((item, index) => {
                        if( !this.genres.includes(item.genre) ) {
                            this.genres.push(item.genre);
                        }
                        
                    });

                    console.log(this.select);

                    // problema 1 : sono duplicato
                    // poi : come faccio a stampare in html dentro la select i valori di questi generi?

                    // come faccio a sapere qua è il genere selezionato? v-model

                })
        }
    }
)