"use client";
import useTodoStore from "./store";
import { ListGroup, ListGroupItem, Button, FormControl } from "react-bootstrap";

export default function ZustandTodoList() {
  const { todos, todo, setTodo, addTodo, updateTodo, deleteTodo } = useTodoStore();

  return (
    <div id="wd-zustand-todolist" className="p-3">
      <h2>Zustand Todo List</h2>
      <ListGroup>
        {/* Input Row for Add/Update */}
        <ListGroupItem className="d-flex gap-2">
          <Button
            onClick={() => addTodo(todo.title)}
            variant="success"
            id="wd-add-todo-click"
          >
            Add
          </Button>
          <Button
            onClick={() => updateTodo(todo)}
            variant="warning"
            id="wd-update-todo-click"
          >
            Update
          </Button>
          <FormControl
            value={todo.title}
            onChange={(e) => setTodo({ ...todo, title: e.target.value })}
            placeholder="New Todo Title"
          />
        </ListGroupItem>

        {/* List of Todos */}
        {todos.map((t) => (
          <ListGroupItem key={t.id} className="d-flex justify-content-between align-items-center">
            <span>{t.title}</span>
            <div className="d-flex gap-2">
              <Button
                onClick={() => setTodo(t)}
                variant="primary"
                size="sm"
                id="wd-edit-todo-click"
              >
                Edit
              </Button>
              <Button
                onClick={() => deleteTodo(t.id)}
                variant="danger"
                size="sm"
                id="wd-delete-todo-click"
              >
                Delete
              </Button>
            </div>
          </ListGroupItem>
        ))}
      </ListGroup>
    </div>
  );
}