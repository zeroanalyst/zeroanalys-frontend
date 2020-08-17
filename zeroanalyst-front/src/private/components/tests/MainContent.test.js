import React from "react";
import { render } from "@testing-library/react";
import Content from "../MainContent";

test("Main Content Renders", () => {
  const content = render(<Content />);
});
