const {createApp} = Vue;

const app = createApp({
    data: () => ({
        name: "toDoList",
        tasks: [
            { id: 1, done: false, text: 'Fare la spesa' },
            { id: 2, done: true, text: 'Lavare i capelli' },
            { id: 3, done: false, text: 'Comprare una marca da bollo' },
            { id: 4, done: false, text: 'Aggiornare il PC' }
        ],
        
    }),
    methods: {
        deleteTask(id) {this.tasks = this.tasks.filter(task => id !== task.id)},
    }
})

app.mount("#root");