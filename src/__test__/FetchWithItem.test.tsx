import { render, screen } from "@testing-library/react";
import { SWRConfig } from "swr";
import FetchWithItem from "../components/FetchWIthItem";
import "@testing-library/jest-dom";

global.fetch = jest.fn();

const renderWithSWR = (ui: React.ReactElement) => {
  return render(
    <SWRConfig value={{ provider: () => new Map(), shouldRetryOnError: false }}>
      {ui}
    </SWRConfig>
  );
};

describe("FetchWithItem snapshot tests", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test("matches loading snapshot", () => {
    (global.fetch as jest.Mock).mockImplementation(() => new Promise(() => {}));

    const { asFragment } = renderWithSWR(<FetchWithItem/>);
    expect(screen.getByText(/loading/i)).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });

  test("matches success snapshot", async () => {
    (global.fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: async () => [
        { id: 1, title: "Post 1", body: "Body 1", userId: 1 },
        { id: 2, title: "Post 2", body: "Body 2", userId: 1 },
      ],
    });

    const { asFragment } = renderWithSWR(<FetchWithItem />);

    await screen.findByText("Post 1");
    expect(asFragment()).toMatchSnapshot();
  });

  test("matches error snapshot", async () => {
    (global.fetch as jest.Mock).mockRejectedValueOnce(new Error("API error"));

    const { asFragment } = renderWithSWR(<FetchWithItem />);

    await screen.findByText(/error loading posts/i);
    expect(asFragment()).toMatchSnapshot();
  });
});