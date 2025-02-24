import { render, screen, fireEvent } from "@testing-library/react";
import App from "../App";

describe("Todo App", () => {
  it("renders initial todos", () => {
    render(<App />);
    expect(screen.getByText("Покормить кота")).toBeInTheDocument();
    expect(screen.getByText("Поиграть с котом")).toBeInTheDocument();
  });
  it("toggles todo status", () => {
    render(<App />);
    const checkbox = screen.getAllByRole("checkbox")[0];
    fireEvent.click(checkbox);
    expect(checkbox).toBeChecked();
  });

  it("filters todos", () => {
    render(<App />);
    fireEvent.click(screen.getByText("Completed"));
    expect(screen.queryByText("Покормить кота")).not.toBeInTheDocument();
    expect(screen.getByText("Поиграть с котом")).toBeInTheDocument();
  });

  it("clears completed", () => {
    render(<App />);
    fireEvent.click(screen.getByText("Clear completed"));
    expect(screen.queryByText("Поиграть с котом")).not.toBeInTheDocument();
  });

  it("adds new todo", () => {
    render(<App />);
    const input = screen.getByPlaceholderText("What needs to be done?");
    const addButton = screen.getByText("Add");

    fireEvent.change(input, { target: { value: "New Test Task" } });
    fireEvent.click(addButton);

    expect(screen.getByText("New Test Task")).toBeInTheDocument();
  });

  it("does not add empty todo", () => {
    render(<App />);
    const addButton = screen.getByText("Add");

    fireEvent.click(addButton);

    expect(screen.queryAllByRole("checkbox")).toHaveLength(3);
  });
});
