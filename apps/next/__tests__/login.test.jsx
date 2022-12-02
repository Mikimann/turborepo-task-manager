import { render, screen } from "@testing-library/react";
import Login from "../pages/login";
import "@testing-library/jest-dom";

describe("Login", () => {
  it("renders a page", () => {
    render(<Login />);
    const element = screen.getByTestId("login");

    expect(element).toBeInTheDocument();
  });
});
