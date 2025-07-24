import { render, screen } from "@testing-library/react";
import App from "../App";

import '@testing-library/jest-dom';

test('renders pizza toppings heading', () => {
  render(<App />);
  const headingElement = screen.getByText(/select pizza toppings/i);
  expect(headingElement).toBeInTheDocument();
});
