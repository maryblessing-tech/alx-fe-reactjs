// src/__tests__/TodoList.test.js
import { render, screen, fireEvent } from "@testing-library/react";
import TodoList from "../components/TodoList";

describe("TodoList Component", () => {
  test("renders initial todos", () => {
    render(<TodoList />);
    expect(screen.getByText("Learn React")).toBeInTheDocument();
    expect(screen.getByText("Write Tests")).toBeInTheDocument();
  });

  test("can add a new todo", () => {
    render(<TodoList />);
    const input = screen.getByPlaceholderText("New Todo");
    const addButton = screen.getByText("Add");
    fireEvent.change(input, { target: { value: "Test Todo" } });
    fireEvent.click(addButton);
    expect(screen.getByText("Test Todo")).toBeInTheDocument();
  });

  test("can toggle a todo", () => {
    render(<TodoList />);
    const todoItem = screen.getByText("Learn React");
    fireEvent.click(todoItem);
    expect(todoItem).toHaveStyle("text-decoration: line-through");
  });

  test("can delete a todo", () => {
    render(<TodoList />);
    const deleteButtons = screen.getAllByText("Delete");
    fireEvent.click(deleteButtons[0]);
    expect(screen.queryByText("Learn React")).not.toBeInTheDocument();
  });
});