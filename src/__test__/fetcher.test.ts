import { fetcher } from "../utils/fetcher";
import "@testing-library/jest-dom";

global.fetch = jest.fn();

describe("fetcher snapshot tests", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test("matches snapshot on successful fetch", async () => {
    (global.fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: async () => ({ id: 1, title: "Test Post" }),
    });

    const data = await fetcher("/posts");

    expect(data).toMatchSnapshot();
  });

  test("matches snapshot on failed fetch", async () => {
    (global.fetch as jest.Mock).mockResolvedValueOnce({
      ok: false,
      status: 500,
      json: async () => ({ message: "Server error" }),
    });

    try {
      await fetcher("/posts");
    } catch (err: any) {
      expect({
        message: err.message,
        info: err.info,
        status: err.status,
      }).toMatchSnapshot();
    }
  });
});