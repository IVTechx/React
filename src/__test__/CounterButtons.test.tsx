import { render } from "@testing-library/react";
import CounterButtons from "../components/CounterButtons";

describe("CounterButtons snapshot test", () => {
  test("matches snapshot", () => {
    const { asFragment } = render(
      <CounterButtons
        onInc={jest.fn()}
        onDec={jest.fn()}
        onReset={jest.fn()}
      />
    );

    expect(asFragment()).toMatchSnapshot();
  });
});