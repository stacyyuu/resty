import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../App";

// describe("App Tests", () => {
test("Renders Request Method", () => {
  render(<App />);
  expect(screen.getByText(/request method/i)).toBeDefined();
});
// test("Renders URL", () => {
//   render(<App />);
//   expect(screen.getByText(/url:/i)).toBeDefined();
// });
// });