import React from "react";
import { render, screen } from "@testing-library/react";
import Results from "./index";

test("Renders Results", () => {
  render(<Results />);
  expect(screen.getByText(/results/i)).toBeDefined();
});
