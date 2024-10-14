const App = {
    data() {
        return {
            placeholderString: 'Введите пост',
            inputValue: '',
            notes: ['Заметка 1', 'Заметка 2']
        }
    },
    methods: {
        // inputChangeHandler(event) {
        //     this.inputValue = event.target.value
        // },
        addNewNote() {
            if( this.inputValue !== '') {
                this.notes.push(this.inputValue)
                this.inputValue = ''
            }
        },
        removeAllNotes() {
            this.notes = []
        },
        removeThisNote(index) {
            this.notes.splice(index, 1)
        },
        toUpperCase(item) {
            return item.toUpperCase()
        }
    },
    computed: {
        doubleCountComputed() {
            return this.notes.length * 2;
        }
    },
    watch: {
        inputValue(value) {
            if(value.length > 10) {
                this.inputValue = ''
            }
        }
    }
};

Vue.createApp(App).mount('#app')


