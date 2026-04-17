import { render, screen, fireEvent } from "@testing-library/react";
import { PostItem } from "../components/PostItem";
import type { Post } from "../utils/utils";

describe("PostItem snapshot tests", () => {
  const mockPost: Post = {
    id: 1,
    userId: 1,
    title: "Test Title",
    body: "Test Body",
  };

  test("matches closed snapshot", () => {
    const { asFragment } = render(<PostItem post={mockPost} />);
    expect(asFragment()).toMatchSnapshot();
  });

  test("matches open snapshot after click", () => {
    const { asFragment } = render(<PostItem post={mockPost} />);

    const button = screen.getByRole("button", { name: /show more/i });
    fireEvent.click(button);

    expect(asFragment()).toMatchSnapshot();
  });
});