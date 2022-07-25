/**
 * @jest-environment jsdom
 */

const { render, fireEvent } = require("@testing-library/svelte");

import { getStoreValues } from '../../../store/todos';

import AddTodoForm from '../../form/AddTodoForm.svelte';

describe('AddTodoForm', () => {
  test('Should change input value', () => {
    const { container } = render(AddTodoForm);

    const title = container.querySelector('#title');
    const description = container.querySelector('#description');
    
    fireEvent.change(title, { target: { value: 'Todo title' } });
    fireEvent.change(description, { target: { value: 'Todo description' } });

    const updatedTitle = container.querySelector('#title');
    const updatedDescription = container.querySelector('#description');

    expect(updatedTitle.value).toBe('Todo title');
    expect(updatedDescription.value).toBe('Todo description');
  });

  test('Should add a new todo and clear form after submit', () => {
    const { container, getByText } = render(AddTodoForm);

    const title = container.querySelector('#title');
    const description = container.querySelector('#description');
    const submitButton = getByText('Add')
    
    fireEvent.change(title, { target: { value: 'Todo title' } });
    fireEvent.change(description, { target: { value: 'Todo description' } });
    fireEvent.click(submitButton);

    const updatedTitle = container.querySelector('#title');
    const updatedDescription = container.querySelector('#description');
    const todos = getStoreValues();

    expect(updatedTitle.value).toBe('');
    expect(updatedDescription.value).toBe('');
    expect(todos.length).toBe(1);
  });
})