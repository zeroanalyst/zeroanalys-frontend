import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("Main App Renders", () => {
  const { getByText } = render(<App />);
});
