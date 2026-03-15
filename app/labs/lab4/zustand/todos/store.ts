import { create } from "zustand";

interface Todo {
  id: string;
  title: string;
}

interface TodoState {
  todos: Todo[];
  todo: Todo; 
  setTodo: (todo: Todo) => void;
  addTodo: (title: string) => void;
  deleteTodo: (id: string) => void;
  updateTodo: (todo: Todo) => void;
}

const useTodoStore = create<TodoState>((set) => ({
  todos: [
    { id: "1", title: "Learn Mongo" },
    { id: "2", title: "Learn React" },
    { id: "3", title: "Learn Node" },
  ],
  todo: { id: "", title: "" },


  setTodo: (todo) => set({ todo }),

  addTodo: (title) =>
    set((state) => ({
      todos: [...state.todos, { id: new Date().getTime().toString(), title }],
      todo: { id: "", title: "" }, 
    })),

  deleteTodo: (id) =>
    set((state) => ({
      todos: state.todos.filter((t) => t.id !== id),
    })),

  updateTodo: (todoToUpdate) =>
    set((state) => ({
      todos: state.todos.map((t) =>
        t.id === todoToUpdate.id ? todoToUpdate : t
      ),
      todo: { id: "", title: "" }, 
    })),
}));

export default useTodoStore;