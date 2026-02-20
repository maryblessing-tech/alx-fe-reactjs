import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import TodoList from '../components/TodoList';

describe('TodoList Component', () => {
  test('renders TodoList component', () => {
    render(<TodoList />);
    expect(screen.getByText('My Todo List')).toBeInTheDocument();
  });

  test('displays initial todos', () => {
    render(<TodoList />);
    expect(screen.getByText('Learn React')).toBeInTheDocument();
    expect(screen.getByText('Build Todo App')).toBeInTheDocument();
    expect(screen.getByText('Master Testing')).toBeInTheDocument();
  });

  test('adds a new todo', () => {
    render(<TodoList />);
    const input = screen.getByPlaceholderText('Add a new todo');
    const button = screen.getByText('Add Todo');

    fireEvent.change(input, { target: { value: 'New Todo Item' } });
    fireEvent.click(button);

    expect(screen.getByText('New Todo Item')).toBeInTheDocument();
  });

  test('toggles todo completion', () => {
    render(<TodoList />);
    const todoItem = screen.getByText('Learn React');

    expect(todoItem).toHaveStyle('text-decoration: none');

    fireEvent.click(todoItem);
    expect(todoItem).toHaveStyle('text-decoration: line-through');

    fireEvent.click(todoItem);
    expect(todoItem).toHaveStyle('text-decoration: none');
  });

  test('deletes a todo', () => {
    render(<TodoList />);
    const todoText = 'Learn React';
    
    expect(screen.getByText(todoText)).toBeInTheDocument();

    const deleteButtons = screen.getAllByText('Delete');
    fireEvent.click(deleteButtons[0]);

    expect(screen.queryByText(todoText)).not.toBeInTheDocument();
  });
});