import { render, screen } from "@testing-library/react";
import Register from "../pages/register";
import "@testing-library/jest-dom";

describe("Register", () => {
  it("renders a page", () => {
    render(<Register />);
    const element = screen.getByTestId("register");

    expect(element).toBeInTheDocument();
  });
});
