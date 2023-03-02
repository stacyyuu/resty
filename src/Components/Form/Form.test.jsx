import React from "react";
import { render, screen } from "@testing-library/react";
import Form from "./index";

describe("Form Tests", () => {
test("Renders Submit", () => {
  render(<Form />);
  expect(screen.getByText(/go!/i)).toBeDefined();
});
test("Renders GET", () => {
  render(<Form />);
  expect(screen.getByText(/get/i)).toBeDefined();
});
test("Renders POST", () => {
  render(<Form />);
  expect(screen.getByText(/post/i)).toBeDefined();
});
test("Renders PUT", () => {
  render(<Form />);
  expect(screen.getByText(/put/i)).toBeDefined();
});
test("Renders DELETE", () => {
  render(<Form />);
  expect(screen.getByText(/delete/i)).toBeDefined();
});
});