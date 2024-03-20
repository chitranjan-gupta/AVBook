import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";

test("full app rendering", async () => {
  render(<App />);
  // verify page content for default route
  expect(screen.getByText(/Latest Movies & Shows/i)).toBeInTheDocument();
});
