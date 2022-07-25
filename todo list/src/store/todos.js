import { writable, get } from 'svelte/store';
import { generateRandomNumber } from '../utils'

const TODOS_INITIAL_STATE = [];

const todosStore = writable(TODOS_INITIAL_STATE);

const getStoreValues = () => get(todosStore);

export const todos = todosStore;

export const addTodo = (title, description) => {
  const values = getStoreValues();
  const newTodos = [...values, { id: generateRandomNumber(), title, description, isCompleted: false }];
  todosStore.set(newTodos);
}

export const removeTodo = (id) => {
  const values = getStoreValues();
  const newTodos = values.filter(todo => todo.id !== id);
  todosStore.set(newTodos);
}

export const completeTodo = (id) => {
  const values = getStoreValues();
  const newTodos = values.map(todo => todo.id === id ? { ...todo, isCompleted: true } : todo);
  todosStore.set(newTodos);
}
