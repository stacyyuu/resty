import React from "react";
import { render, screen } from "@testing-library/react";
import Header from "./index";

test("Renders Header", () => {
  render(<Header />);
  expect(screen.getByText(/resty/i)).toBeDefined();
});
