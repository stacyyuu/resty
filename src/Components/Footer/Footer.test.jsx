import React from "react";
import { render, screen } from "@testing-library/react";
import Footer from "./index";

test("Renders Footer", () => {
  render(<Footer />);
  expect(screen.getByText(/2018/i)).toBeDefined();
});
