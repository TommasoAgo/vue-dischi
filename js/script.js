var app = new Vue(
    {
        el: '#root',
        data: {
            music: []
        },
        methods: {
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