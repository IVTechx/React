import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import FetchNormal from "./components/FetchNormal";
import { Counter } from "./components/Counter";
import FetchWithItem from "./components/FetchWIthItem";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <FetchNormal />
    <Counter/>
    <FetchWithItem/>
  </StrictMode>,
);
