import { render, screen } from "@testing-library/react";
import Home from "../pages/home";
import "@testing-library/jest-dom";

describe("Home", () => {
  it("renders a page", () => {
    render(<Home />);
    const element = screen.getByTestId("home");

    expect(element).toBeInTheDocument();
  });
});
