export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

// utils/counterUtils.ts
export const increment = (value: number) => value + 1;
export const decrement = (value: number) => value - 1;