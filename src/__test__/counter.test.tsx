import { render, screen, fireEvent } from "@testing-library/react";
import { Counter } from "../components/Counter";

describe("Counter snapshot test", () => {
  test("matches snapshots for different states", () => {
    const { asFragment } = render(<Counter />);

    const incrementBtn = screen.getByRole("button", { name: /increment/i });
    const decrementBtn = screen.getByRole("button", { name: /decrement/i });
    const resetBtn = screen.getByRole("button", { name: /reset/i });

    // Initial state
    expect(asFragment()).toMatchSnapshot();

    // After increment
    fireEvent.click(incrementBtn);
    expect(asFragment()).toMatchSnapshot();

    // After multiple actions
    fireEvent.click(incrementBtn);
    fireEvent.click(decrementBtn);
    expect(asFragment()).toMatchSnapshot();

    // After reset
    fireEvent.click(resetBtn);
    expect(asFragment()).toMatchSnapshot();
  });
});