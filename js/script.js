var app = new Vue(
    {
        el: '#root',
        data: {
            music: [],
            genres : [],
            selectAll: 'All'
        },
        methods: {
            /*
            filterArray(array, val) {
                let filteredArray = [];
                if( val == "all" ) {
                    filteredArray = array;
                } else {
                    filteredArray = array.filter((element) => {
                        return element.genre == val;
                    })
                }
                    
                return filteredArray;
            }
            */
        },
        mounted() {
            axios
                .get('https://flynn.boolean.careers/exercises/api/array/music')
                .then((response) => {

                    this.music = response.data.response;

                    this.music.sort((a, b) => {
                        return a.year - b.year;
                    });

                    console.log(this.music);

                    this.music.forEach((item, index) => {
                        if( !this.genres.includes(item.genre) ) {
                            this.genres.push(item.genre);
                        }
                        
                    });

                    console.log(this.genres);

                    // problema 1 : sono duplicato
                    // poi : come faccio a stampare in html dentro la select i valori di questi generi?

                    // come faccio a sapere qua è il genere selezionato? v-model

                })
        }
    }
)