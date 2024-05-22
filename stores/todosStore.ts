// import { defineStore } from "pinia";
// import { type TodoItem } from '~/models/todo.model';
export const useTodosStore = defineStore('todos',  {
  state: () => ({
    // todo: null as TodoItem | null,
    todos: [
      {
        name: "Task 1", 
        description: "blbalbla",
        date: new Date(),
        done: true,
        userId: "1",
        id: "0"
      },
      {
        name: "Task 2", 
        description: "blbalbla",
        date: new Date().getMonth() -  Math.floor(Math.random()*10),
        done: false,
        userId: "2",
        id: "1"
      },
      {
        name: "Task 3", 
        description: "blbalbla",
        date: new Date().getMonth() -  Math.floor(Math.random()*10),
        done: false,
        userId: "1",
        id: "3"
      }
    ]
  }),
  actions: {
    // addTodo(data: Omit<TodoItem, "id" | "date" | "userId">): void {
    //   // data.userId;
    //   // data.date = new Date();
    //   // const res = await ...(data);
    //   // state.todos.push(res);
    //   this.todos.push(data);
    // }

    // deleteTodo(id: string): void {
    //   // const res = await ...(data);
    //   // state.todos.push(res);
    //   const idx = this.todos.findIndex(el => el.id === id);
    //   this.todos.splice(idx, 1);
    // }

    // changeStatus(id: string, status: boolean): void {
    //   const idx = this.todos.findIndex(el => el.id === id);
    //   this.todos[idx].done = status;
    //   // const res = await ...(data);
    //   // state.todos.push(data);
    // }
  },
  getters: {
    getTodos: (state) => state.todos
  },
})