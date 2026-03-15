"use client";
import React, { createContext, useContext, useState, ReactNode } from "react";

// Define the shape of a single TodoItem
interface TodoItem {
  id: string;
  title: string;
}

// Define the context state - must include todo and setTodo for the UI flow
interface TodosContextState {
  todos: TodoItem[];
  todo: TodoItem;
  setTodo: (todo: TodoItem) => void;
  addTodo: (title: string) => void;
  updateTodo: (todo: TodoItem) => void;
  deleteTodo: (id: string) => void;
}

const TodosContext = createContext<TodosContextState | undefined>(undefined);

export const TodosProvider = ({ children }: { children: ReactNode }) => {
  // State for the list of todos
  const [todos, setTodos] = useState<TodoItem[]>([
    { id: "1", title: "Learn Mongo" },
    { id: "2", title: "Learn React" },
    { id: "3", title: "Learn Node" },
  ]);

  // State for the item currently being typed/edited in the form
  const [todo, setTodo] = useState<TodoItem>({ id: "", title: "" });

  const addTodo = (title: string) => {
    const newTodo = { id: new Date().getTime().toString(), title };
    setTodos([...todos, newTodo]);
  };

  const deleteTodo = (id: string) => {
    setTodos(todos.filter((t) => t.id !== id));
  };

  const updateTodo = (todoToUpdate: TodoItem) => {
    setTodos(
      todos.map((t) => (t.id === todoToUpdate.id ? todoToUpdate : t))
    );
    setTodo({ id: "", title: "" }); // Reset form after update
  };

  const value: TodosContextState = {
    todos,
    todo,
    setTodo,
    addTodo,
    updateTodo,
    deleteTodo,
  };

  return (
    <TodosContext.Provider value={value}>{children}</TodosContext.Provider>
  );
};

export const useTodos = () => {
  const context = useContext(TodosContext);
  if (context === undefined) {
    throw new Error("useTodos must be used within a TodosProvider");
  }
  return context;
};