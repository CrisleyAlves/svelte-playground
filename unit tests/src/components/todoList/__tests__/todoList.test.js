/**
 * @jest-environment jsdom
 */
 import '@testing-library/jest-dom'

 const { render, fireEvent } = require("@testing-library/svelte");

 import { addTodo, getStoreValues, resetTodos } from '../../../store/todos';
 
 import TodoList from '../../todoList/todoList.svelte';
 
 describe('TodoList', () => {
   beforeEach(() => addTodo('dummy title', 'dummy description'))
   afterEach(() => resetTodos())

   test('should show todos', () => {
    const { getByText } = render(TodoList);
    const todos = getStoreValues();

    expect(getByText('dummy title')).toBeInTheDocument()
    expect(getByText('dummy description')).toBeInTheDocument()
    expect(todos.length).toBe(1);
   });

   test('should remove todo', () => {
    const { container } = render(TodoList);
    
    const removeButton = container.querySelector('.Button--danger');
    
    fireEvent.click(removeButton);
    
    const todos = getStoreValues();
    expect(todos.length).toBe(0);
   });

   test('should complete todo', () => {
    const { container } = render(TodoList);
    
    const completeButton = container.querySelector('.Button--success');
    
    fireEvent.click(completeButton);
    
    const todos = getStoreValues();
    const completedTodos = todos.filter(todo => todo.isCompleted)
    expect(completedTodos.length).toBe(1);
   });
 })