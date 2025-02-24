import { render, screen } from "@testing-library/react";
import App from "../App";

describe("Todo App", () => {
  it("renders initial todos", () => {
    render(<App />);
    expect(screen.getByText("Покормить кота")).toBeInTheDocument();
    expect(screen.getByText("Поиграть с котом")).toBeInTheDocument();
  });
});
