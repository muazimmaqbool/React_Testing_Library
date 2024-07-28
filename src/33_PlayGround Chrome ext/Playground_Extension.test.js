import { render, screen } from "@testing-library/react";
import Playground_Extension from "./Playground_Extension";

test("testing", () => {
  render(<Playground_Extension />);
  const btn = screen.getByRole("button", {
    name: /click to increase: 0/i,
  });
  expect(btn).toBeInTheDocument();
});
